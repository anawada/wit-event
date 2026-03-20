'use client'

import { useEffect, useState } from 'react'
import clsx from 'clsx'

/** Event start: 8 June 2026, 9:30am UK (BST, UTC+1) */
const DEFAULT_TARGET_ISO = '2026-06-08T09:30:00+01:00'

function pad(n) {
  return String(n).padStart(2, '0')
}

function getParts(targetMs) {
  const now = Date.now()
  const diff = Math.max(0, targetMs - now)
  const s = Math.floor(diff / 1000)
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    seconds: s % 60,
    ended: diff === 0,
  }
}

function Segment({ label, value, mounted, className }) {
  return (
    <div
      className={clsx(
        'flex min-w-13 flex-col items-start gap-2 sm:min-w-16 md:min-w-18',
        className,
      )}
    >
      <span className="text-left font-display text-4xl font-extrabold tabular-nums leading-none tracking-tight text-brand-cyan sm:text-5xl md:text-6xl">
        {!mounted ? '—' : value}
      </span>
      <span className="text-left font-mono text-[10px] font-medium tracking-[0.18em] text-white/45 uppercase sm:text-xs sm:tracking-[0.2em]">
        {label}
      </span>
    </div>
  )
}

export function Countdown({ targetIso = DEFAULT_TARGET_ISO, className = '' }) {
  const targetMs = new Date(targetIso).getTime()
  const [mounted, setMounted] = useState(false)
  const [parts, setParts] = useState(() => getParts(targetMs))

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || Number.isNaN(targetMs)) return
    const tick = () => setParts(getParts(targetMs))
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [mounted, targetMs])

  return (
    <div
      className={clsx('w-full', className)}
      role="timer"
      aria-label={
        parts.ended
          ? 'The event has started'
          : `Time until event: ${parts.days} days, ${parts.hours} hours, ${parts.minutes} minutes`
      }
    >
      {parts.ended ? (
        <p className="text-left font-display text-lg font-semibold text-brand-cyan sm:text-xl">
          We&apos;re live — see you there!
        </p>
      ) : (
        <div className="flex max-w-full flex-wrap items-end justify-start gap-x-8 gap-y-6 sm:flex-nowrap sm:gap-x-10 md:gap-x-14">
          <Segment
            label="Days"
            value={String(parts.days)}
            mounted={mounted}
            className="pl-0"
          />
          <Segment label="Hours" value={pad(parts.hours)} mounted={mounted} />
          <Segment label="Mins" value={pad(parts.minutes)} mounted={mounted} />
        </div>
      )}
    </div>
  )
}
