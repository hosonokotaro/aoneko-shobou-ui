import { MouseEventHandler } from 'react'
import styled from 'styled-components'

import Icon from '@/atoms/Icon'
import {
  BORDER_RADIUS,
  BUTTON_BACKGROUND_COLOR,
  ButtonBackgroundColor,
  FONT_COLOR,
  INLINE_SIZE,
  MARGIN,
  TRANSITION_TIME,
} from '@/const/style'

type Props = {
  className?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  text: string
  buttonColor: ButtonBackgroundColor
  isSeeMore: boolean
  isBorderRadius: boolean
}

const Button = ({
  className,
  onClick,
  text,
  buttonColor,
  isSeeMore,
  isBorderRadius,
}: Props) => {
  return (
    <StyledButton
      className={className}
      $buttonColor={buttonColor}
      $isBorderRadius={isBorderRadius}
      onClick={onClick}
    >
      {isSeeMore && (
        <StyledIcon
          iconKind="NAVIGATE_NEXT"
          fillColor="WHITE"
          size="XXL"
          iconRotate="DEFAULT"
        />
      )}
      <StyledText>{text}</StyledText>
    </StyledButton>
  )
}

export default Button

const StyledButton = styled.button<{
  $buttonColor: ButtonBackgroundColor
  $isBorderRadius: boolean
}>`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  font-size: ${INLINE_SIZE.L};
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
  margin-right: ${MARGIN.S};
`

const StyledText = styled.div`
  line-height: 28px;
`
