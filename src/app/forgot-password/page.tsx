import { ForgotPasswordForm } from "@/components/auth/password-forms";
import { Card, Logo } from "@/components/ui";

export default function ForgotPasswordPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-charcoal px-5 py-12 text-ivory">
      <div className="pointer-events-none absolute -left-40 top-0 size-[34rem] rounded-full bg-gold/15 blur-3xl" />
      <Card className="relative w-full max-w-md p-7 md:p-10">
        <div className="mb-8 text-center">
          <Logo className="justify-center" />
          <h1 className="mt-8 font-heading text-3xl font-semibold">Reset Password</h1>
          <p className="mt-2 text-ivory/60">Enter your email to receive a secure link.</p>
        </div>
        <ForgotPasswordForm />
      </Card>
    </main>
  );
}
