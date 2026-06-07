"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button, Input } from "@/components/ui";
import { createClient } from "@/lib/supabase/client";

export function ForgotPasswordForm() {
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleReset(formData: FormData) {
    setIsLoading(true);
    setError(null);
    setMessage(null);
    const supabase = createClient();
    const { error: resetError } = await supabase.auth.resetPasswordForEmail(
      String(formData.get("email")),
      { redirectTo: `${window.location.origin}/auth/callback?next=/reset-password` },
    );

    if (resetError) {
      setError(resetError.message);
    } else {
      setMessage("Reset link sent successfully. Check your inbox for the secure link.");
    }
    setIsLoading(false);
  }

  return (
    <form action={handleReset} className="space-y-5">
      {message ? <p className="rounded-lg border border-gold/20 bg-gold/10 px-4 py-3 text-sm text-gold">{message}</p> : null}
      {error ? <p className="rounded-lg border border-red-400/20 bg-red-500/10 px-4 py-3 text-sm text-red-200">{error}</p> : null}
      <Input id="email" name="email" type="email" label="Email Address" placeholder="investor@domain.com" autoComplete="email" required icon="✉" />
      <Button className="w-full" size="lg" type="submit" disabled={isLoading}>
        {isLoading ? "Sending..." : "Send Reset Link"}
      </Button>
      <div className="text-center">
        <Link href="/login" className="text-sm font-semibold text-ivory/65 hover:text-gold">
          ← Back to login
        </Link>
      </div>
    </form>
  );
}

export function ResetPasswordForm() {
  const router = useRouter();
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleUpdate(formData: FormData) {
    const password = String(formData.get("password"));
    const confirmPassword = String(formData.get("confirmPassword"));
    setError(null);
    setMessage(null);

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setIsLoading(true);
    const supabase = createClient();
    const { error: updateError } = await supabase.auth.updateUser({ password });

    if (updateError) {
      setError(updateError.message);
      setIsLoading(false);
      return;
    }

    setMessage("Password updated. Redirecting to your vault...");
    router.push("/dashboard");
    router.refresh();
  }

  return (
    <form action={handleUpdate} className="space-y-5">
      {message ? <p className="rounded-lg border border-gold/20 bg-gold/10 px-4 py-3 text-sm text-gold">{message}</p> : null}
      {error ? <p className="rounded-lg border border-red-400/20 bg-red-500/10 px-4 py-3 text-sm text-red-200">{error}</p> : null}
      <Input id="password" name="password" type="password" label="New Password" placeholder="••••••••" autoComplete="new-password" minLength={8} required icon="⌘" />
      <Input id="confirmPassword" name="confirmPassword" type="password" label="Confirm Password" placeholder="••••••••" autoComplete="new-password" minLength={8} required icon="⌘" />
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-gold">
        <span className="h-1 flex-1 rounded-full bg-gold" />
        Strong
      </div>
      <Button className="w-full" size="lg" type="submit" disabled={isLoading}>
        {isLoading ? "Updating..." : "Update Password"}
      </Button>
    </form>
  );
}
