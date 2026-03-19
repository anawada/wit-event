import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

function ArrowRightIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" {...props}>
      <path
        d="m14 7 5 5-5 5M19 12H5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Newsletter() {
  return (
    <section id="newsletter" aria-label="Register your interest">
      <Container>
        <div className="relative -mx-4 overflow-hidden bg-brand-purple px-4 py-20 shadow-[inset_0_0_80px_rgba(0,240,255,0.06)] ring-1 ring-brand-cyan/15 sm:-mx-6 sm:px-6 md:mx-0 md:rounded-5xl md:px-16 xl:px-24 xl:py-36">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 motion-reduce:animate-none animate-newsletter-breathe bg-linear-to-br from-brand-cyan/25 via-transparent to-brand-magenta/20" />
            <div className="absolute -inset-[25%] origin-center motion-reduce:animate-none animate-newsletter-drift bg-linear-to-t from-brand-black/35 via-transparent to-brand-cyan/10" />
            <div className="absolute inset-0 bg-tech-grid opacity-35 mix-blend-screen motion-reduce:animate-none motion-safe:animate-tech-grid-drift" />
          </div>
          <div className="relative mx-auto grid max-w-2xl grid-cols-1 gap-x-32 gap-y-14 xl:max-w-none xl:grid-cols-2">
            <div className="relative">
              <div
                aria-hidden
                className="pointer-events-none absolute top-0 left-0 h-48 w-48 -translate-x-1/4 -translate-y-1/4 rounded-full bg-[radial-gradient(circle,rgba(0,240,255,0.35)_0%,transparent_68%)] blur-2xl motion-reduce:animate-none animate-newsletter-headline-glow md:h-64 md:w-64"
              />
              <p className="motion-reduce:animate-none motion-reduce:opacity-100 relative animate-hero-rise font-display text-4xl font-medium tracking-tighter opacity-0 sm:text-5xl">
                <span className="bg-size-[220%_auto] bg-linear-to-r from-brand-cyan via-white/85 to-brand-magenta bg-clip-text text-transparent motion-reduce:animate-none motion-safe:animate-hero-text-shimmer">
                  Register your interest
                </span>
              </p>
              <p className="motion-reduce:animate-none motion-reduce:opacity-100 mt-4 animate-hero-rise text-lg tracking-tight text-white/85 opacity-0 [animation-delay:100ms]">
                Leave your email and we’ll keep you posted on tickets, the
                agenda, and how to get involved with Women in Tech Meetup 2026 at
                Millennium Point.
              </p>
            </div>
            <form className="motion-reduce:animate-none motion-reduce:opacity-100 animate-hero-rise opacity-0 [animation-delay:160ms]">
              <h3 className="text-lg font-semibold tracking-tight text-white">
                Your email <span aria-hidden="true">&darr;</span>
              </h3>
              <div className="mt-5 flex rounded-3xl bg-brand-black/70 py-2.5 pr-2.5 shadow-xl shadow-black/40 ring-1 ring-brand-cyan/25 focus-within:ring-2 focus-within:ring-brand-cyan">
                <input
                  type="email"
                  required
                  placeholder="Email address"
                  aria-label="Email address"
                  className="-my-2.5 flex-auto bg-transparent pr-2.5 pl-6 text-base text-white placeholder:text-white/45 focus:outline-hidden"
                />
                <Button type="submit">
                  <span className="sr-only sm:not-sr-only">Notify me</span>
                  <span className="sm:hidden">
                    <ArrowRightIcon className="h-6 w-6" />
                  </span>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  )
}
