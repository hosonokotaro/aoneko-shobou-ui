import { MouseEventHandler } from 'react'
import styled, { css } from 'styled-components'

import Anchor, { AnchorTarget } from '@/atoms/Anchor'
import Icon, { IconKind } from '@/atoms/Icon'
import {
  BUTTON_BACKGROUND_COLOR,
  ButtonBackgroundColor,
  FONT_COLOR,
} from '@/const/color'
import { Rotate, TRANSITION_TIME } from '@/const/common'
import {
  BORDER_RADIUS,
  ICON_BUTTON_SIZE,
  INLINE_SIZE,
  MARGIN,
} from '@/const/size'

type Props = {
  className?: string
  callback?: MouseEventHandler<HTMLButtonElement>
  text?: string
  buttonColor: ButtonBackgroundColor
  iconKind?: IconKind
  iconRotate?: Rotate
  isBorderRadius: boolean
  isAnchor?: boolean
  href?: string
  target?: AnchorTarget
}

const Button = ({
  className,
  callback,
  text,
  buttonColor,
  iconKind,
  isBorderRadius,
  iconRotate,
  isAnchor,
  href,
  target,
}: Props) => {
  return (
    <StyledButtonWrapper className={className}>
      {isAnchor && (
        <StyledAnchorButton
          href={href || ''}
          target={target}
          $buttonColor={buttonColor}
          $isBorderRadius={isBorderRadius}
        >
          {iconKind && (
            <StyledIcon
              iconKind={iconKind}
              fillColor="WHITE"
              size="XXL"
              iconRotate={iconRotate ?? 'DEFAULT'}
            />
          )}
          {text && <StyledText>{text}</StyledText>}
        </StyledAnchorButton>
      )}
      {!isAnchor && (
        <StyledButton
          $buttonColor={buttonColor}
          $isBorderRadius={isBorderRadius}
          onClick={callback}
        >
          {iconKind && (
            <StyledIcon
              iconKind={iconKind}
              fillColor="WHITE"
              size="XXL"
              iconRotate={iconRotate ?? 'DEFAULT'}
            />
          )}
          {text && <StyledText>{text}</StyledText>}
        </StyledButton>
      )}
    </StyledButtonWrapper>
  )
}

export default Button

const StyledButtonWrapper = styled.div`
  display: inline-flex;
`

const baseStyle = css<{
  $buttonColor: ButtonBackgroundColor
  $isBorderRadius: boolean
}>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: ${ICON_BUTTON_SIZE.WIDTH};
  min-height: ${ICON_BUTTON_SIZE.HEIGHT};
  font-size: ${INLINE_SIZE.M};
  color: ${FONT_COLOR.WHITE};
  transition: background ${TRANSITION_TIME};

  ${({ $buttonColor }) =>
    `background: ${BUTTON_BACKGROUND_COLOR[$buttonColor]};`}

  ${({ $buttonColor }) => {
    if ($buttonColor === 'DEFAULT_CURRENT') {
      return `
        cursor: pointer;
        pointer-events: none;
      `
    }
  }}

  ${({ $isBorderRadius }) =>
    `border-radius: ${$isBorderRadius ? BORDER_RADIUS.S : 0}`};

  @media (any-hover: hover) {
    &:hover {
      ${({ $buttonColor }) => {
        if ($buttonColor === 'DEFAULT') {
          return `background: ${BUTTON_BACKGROUND_COLOR.DEFAULT_HOVER};`
        }

        if ($buttonColor === 'EXTERNAL') {
          return `
            color: ${FONT_COLOR.WHITE};
            background: ${BUTTON_BACKGROUND_COLOR.EXTERNAL_HOVER};
          `
        }
      }}
    }
  }
`

const StyledButton = styled.button`
  ${baseStyle}
`

const StyledAnchorButton = styled(Anchor)`
  ${baseStyle}
`

const StyledIcon = styled(Icon)`
  margin: ${MARGIN.NONE} ${MARGIN.XS};
`

const StyledText = styled.div`
  margin-right: ${MARGIN.M};
  text-align: left;
  user-select: none;

  &:not(${StyledIcon} + &) {
    margin-left: ${MARGIN.M};
  }
`
