import styled from 'styled-components'

import {
  BUTTON_BACKGROUND_COLOR,
  ButtonBackgroundColor,
  FONT_COLOR,
  INLINE_SIZE,
  MARGIN,
  TRANSITION_TIME,
} from '@/const/style'

type Props = {
  text: string
  buttonColor: ButtonBackgroundColor
  isSeeMore: boolean
}

const Button = ({ text, buttonColor, isSeeMore }: Props) => {
  return (
    <StyledButton $buttonColor={buttonColor} $isSeeMore={isSeeMore}>
      {text}
    </StyledButton>
  )
}

export default Button

const StyledButton = styled.button<{
  $buttonColor: ButtonBackgroundColor
  $isSeeMore: boolean
}>`
  display: block;
  width: 100%;
  height: 40px;
  text-align: center;
  font-size: ${INLINE_SIZE.L};
  border-radius: 3px;
  color: ${FONT_COLOR.WHITE};
  text-shadow: 0 0 5px rgb(0 0 0 / 50%);
  transition: background ${TRANSITION_TIME};

  ${({ $buttonColor }) =>
    `background: ${BUTTON_BACKGROUND_COLOR[$buttonColor]};`}

  ${({ $isSeeMore }) =>
    $isSeeMore &&
    `
      &::before {
        margin-right: ${MARGIN.M};
        content: ">";
      }
    `}

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
