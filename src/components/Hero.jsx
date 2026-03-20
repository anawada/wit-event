import { BackgroundImage } from '@/components/BackgroundImage'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Countdown } from '@/components/Countdown'
import { HeroSparkles } from '@/components/HeroSparkles'

export function Hero() {
  return (
    <div className="relative py-20 sm:pt-36 sm:pb-24">
      <BackgroundImage className="-top-36 -bottom-14 z-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-1 overflow-hidden"
      >
        <div className="absolute inset-0 bg-tech-grid opacity-50 motion-reduce:animate-none motion-safe:animate-tech-grid-drift" />
        <HeroSparkles />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-brand-black/70" />
      </div>
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <p
            aria-hidden
            className="mb-3 inline-block rounded-full border-2 border-brand-cyan/60 bg-brand-magenta/20 px-4 py-1 font-mono text-xs font-medium tracking-wide text-brand-cyan uppercase"
          >
            Save the date
          </p>
          <h1 className="motion-reduce:animate-none motion-reduce:opacity-100 font-display animate-hero-rise text-5xl font-extrabold tracking-tighter opacity-0 sm:text-7xl">
            <span className="sr-only">Women in Tech Meetup 2026 — </span>
            <span className="bg-size-[220%_auto] bg-linear-to-r from-brand-cyan via-white/85 to-brand-magenta bg-clip-text text-transparent motion-reduce:animate-none motion-safe:animate-hero-text-shimmer">
              Women in Tech Meetup 2026
            </span>
          </h1>
          <div className="motion-reduce:animate-none motion-reduce:opacity-100 mt-7 flex w-full justify-start animate-hero-rise opacity-0 [animation-delay:120ms] md:mt-9">
            <Countdown />
          </div>
          <div className="motion-reduce:animate-none motion-reduce:opacity-100 mt-8 space-y-6 font-display text-2xl leading-snug tracking-tight text-white/90 animate-hero-rise opacity-0 [animation-delay:200ms] md:mt-10">
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
            className="motion-reduce:animate-none motion-reduce:opacity-100 mt-10 w-full animate-hero-rise opacity-0 [animation-delay:280ms] sm:hidden"
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
                className="motion-reduce:animate-none motion-reduce:opacity-100 animate-hero-rise rounded-2xl border-2 border-dashed border-brand-cyan/35 bg-brand-purple/25 px-4 py-3 opacity-0 transition-[border-color,background-color] duration-200 hover:border-brand-magenta/50 hover:bg-brand-purple/40"
                style={{ animationDelay: `${260 + i * 70}ms` }}
              >
                <dt className="font-mono text-xs tracking-wider text-brand-magenta uppercase">
                  {name}
                </dt>
                <dd className="mt-1 text-lg font-bold tracking-tight text-white sm:text-xl">
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
