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

export const BUTTON_SIZE = {
  M: 'M',
  S: 'S',
} as const

export type ButtonSize = typeof BUTTON_SIZE[keyof typeof BUTTON_SIZE]

type Props = {
  className?: string
  callback?: MouseEventHandler<HTMLButtonElement>
  text?: string
  buttonSize: ButtonSize
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
  buttonSize,
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
          $buttonSize={buttonSize}
        >
          {iconKind && (
            <StyledIcon
              iconKind={iconKind}
              fillColor="WHITE"
              size={buttonSize === BUTTON_SIZE.M ? 'XXL' : 'L'}
              iconRotate={iconRotate ?? 'DEFAULT'}
              $buttonSize={buttonSize}
            />
          )}
          {text && <StyledText $buttonSize={buttonSize}>{text}</StyledText>}
        </StyledAnchorButton>
      )}
      {!isAnchor && (
        <StyledButton
          $buttonColor={buttonColor}
          $isBorderRadius={isBorderRadius}
          $buttonSize={buttonSize}
          onClick={callback}
        >
          {iconKind && (
            <StyledIcon
              iconKind={iconKind}
              fillColor="WHITE"
              size={buttonSize === BUTTON_SIZE.M ? 'XXL' : 'L'}
              iconRotate={iconRotate ?? 'DEFAULT'}
              $buttonSize={buttonSize}
            />
          )}
          {text && <StyledText $buttonSize={buttonSize}>{text}</StyledText>}
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
  $buttonSize: ButtonSize
}>`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  min-width: ${({ $buttonSize }) =>
    $buttonSize === BUTTON_SIZE.S
      ? ICON_BUTTON_SIZE.S.WIDTH
      : ICON_BUTTON_SIZE.M.WIDTH};

  min-height: ${({ $buttonSize }) =>
    $buttonSize === BUTTON_SIZE.S
      ? ICON_BUTTON_SIZE.S.HEIGHT
      : ICON_BUTTON_SIZE.M.HEIGHT};

  margin: ${MARGIN.NONE};
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

const StyledIcon = styled(Icon)<{ $buttonSize: ButtonSize }>`
  margin: ${({ $buttonSize }) =>
    $buttonSize === BUTTON_SIZE.M
      ? `${MARGIN.NONE} ${MARGIN.XS}`
      : `${MARGIN.NONE}`};
`

const StyledText = styled.div<{ $buttonSize: ButtonSize }>`
  margin-right: ${({ $buttonSize }) =>
    $buttonSize === BUTTON_SIZE.M ? MARGIN.M : MARGIN.S};

  text-align: left;

  font-size: ${({ $buttonSize }) =>
    $buttonSize === BUTTON_SIZE.M ? INLINE_SIZE.M : INLINE_SIZE.S};

  user-select: none;

  &:not(${StyledIcon} + &) {
    margin-left: ${({ $buttonSize }) =>
      $buttonSize === BUTTON_SIZE.M ? MARGIN.M : MARGIN.S};
  }
`
