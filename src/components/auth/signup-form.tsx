"use client";

import Link from "next/link";
import { useState } from "react";

import { Button, Card, Input } from "@/components/ui";
import { cn } from "@/lib/utils";
import { createClient } from "@/lib/supabase/client";

type Role = "creator" | "learner";

export function SignupForm() {
  const [role, setRole] = useState<Role>("creator");
  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSignup(formData: FormData) {
    setIsLoading(true);
    setError(null);
    setStatus(null);

    const supabase = createClient();
    const origin = window.location.origin;
    const { error: signupError } = await supabase.auth.signUp({
      email: String(formData.get("email")),
      password: String(formData.get("password")),
      options: {
        emailRedirectTo: `${origin}/auth/callback?next=/dashboard`,
        data: {
          full_name: String(formData.get("fullName")),
          role,
        },
      },
    });

    if (signupError) {
      setError(signupError.message);
      setIsLoading(false);
      return;
    }

    setStatus("Check your email for the secure verification link to activate your SYIE vault.");
    setIsLoading(false);
  }

  async function handleGoogleSignIn() {
    setIsLoading(true);
    setError(null);
    const supabase = createClient();
    const redirectTo = `${window.location.origin}/auth/callback?next=/dashboard`;
    const { error: oauthError } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo,
        queryParams: { prompt: "select_account" },
      },
    });

    if (oauthError) {
      setError(oauthError.message);
      setIsLoading(false);
    }
  }

  return (
    <form action={handleSignup} className="space-y-5">
      <div className="grid gap-3 sm:grid-cols-2">
        {([
          ["creator", "I'm a Creator", "Monetize expertise with institutional-grade tools."],
          ["learner", "I'm a Learner", "Access world-class knowledge from elite creators."],
        ] as const).map(([value, title, description]) => (
          <button
            key={value}
            type="button"
            onClick={() => setRole(value)}
            className={cn(
              "rounded-2xl border p-4 text-left transition duration-300",
              role === value
                ? "border-gold/50 bg-gold/10 shadow-[0_0_28px_rgba(212,175,55,0.14)]"
                : "border-white/10 bg-ivory/[0.03] hover:border-white/25",
            )}
          >
            <span className="block font-semibold text-ivory">{title}</span>
            <span className="mt-1 block text-sm leading-5 text-ivory/60">{description}</span>
          </button>
        ))}
      </div>
      <input type="hidden" name="role" value={role} />
      {status ? (
        <Card className="border-gold/20 bg-gold/10 p-4 text-sm text-gold">{status}</Card>
      ) : null}
      {error ? (
        <p className="rounded-lg border border-red-400/20 bg-red-500/10 px-4 py-3 text-sm text-red-200">
          {error}
        </p>
      ) : null}
      <Input id="fullName" name="fullName" label="Full Name" placeholder="Aarav Mehta" required />
      <Input
        id="email"
        name="email"
        type="email"
        label="Email Address"
        placeholder="investor@domain.com"
        autoComplete="email"
        required
      />
      <Input
        id="password"
        name="password"
        type="password"
        label="Password"
        placeholder="••••••••"
        autoComplete="new-password"
        minLength={8}
        required
      />
      <label className="flex items-start gap-3 text-sm leading-6 text-ivory/65">
        <input
          required
          type="checkbox"
          className="mt-1 size-4 rounded border-white/20 bg-ivory/5 text-gold focus:ring-gold/40"
        />
        <span>
          I agree to the <Link href="#" className="text-gold">Terms of Service</Link> and{" "}
          <Link href="#" className="text-gold">Privacy Policy</Link>.
        </span>
      </label>
      <Button className="w-full" size="lg" type="submit" disabled={isLoading}>
        {isLoading ? "Creating vault..." : "Create Account →"}
      </Button>
      <Button className="w-full" size="lg" type="button" variant="secondary" onClick={handleGoogleSignIn} disabled={isLoading}>
        Continue with Google
      </Button>
    </form>
  );
}
