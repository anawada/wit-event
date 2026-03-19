import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'

export function Footer() {
  return (
    <footer className="flex-none py-16">
      <Container className="flex flex-col items-center justify-between md:flex-row">
        <Logo className="h-12 w-auto" />
        <p className="mt-6 text-base text-white/60 md:mt-0">
          Copyright &copy; {new Date().getFullYear()} Women in Tech Meetup, All rights reserved.
        </p>
      </Container>
    </footer>
  )
}
