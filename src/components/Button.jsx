import Link from 'next/link'
import clsx from 'clsx'

export function Button({ className, ...props }) {
  className = clsx(
    'inline-flex justify-center rounded-2xl bg-brand-cyan p-4 text-base font-semibold text-brand-black shadow-lg shadow-brand-cyan/25 hover:bg-brand-cyan/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cyan active:text-brand-black/70',
    className,
  )

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  )
}
