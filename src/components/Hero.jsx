import { BackgroundImage } from '@/components/BackgroundImage'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function Hero() {
  return (
    <div className="relative py-20 sm:pt-36 sm:pb-24">
      <BackgroundImage className="-top-36 -bottom-14 z-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
      >
        <div className="absolute inset-0 bg-tech-grid opacity-50 motion-reduce:animate-none motion-safe:animate-tech-grid-drift" />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-brand-black/70" />
      </div>
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="motion-reduce:animate-none motion-reduce:opacity-100 font-display animate-hero-rise text-5xl font-bold tracking-tighter opacity-0 sm:text-7xl">
            <span className="sr-only">Women in Tech Meetup 2026 — </span>
            <span
              className="bg-size-[220%_auto] bg-linear-to-r from-brand-cyan via-white/85 to-brand-magenta bg-clip-text text-transparent motion-reduce:animate-none motion-safe:animate-hero-text-shimmer"
            >
              Women in Tech Meetup 2026
            </span>
          </h1>
          <div className="motion-reduce:animate-none motion-reduce:opacity-100 mt-6 animate-hero-rise space-y-6 font-display text-2xl tracking-tight text-white/90 opacity-0 [animation-delay:90ms]">
            <p>
              A full day in the heart of Birmingham for professionals who care
              about technology, leadership, and innovation — with speakers, a
              panel, networking, catering, and space for stalls and demos.
            </p>
            <p>
              Join a community shaping one of the most important conversations
              in our industry. Register your interest and we’ll let you know when
              tickets and updates go live.
            </p>
          </div>
          <Button
            href="#newsletter"
            className="motion-reduce:animate-none motion-reduce:opacity-100 mt-10 w-full animate-hero-rise opacity-0 [animation-delay:180ms] sm:hidden"
          >
            Register your interest
          </Button>
          <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {[
              ['When', '8 June 2026'],
              ['Time', '9:30am–3:30pm'],
              ['Venue', 'Millennium Point'],
              ['City', 'Birmingham'],
            ].map(([name, value], i) => (
              <div
                key={name}
                className="motion-reduce:animate-none motion-reduce:opacity-100 animate-hero-rise opacity-0"
                style={{ animationDelay: `${260 + i * 70}ms` }}
              >
                <dt className="font-mono text-sm text-brand-magenta">{name}</dt>
                <dd className="mt-0.5 text-xl font-semibold tracking-tight text-white">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </div>
  )
}
