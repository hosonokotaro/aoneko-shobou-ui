import { ReactNode } from 'react'
import styled from 'styled-components'

import { FONT_COLOR } from '@/const/color'
import { TRANSITION_TIME } from '@/const/common'

const ANCHOR_TARGET = {
  SELF: '_self',
  BLANK: '_blank',
} as const

export type AnchorTarget = keyof typeof ANCHOR_TARGET

type Props = {
  className?: string
  href: string
  target?: AnchorTarget
  children: ReactNode
}

const externalLinkRel = 'noopener noreferrer'

const AnchorText = ({ className, href, target, children }: Props) => {
  return (
    <StyledAnchor
      className={className}
      href={href}
      target={target && ANCHOR_TARGET[target]}
      rel={target === 'BLANK' ? externalLinkRel : undefined}
    >
      {children}
    </StyledAnchor>
  )
}

export default AnchorText

const StyledAnchor = styled.a`
  color: ${FONT_COLOR.LINK};
  transition: color ${TRANSITION_TIME};

  @media (any-hover: hover) {
    &:hover {
      color: ${FONT_COLOR.LINK_HOVER};
    }
  }
`
