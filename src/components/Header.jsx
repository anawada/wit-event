import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'
import { Logo } from '@/components/Logo'

export function Header() {
  return (
    <header className="relative z-50 flex-none lg:pt-11">
      <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
        <div className="mt-10 lg:mt-0 lg:grow lg:basis-0">
          <Logo className="h-12 w-auto" />
        </div>
        <div className="order-first -mx-4 flex flex-auto basis-full justify-center overflow-x-auto py-4 sm:-mx-6 lg:order-0 lg:mx-0 lg:basis-auto lg:py-0">
          <div className="mx-4 flex w-fit max-w-[calc(100vw-2rem)] -rotate-1 items-center gap-3 rounded-full border-2 border-dashed border-brand-magenta/70 bg-brand-purple/50 px-5 py-2.5 font-mono text-sm text-brand-cyan shadow-[4px_4px_0_0] shadow-brand-cyan/25 backdrop-blur-sm sm:mx-auto sm:max-w-none sm:gap-4 sm:px-6 motion-reduce:rotate-0 motion-reduce:shadow-none">
            <p>
              <time dateTime="2026-06-08">08 June 2026</time>
            </p>
            <DiamondIcon className="h-2 w-2 shrink-0 overflow-visible fill-brand-magenta stroke-brand-magenta motion-reduce:fill-current motion-reduce:stroke-current" />
            <p className="text-white/90">Birmingham, UK</p>
          </div>
        </div>
        <div className="hidden sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
          <Button href="#newsletter">Register your interest</Button>
        </div>
      </Container>
    </header>
  )
}
