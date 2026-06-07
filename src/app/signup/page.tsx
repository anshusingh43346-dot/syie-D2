import Link from "next/link";

import { SignupForm } from "@/components/auth/signup-form";
import { Badge, Card, Logo } from "@/components/ui";

export default function SignupPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-charcoal px-5 py-12 text-ivory">
      <div className="pointer-events-none absolute -left-40 bottom-0 size-[34rem] rounded-full bg-purple/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 top-0 size-[34rem] rounded-full bg-gold/15 blur-3xl" />
      <section className="relative w-full max-w-2xl">
        <Card className="p-7 md:p-10">
          <div className="mb-8 text-center">
            <Logo className="justify-center" />
            <Badge className="mt-8">Choose your path</Badge>
            <h1 className="mt-5 font-heading text-4xl font-bold tracking-[-0.03em] md:text-5xl">
              Join the elite network of creators and investors.
            </h1>
            <p className="mt-4 text-ivory/60">Monetize your expertise or access world-class knowledge from elite creators.</p>
          </div>
          <SignupForm />
          <p className="mt-8 text-center text-sm text-ivory/60">
            Already have an account?{" "}
            <Link href="/login" className="font-semibold text-gold hover:text-[#f2ca50]">
              Log in
            </Link>
          </p>
        </Card>
      </section>
    </main>
  );
}
