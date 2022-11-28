import styled from 'styled-components'

import Icon from '@/atoms/Icon'
import { COLOR, MARGIN, TRANSITION_TIME } from '@/const/style'

export const ANCHOR_TARGET = {
  SELF: '_self',
  BLANK: '_blank',
} as const

type AnchorTarget = typeof ANCHOR_TARGET[keyof typeof ANCHOR_TARGET]

type Props = {
  text: string
  href: string
  target?: AnchorTarget
}

const externalLinkRel = 'noopener noreferrer'

const AnchorText = ({ text, href, target }: Props) => {
  return (
    <StyledAnchorText
      href={href}
      target={target}
      rel={target === ANCHOR_TARGET.BLANK ? externalLinkRel : undefined}
    >
      <Text>{text}</Text>
      {target === ANCHOR_TARGET.BLANK && (
        <Icon iconKind="OPEN_IN_NEW" fillColor="LINK" size="M" />
      )}
    </StyledAnchorText>
  )
}

export default AnchorText

const StyledAnchorText = styled.a`
  display: inline-flex;
  color: ${COLOR.LINK};
  transition: color ${TRANSITION_TIME};

  /* FIXME: 選択する方法を模索しています */
  > i svg {
    margin-left: ${MARGIN.XS};
    transition: fill ${TRANSITION_TIME};
  }

  @media (any-hover: hover) {
    &:hover {
      color: ${COLOR.LINK_HOVER};

      > i svg {
        fill: ${COLOR.LINK_HOVER};
      }
    }
  }
`

const Text = styled.span`
  display: inline-flex;
`
