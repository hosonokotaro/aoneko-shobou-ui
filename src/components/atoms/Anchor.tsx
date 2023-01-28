import { ReactNode } from 'react'
import styled from 'styled-components'

import { FONT_COLOR } from '@/const/color'
import { TRANSITION_TIME } from '@/const/common'

const ANCHOR_TARGET = {
  SELF: '_self',
  BLANK: '_blank',
} as const

type AnchorTarget = keyof typeof ANCHOR_TARGET

export type AnchorProps = {
  className?: string
  href?: string
  target?: AnchorTarget
  handleClickEvent?: () => void
  children: ReactNode
}

const externalLinkRel = 'noopener noreferrer'

export const Anchor = ({
  className,
  href,
  target,
  handleClickEvent,
  children,
}: AnchorProps) => {
  return (
    <StyledAnchor
      className={className}
      href={href}
      target={target && ANCHOR_TARGET[target]}
      rel={target === 'BLANK' ? externalLinkRel : undefined}
      onClick={(event) => {
        if (typeof handleClickEvent !== 'function' || target !== 'SELF') return
        event.preventDefault()
        handleClickEvent()
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
