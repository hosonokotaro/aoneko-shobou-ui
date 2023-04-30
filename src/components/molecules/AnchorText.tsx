import { ComponentProps } from 'react'
import styled from 'styled-components'

import { Anchor } from '@/atoms/Anchor'
import { Icon } from '@/atoms/Icon'
import { FONT_COLOR } from '@/const/color'
import { TRANSITION_TIME } from '@/const/common'
import { SPACE } from '@/const/size'

export type AnchorTextProps = {
  className?: string
  text: string
  href?: string
  target?: ComponentProps<typeof Anchor>['target']
}

export const AnchorText = ({
  className,
  text,
  href,
  target,
}: AnchorTextProps) => {
  return (
    <StyledAnchorText className={className} href={href} target={target}>
      <StyledText>{text}</StyledText>
      {target === '_blank' && (
        <StyledIcon iconKind="OPEN_IN_NEW" fillColor="LINK" size="M" />
      )}
    </StyledAnchorText>
  )
}

// NOTE: component を選択して styling するため
const StyledIcon = styled(Icon)``

const StyledAnchorText = styled(Anchor)`
  display: inline-flex;

  & > ${StyledIcon} {
    margin-left: ${SPACE.XS};

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
