import { ResetPasswordForm } from "@/components/auth/password-forms";
import { Card, Logo } from "@/components/ui";

export default function ResetPasswordPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-charcoal px-5 py-12 text-ivory">
      <div className="pointer-events-none absolute -right-40 bottom-0 size-[34rem] rounded-full bg-gold/15 blur-3xl" />
      <Card className="relative w-full max-w-md border-gold/20 p-7 md:p-10">
        <div className="mb-8 text-center">
          <Logo className="justify-center" />
          <h1 className="mt-8 font-heading text-3xl font-semibold">Set New Password</h1>
          <p className="mt-2 text-ivory/60">Choose a secure password for your vault.</p>
        </div>
        <ResetPasswordForm />
      </Card>
    </main>
  );
}
