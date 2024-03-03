import { MouseEventHandler, ReactNode } from 'react'

import * as Styles from '@/atoms/Anchor.css'

const ANCHOR_TARGET = {
  SELF: '_self',
  BLANK: '_blank',
} as const

type AnchorTarget = typeof ANCHOR_TARGET[keyof typeof ANCHOR_TARGET]

export type AnchorProps = {
  dataStyleProps?: Partial<Styles.DataStyleProps>
  href?: string
  target?: AnchorTarget
  onClick?: MouseEventHandler<HTMLAnchorElement>
  children: ReactNode
}

const externalLinkRel = 'noopener noreferrer'

export const Anchor = ({
  dataStyleProps,
  href,
  target,
  onClick,
  children,
}: AnchorProps) => {
  return (
    <a
      className={Styles.anchor}
      {...dataStyleProps}
      href={href}
      target={target}
      rel={target === '_blank' ? externalLinkRel : undefined}
      onClick={(event) => {
        if (typeof onClick !== 'function' || target === '_blank') return
        onClick(event)
      }}
    >
      {children}
    </a>
  )
}
