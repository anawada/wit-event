import clsx from 'clsx'

import { BackgroundImage } from '@/components/BackgroundImage'
import { Container } from '@/components/Container'

const day = {
  date: '8 June 2026',
  dateTime: '2026-06-08',
  summary:
    'One day at Millennium Point — sessions, a panel, breaks, and time to connect. Final timings and titles will be confirmed closer to the event.',
  timeSlots: [
    {
      name: 'Registration & refreshments',
      description: 'Tea, coffee, and meet the community',
      start: '9:30am',
      end: '10:00am',
    },
    {
      name: 'Welcome',
      description: null,
      start: '10:00am',
      end: '10:30am',
    },
    {
      name: 'Morning sessions',
      description: 'Talks from invited speakers (agenda to follow)',
      start: '10:30am',
      end: '12:00pm',
    },
    {
      name: 'Lunch',
      description: null,
      start: '12:00pm',
      end: '1:00pm',
    },
    {
      name: 'Afternoon sessions',
      description: 'Further talks and stories from the industry',
      start: '1:00pm',
      end: '2:30pm',
    },
    {
      name: 'Panel discussion',
      description: 'Q&A with guests (topics to be announced)',
      start: '2:30pm',
      end: '3:15pm',
    },
    {
      name: 'Closing remarks & networking',
      description: null,
      start: '3:15pm',
      end: '3:30pm',
    },
  ],
}

function DaySummary({ day: d }) {
  return (
    <>
      <h3 className="text-2xl font-semibold tracking-tight text-white">
        <time dateTime={d.dateTime}>{d.date}</time>
      </h3>
      <p className="mt-1.5 text-base tracking-tight text-white/85">
        {d.summary}
      </p>
    </>
  )
}

function TimeSlots({ day: d, className }) {
  return (
    <ol
      role="list"
      className={clsx(
        className,
        'space-y-8 bg-brand-purple/50 px-10 py-14 text-center shadow-xl shadow-black/30 ring-1 ring-brand-cyan/15 backdrop-blur-sm',
      )}
    >
      {d.timeSlots.map((timeSlot, timeSlotIndex) => (
        <li
          key={`${timeSlot.name}-${timeSlotIndex}`}
          aria-label={
            timeSlot.description
              ? `${timeSlot.name}: ${timeSlot.description}, ${timeSlot.start} to ${timeSlot.end}`
              : `${timeSlot.name}, ${timeSlot.start} to ${timeSlot.end}`
          }
        >
          {timeSlotIndex > 0 && (
            <div className="mx-auto mb-8 h-px w-48 bg-brand-cyan/25" />
          )}
          <h4 className="text-lg font-semibold tracking-tight text-brand-cyan">
            {timeSlot.name}
          </h4>
          {timeSlot.description && (
            <p className="mt-1 tracking-tight text-white/90">
              {timeSlot.description}
            </p>
          )}
          <p className="mt-1 font-mono text-sm text-white/55">
            {timeSlot.start} – {timeSlot.end}
            <span className="text-white/35"> · UK</span>
          </p>
        </li>
      ))}
    </ol>
  )
}

export function Schedule() {
  return (
    <section id="schedule" aria-label="Schedule" className="py-20 sm:py-32">
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
          <h2 className="font-display text-4xl font-medium tracking-tighter text-brand-cyan sm:text-5xl">
            Schedule
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-white/85">
            A single packed day focused on tech, leadership, and community — at
            Women in Tech Meetup 2026.
          </p>
        </div>
      </Container>
      <div className="relative mt-14 sm:mt-24">
        <BackgroundImage position="right" className="-top-40 -bottom-32" />
        <Container className="relative">
          <div className="mx-auto max-w-2xl">
            <DaySummary day={day} />
            <TimeSlots day={day} className="mt-10" />
          </div>
        </Container>
      </div>
    </section>
  )
}
