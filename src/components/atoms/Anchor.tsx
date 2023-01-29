import { MouseEventHandler, ReactNode } from 'react'
import styled from 'styled-components'

import { FONT_COLOR } from '@/const/color'
import { TRANSITION_TIME } from '@/const/common'

const ANCHOR_TARGET = {
  SELF: '_self',
  BLANK: '_blank',
} as const

type AnchorTarget = keyof typeof ANCHOR_TARGET

export type AnchorProps = {
  /** styled-components が wrap して style を適用するために存在する（利用側で明示的に指定する必要はない） */
  className?: string
  href?: string
  target?: AnchorTarget
  /** preventDefault 無しの設定 */
  onClick?: MouseEventHandler<HTMLAnchorElement>
  children: ReactNode
}

const externalLinkRel = 'noopener noreferrer'

export const Anchor = ({
  className,
  href,
  target,
  onClick,
  children,
}: AnchorProps) => {
  return (
    <StyledAnchor
      className={className}
      href={href}
      target={target && ANCHOR_TARGET[target]}
      rel={target === 'BLANK' ? externalLinkRel : undefined}
      onClick={(event) => {
        if (typeof onClick !== 'function' || target === 'BLANK') return
        onClick(event)
      }}
    >
      {children}
    </StyledAnchor>
  )
}

const StyledAnchor = styled.a`
  color: ${FONT_COLOR.LINK};
  transition: color ${TRANSITION_TIME};

  @media (any-hover: hover) {
    &:hover {
      color: ${FONT_COLOR.LINK_HOVER};
    }
  }
`
