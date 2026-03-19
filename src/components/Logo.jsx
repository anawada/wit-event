import Image from 'next/image'

import logoSrc from '@/images/wit-logo.png'

export function Logo({
  className,
  alt = 'Women in Tech — Est. 2026',
  priority = true,
  ...props
}) {
  return (
    <Image
      src={logoSrc}
      alt={alt}
      width={logoSrc.width}
      height={logoSrc.height}
      className={className}
      priority={priority}
      {...props}
    />
  )
}
