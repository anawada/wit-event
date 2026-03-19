import clsx from 'clsx'

function FourPointStar({ className, style }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      className={className}
      style={style}
      aria-hidden
    >
      <path d="M16 0l2.8 10.5L29 12l-10.2 4.5L16 27l-2.8-10.5L3 12l10.2-4.5L16 0z" />
    </svg>
  )
}

const sparkles = [
  {
    el: FourPointStar,
    className:
      'top-[10%] left-[6%] h-7 w-7 text-brand-cyan/70 sm:left-[10%]',
    duration: '5.5s',
    delay: '0s',
  },
  {
    el: FourPointStar,
    className:
      'top-[18%] right-[8%] h-5 w-5 text-brand-magenta/65 sm:right-[14%]',
    duration: '7s',
    delay: '0.8s',
  },
  {
    el: FourPointStar,
    className:
      'top-[42%] left-[3%] h-4 w-4 text-brand-cyan/50 sm:left-[6%]',
    duration: '6s',
    delay: '1.2s',
  },
  {
    el: FourPointStar,
    className: 'bottom-[38%] right-[5%] h-6 w-6 text-white/40 sm:right-[10%]',
    duration: '8s',
    delay: '0.3s',
  },
  {
    el: 'dot',
    className:
      'top-[28%] left-[22%] h-2.5 w-2.5 rounded-full bg-brand-magenta/60 sm:left-[28%]',
    duration: '4.5s',
    delay: '1.5s',
  },
  {
    el: 'dot',
    className:
      'bottom-[48%] left-[12%] h-2 w-2 rounded-full bg-brand-cyan/55 sm:left-[18%]',
    duration: '5s',
    delay: '0.5s',
  },
  {
    el: FourPointStar,
    className:
      'bottom-[22%] left-[20%] h-3.5 w-3.5 text-brand-magenta/45 sm:left-[26%]',
    duration: '6.5s',
    delay: '2s',
  },
]

export function HeroSparkles() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {sparkles.map((item, i) => {
        const motionClass =
          'motion-safe:animate-sparkle-drift motion-reduce:animate-none'
        if (item.el === 'dot') {
          return (
            <div
              key={i}
              className={clsx(
                'absolute motion-reduce:opacity-60',
                item.className,
                motionClass,
              )}
              style={{
                animationDuration: item.duration,
                animationDelay: item.delay,
              }}
            />
          )
        }
        const Star = item.el
        return (
          <Star
            key={i}
            className={clsx(
              'absolute motion-reduce:opacity-50',
              item.className,
              motionClass,
            )}
            style={{
              animationDuration: item.duration,
              animationDelay: item.delay,
            }}
          />
        )
      })}
    </div>
  )
}
