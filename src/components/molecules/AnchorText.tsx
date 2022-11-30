import styled from 'styled-components'

import Icon from '@/atoms/Icon'
import { FONT_COLOR, MARGIN, TRANSITION_TIME } from '@/const/style'

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
      <StyledText>{text}</StyledText>
      {target === ANCHOR_TARGET.BLANK && (
        <StyledIcon iconKind="OPEN_IN_NEW" fillColor="LINK" size="M" />
      )}
    </StyledAnchorText>
  )
}

export default AnchorText

// NOTE: component を選択して styling するため
const StyledIcon = styled(Icon)``

const StyledAnchorText = styled.a`
  display: inline-flex;
  color: ${FONT_COLOR.LINK};
  transition: color ${TRANSITION_TIME};

  & > ${StyledIcon} {
    margin-left: ${MARGIN.XS};

    & > svg {
      transition: fill ${TRANSITION_TIME};
    }
  }

  @media (any-hover: hover) {
    &:hover {
      color: ${FONT_COLOR.LINK_HOVER};

      & > ${StyledIcon} {
        & > svg {
          fill: ${FONT_COLOR.LINK_HOVER};
        }
      }
    }
  }
`

const StyledText = styled.span`
  display: inline-flex;
`
