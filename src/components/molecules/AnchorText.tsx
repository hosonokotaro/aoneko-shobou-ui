import { ComponentProps } from 'react'
import styled from 'styled-components'

import { Anchor } from '@/atoms/Anchor'
import { Icon } from '@/atoms/Icon'
import { FONT_COLOR } from '@/const/color'
import { TRANSITION_TIME } from '@/const/common'
import { MARGIN } from '@/const/size'

export type AnchorTextProps = {
  text: string
  href: string
  target?: ComponentProps<typeof Anchor>['target']
}

export const AnchorText = ({ text, href, target }: AnchorTextProps) => {
  return (
    <StyledAnchorText href={href} target={target}>
      <StyledText>{text}</StyledText>
      {target === 'BLANK' && (
        <StyledIcon
          iconKind="OPEN_IN_NEW"
          fillColor="LINK"
          size="M"
          iconRotate="DEFAULT"
        />
      )}
    </StyledAnchorText>
  )
}

// NOTE: component を選択して styling するため
const StyledIcon = styled(Icon)``

const StyledAnchorText = styled(Anchor)`
  display: inline-flex;

  & > ${StyledIcon} {
    margin-left: ${MARGIN.XS};

    & > svg {
      transition: fill ${TRANSITION_TIME};
    }
  }

  @media (any-hover: hover) {
    &:hover {
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
