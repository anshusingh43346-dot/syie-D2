import Link from "next/link";
import { Suspense } from "react";

import { LoginForm } from "@/components/auth/login-form";
import { Badge, Card, Logo } from "@/components/ui";

export default function LoginPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-charcoal px-5 py-12 text-ivory">
      <div className="pointer-events-none absolute -left-40 top-10 size-[34rem] rounded-full bg-gold/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-48 bottom-0 size-[30rem] rounded-full bg-purple/15 blur-3xl" />
      <div className="relative grid w-full max-w-6xl gap-8 lg:grid-cols-[0.9fr_1fr] lg:items-center">
        <section className="hidden space-y-6 lg:block">
          <Badge>The private digital vault</Badge>
          <h1 className="font-heading text-6xl font-bold leading-tight tracking-[-0.04em]">
            The Gold Standard of Intellectual Exchange.
          </h1>
          <p className="max-w-lg text-xl leading-9 text-ivory/65">
            Access the private digital vault where sophisticated minds converge. Security, clarity, and excellence.
          </p>
        </section>
        <Card className="mx-auto w-full max-w-md p-7 md:p-10">
          <div className="mb-8 text-center">
            <Logo className="justify-center" />
            <h2 className="mt-8 font-heading text-3xl font-semibold">Welcome Back</h2>
            <p className="mt-2 text-ivory/60">Enter your credentials to access your vault.</p>
          </div>
          <Suspense>
            <LoginForm />
          </Suspense>
          <p className="mt-8 text-center text-sm text-ivory/60">
            New to SYIE?{" "}
            <Link href="/signup" className="font-semibold text-gold hover:text-[#f2ca50]">
              Create account
            </Link>
          </p>
        </Card>
      </div>
    </main>
  );
}
