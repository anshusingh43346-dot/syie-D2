import { Badge, ButtonLink, Card, Logo } from "@/components/ui";

const arsenal = [
  ["Books", "Publish digital resources, guides, and ebooks directly to your audience.", "📚"],
  ["Services", "Offer bespoke consulting, freelance services, and specialized engagements.", "✦"],
  ["Courses", "Create structured, premium video courses to scale your knowledge seamlessly.", "▶"],
  ["Mentorship", "Provide 1-on-1 guidance, coaching sessions, and ongoing advisory roles.", "◆"],
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-charcoal text-ivory">
      <div className="pointer-events-none absolute -left-32 top-0 size-[34rem] rounded-full bg-gold/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-72 size-[30rem] rounded-full bg-purple/15 blur-3xl" />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-charcoal/65 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-16">
          <Logo />
          <div className="hidden items-center gap-8 md:flex">
            {['Home', 'Creators', 'Books', 'Services', 'Courses', 'Mentorship'].map((item) => (
              <a key={item} href="#platform" className="text-sm font-medium text-ivory/65 no-underline transition hover:text-gold">
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <ButtonLink href="/login" variant="ghost" className="hidden md:inline-flex">
              Log in
            </ButtonLink>
            <ButtonLink href="/signup" variant="purple">
              Join SYIE
            </ButtonLink>
          </div>
        </nav>
      </header>

      <section className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-32 md:px-16 md:pb-28 md:pt-44 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="space-y-8">
          <Badge>Built for creators. Designed for growth.</Badge>
          <div className="space-y-6">
            <h1 className="max-w-3xl font-heading text-5xl font-bold leading-[1.05] tracking-[-0.04em] text-ivory md:text-7xl">
              Build a creator business that gets you seen.
            </h1>
            <p className="max-w-xl text-lg leading-8 text-ivory/70 md:text-xl">
              SYIE is the premium platform for sophisticated creators to monetize their expertise. Offer books, tailored services, premium courses, and exclusive mentorship—all in one place.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="/signup" size="lg" variant="purple">
              Join as a Creator →
            </ButtonLink>
            <ButtonLink href="#platform" size="lg" variant="secondary">
              Explore Courses
            </ButtonLink>
          </div>
          <div className="flex flex-wrap gap-3 text-sm font-semibold text-ivory/55">
            <span>Low 10% commission</span>
            <span className="text-gold">•</span>
            <span>Fast UPI payouts</span>
            <span className="text-gold">•</span>
            <span>Built for India</span>
          </div>
        </div>

        <div className="relative hidden min-h-[520px] md:block">
          <Card className="absolute right-0 top-8 w-4/5 p-6">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ivory/50">Premium Course</p>
                <h2 className="mt-2 font-heading text-3xl font-semibold">Advanced Wealth Strategies</h2>
              </div>
              <Badge>₹14,999</Badge>
            </div>
            <div className="mb-5 h-36 overflow-hidden rounded-xl border border-white/5 bg-gradient-to-br from-gold/20 via-ivory/5 to-purple/20" />
            <div className="flex items-center gap-3">
              <div className="size-11 rounded-full border border-white/10 bg-ivory/10" />
              <div>
                <p className="font-semibold">Vikram S.</p>
                <p className="text-sm text-ivory/55">Financial Architect</p>
              </div>
            </div>
          </Card>
          <Card className="absolute bottom-20 left-0 w-2/3 border-gold/20 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ivory/50">Total Earnings</p>
            <p className="mt-3 font-heading text-5xl font-bold text-gold">₹4,52,000</p>
            <p className="mt-2 text-sm font-semibold text-[#cabeff]">↗ +12.4% this month</p>
          </Card>
        </div>
      </section>

      <section id="platform" className="mx-auto max-w-7xl border-t border-white/5 px-5 py-20 md:px-16 md:py-28">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="font-heading text-4xl font-bold tracking-[-0.03em] md:text-5xl">The Complete Creator Arsenal</h2>
          <p className="mt-4 text-lg leading-8 text-ivory/65">Everything you need to package, sell, and scale your expertise to a premium audience.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {arsenal.map(([title, description, icon]) => (
            <Card key={title} className="p-7 transition hover:border-gold/25 hover:bg-ivory/[0.05]">
              <div className="mb-6 flex size-12 items-center justify-center rounded-full border border-gold/20 bg-gold/10 text-xl text-gold">{icon}</div>
              <h3 className="font-heading text-2xl font-semibold">{title}</h3>
              <p className="mt-3 leading-7 text-ivory/60">{description}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 md:px-16 md:pb-28">
        <Card className="overflow-hidden border-gold/20 p-8 text-center md:p-14">
          <Badge className="mb-6">Start earning on SYIE today</Badge>
          <h2 className="mx-auto max-w-3xl font-heading text-4xl font-bold tracking-[-0.03em] md:text-5xl">Join an exclusive network of high-performing creators.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-ivory/65">Set up your profile in minutes and start monetizing your expertise securely.</p>
          <ButtonLink href="/signup" size="lg" className="mt-8">Join as a Creator</ButtonLink>
        </Card>
      </section>

      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-ivory/45 md:px-16">
        © 2024 SYIE. Operated by Sdivynex. All rights reserved.
      </footer>
    </main>
  );
}
