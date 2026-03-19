import { DM_Sans, Inter } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-dm-sans',
})

export const metadata = {
  title: {
    template: '%s - Women in Tech Meetup 2026',
    default: 'Women in Tech Meetup 2026 — Birmingham',
  },
  description:
    'Register your interest for Women in Tech Meetup 2026 at Millennium Point, Birmingham — talks, panels, networking, and more. 8 June 2026, 9:30am – 3:30pm.',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full bg-brand-black font-sans text-white antialiased',
        inter.variable,
        dmSans.variable,
      )}
      suppressHydrationWarning
    >
      <body className="flex min-h-full font-sans" suppressHydrationWarning>
        <div className="flex w-full flex-col">{children}</div>
      </body>
    </html>
  )
}
