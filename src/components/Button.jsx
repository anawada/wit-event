import Link from 'next/link'
import clsx from 'clsx'

export function Button({ className, ...props }) {
  className = clsx(
    'inline-flex items-center justify-center rounded-full border-[3px] border-brand-black bg-brand-cyan px-7 py-3.5 text-base font-bold tracking-tight text-brand-black',
    'shadow-[5px_5px_0_0_rgb(255_0_122),inset_0_1px_0_rgb(255_255_255/0.35),0_0_20px_rgb(0_240_255/0.4)]',
    'transition-[transform,box-shadow,background-color] duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)]',
    'hover:-translate-y-1 hover:-rotate-2 hover:bg-brand-cyan',
    'hover:shadow-[8px_8px_0_0_rgb(255_0_122),inset_0_1px_0_rgb(255_255_255/0.42),0_0_26px_rgb(0_240_255/0.48)]',
    'active:translate-y-0 active:rotate-0',
    'active:shadow-[3px_3px_0_0_rgb(255_0_122),inset_0_1px_0_rgb(255_255_255/0.28)]',
    'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-cyan',
    'motion-reduce:hover:translate-y-0 motion-reduce:hover:rotate-0',
    'motion-reduce:shadow-[5px_5px_0_0_rgb(255_0_122),inset_0_1px_0_rgb(255_255_255/0.3),0_0_16px_rgb(0_240_255/0.35)]',
    'motion-reduce:hover:shadow-[5px_5px_0_0_rgb(255_0_122),0_0_18px_rgb(0_240_255/0.38)]',
    'motion-reduce:active:shadow-[3px_3px_0_0_rgb(255_0_122)]',
    className,
  )

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  )
}
