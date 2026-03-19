import clsx from 'clsx'

export function BackgroundImage({ className, position = 'left' }) {
  return (
    <div
      className={clsx('absolute inset-0 overflow-hidden', className)}
      aria-hidden
    >
      <div
        className={clsx(
          'absolute inset-0',
          position === 'right'
            ? 'bg-linear-to-bl from-brand-magenta/25 via-brand-purple/75 to-brand-black'
            : 'bg-linear-to-br from-brand-cyan/20 via-brand-purple/75 to-brand-black',
        )}
      />
      <div className="absolute inset-x-0 top-0 h-48 bg-linear-to-b from-brand-black to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-linear-to-t from-brand-black to-transparent" />
    </div>
  )
}
