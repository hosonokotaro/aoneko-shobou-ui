import { MouseEventHandler } from 'react'
import styled from 'styled-components'

import Icon, { IconKind } from '@/atoms/Icon'
import {
  BORDER_RADIUS,
  BUTTON_BACKGROUND_COLOR,
  ButtonBackgroundColor,
  FONT_COLOR,
  INLINE_MARGIN,
  INLINE_SIZE,
  Rotate,
  TRANSITION_TIME,
} from '@/const/style'

type Props = {
  className?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  text?: string
  buttonColor: ButtonBackgroundColor
  iconKind?: IconKind
  iconRotate?: Rotate
  isBorderRadius: boolean
}

const Button = ({
  className,
  onClick,
  text,
  buttonColor,
  iconKind,
  isBorderRadius,
  iconRotate,
}: Props) => {
  return (
    <StyledButton
      className={className}
      $buttonColor={buttonColor}
      $isBorderRadius={isBorderRadius}
      onClick={onClick}
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
  )
}

export default Button

const BUTTON_SIZE = {
  WIDTH: '40px',
  HEIGHT: '40px',
} as const

const StyledButton = styled.button<{
  $buttonColor: ButtonBackgroundColor
  $isBorderRadius: boolean
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: ${BUTTON_SIZE.WIDTH};
  min-height: ${BUTTON_SIZE.HEIGHT};
  font-size: ${INLINE_SIZE.M};
  color: ${FONT_COLOR.WHITE};
  transition: background ${TRANSITION_TIME};

  ${({ $buttonColor }) =>
    `background: ${BUTTON_BACKGROUND_COLOR[$buttonColor]};`}

  ${({ $isBorderRadius }) =>
    `border-radius: ${$isBorderRadius ? BORDER_RADIUS.S : 0}`};

  @media (any-hover: hover) {
    &:hover {
      ${({ $buttonColor }) => {
        if ($buttonColor === 'DEFAULT') {
          return `background: ${BUTTON_BACKGROUND_COLOR.DEFAULT_HOVER};`
        }

        if ($buttonColor === 'EXTERNAL') {
          return `background: ${BUTTON_BACKGROUND_COLOR.EXTERNAL_HOVER};`
        }
      }}
    }
  }
`

const StyledIcon = styled(Icon)`
  margin: 0 ${INLINE_MARGIN.XS};
`

const StyledText = styled.div`
  margin-right: ${INLINE_MARGIN.M};
  text-align: left;
  user-select: none;

  &:not(${StyledIcon} + &) {
    margin-left: ${INLINE_MARGIN.M};
  }
`
