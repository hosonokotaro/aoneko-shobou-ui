import { ComponentProps, MouseEventHandler } from 'react'
import styled, { css } from 'styled-components'

import { Anchor } from '@/atoms/Anchor'
import { Icon } from '@/atoms/Icon'
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

const BUTTON_SIZE = {
  M: 'M',
  S: 'S',
} as const

type ButtonSize = typeof BUTTON_SIZE[keyof typeof BUTTON_SIZE]

export type ButtonProps = {
  /** styled-components が wrap して style を適用するために存在する（利用側で明示的に指定する必要はない） */
  className?: string
  buttonCallback?: MouseEventHandler<HTMLButtonElement>
  anchorCallback?: () => void
  text?: string
  buttonSize: ButtonSize
  buttonColor: ButtonBackgroundColor
  iconKind?: ComponentProps<typeof Icon>['iconKind']
  iconRotate?: Rotate
  isAnchor?: boolean
  href?: string
  target?: ComponentProps<typeof Anchor>['target']
}

export const Button = ({
  className,
  buttonCallback,
  anchorCallback,
  text,
  buttonSize,
  buttonColor,
  iconKind,
  iconRotate,
  isAnchor,
  href,
  target,
}: ButtonProps) => {
  return (
    <StyledButtonWrapper className={className}>
      {isAnchor && (
        <StyledAnchorButton
          href={href}
          target={target}
          onClick={anchorCallback}
          $buttonColor={buttonColor}
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
          $buttonSize={buttonSize}
          onClick={buttonCallback}
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

const StyledButtonWrapper = styled.div`
  display: inline-flex;
  pointer-events: auto;
`

const baseStyle = css<{
  $buttonColor: ButtonBackgroundColor
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

  border-radius: ${BORDER_RADIUS.S};

  @media (any-hover: hover) {
    &:hover {
      color: ${FONT_COLOR.WHITE};

      ${({ $buttonColor }) => {
        if ($buttonColor === 'DEFAULT') {
          return `
            background: ${BUTTON_BACKGROUND_COLOR.DEFAULT_HOVER};
          `
        }

        if ($buttonColor === 'EXTERNAL') {
          return `
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
