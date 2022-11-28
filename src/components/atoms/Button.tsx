import Styled from 'styled-components'

import { BUTTON_COLOR, ButtonColor, COLOR, FONT_SIZE } from '../const/style'

type Props = {
  text: string
  buttonColor: ButtonColor
}

const Button = ({ text, buttonColor }: Props) => {
  return <StyledButton $buttonColor={buttonColor}>{text}</StyledButton>
}

export default Button

const StyledButton = Styled.button<{ $buttonColor: ButtonColor }>`
  display: block;
  width: 100%;
  height: 40px;
  text-align: center;
  font-size: ${FONT_SIZE.L};
  border-radius: 3px;
  color: ${COLOR.WHITE};
  text-shadow: 0 0 5px rgb(0 0 0 / 50%);
  transition: background 0.25s ease;

  ${({ $buttonColor }) => `background: ${BUTTON_COLOR[$buttonColor]};`}

  @media (any-hover: hover) {
    &:hover {
      ${({ $buttonColor }) => {
        if ($buttonColor === 'DEFAULT') {
          return `background: ${BUTTON_COLOR.DEFAULT_HOVER};`
        }

        if ($buttonColor === 'EXTERNAL') {
          return `background: ${BUTTON_COLOR.EXTERNAL_HOVER};`
        }
      }}
    }
  }
`
