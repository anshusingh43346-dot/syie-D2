"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

import { Button, Input } from "@/components/ui";
import { createClient } from "@/lib/supabase/client";

export function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<string | null>(searchParams.get("message"));
  const [error, setError] = useState<string | null>(searchParams.get("error"));
  const [isLoading, setIsLoading] = useState(false);

  async function handleEmailSignIn(formData: FormData) {
    setIsLoading(true);
    setError(null);
    setStatus(null);

    const supabase = createClient();
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email: String(formData.get("email")),
      password: String(formData.get("password")),
    });

    if (signInError) {
      setError(signInError.message);
      setIsLoading(false);
      return;
    }

    router.push("/dashboard");
    router.refresh();
  }

  async function handleGoogleSignIn() {
    setIsLoading(true);
    setError(null);
    const supabase = createClient();
    const redirectTo = `${window.location.origin}/auth/callback?next=/dashboard`;
    const { error: oauthError } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo },
    });

    if (oauthError) {
      setError(oauthError.message);
      setIsLoading(false);
    }
  }

  return (
    <form action={handleEmailSignIn} className="space-y-5">
      {status ? (
        <p className="rounded-lg border border-gold/20 bg-gold/10 px-4 py-3 text-sm text-gold">
          {status}
        </p>
      ) : null}
      {error ? (
        <p className="rounded-lg border border-red-400/20 bg-red-500/10 px-4 py-3 text-sm text-red-200">
          {error}
        </p>
      ) : null}
      <Input
        id="email"
        name="email"
        type="email"
        label="Email Address"
        placeholder="investor@domain.com"
        autoComplete="email"
        required
        icon="✉"
      />
      <Input
        id="password"
        name="password"
        type="password"
        label="Password"
        placeholder="••••••••"
        autoComplete="current-password"
        required
        icon="⌘"
      />
      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2 text-ivory/65">
          <input
            type="checkbox"
            className="size-4 rounded border-white/20 bg-ivory/5 text-gold focus:ring-gold/40"
          />
          Remember me
        </label>
        <Link href="/forgot-password" className="font-semibold text-gold hover:text-[#f2ca50]">
          Forgot password?
        </Link>
      </div>
      <Button className="w-full" size="lg" type="submit" disabled={isLoading}>
        {isLoading ? "Opening vault..." : "Sign In"}
      </Button>
      <Button
        className="w-full"
        size="lg"
        type="button"
        variant="secondary"
        onClick={handleGoogleSignIn}
        disabled={isLoading}
      >
        Continue with Google
      </Button>
    </form>
  );
}
