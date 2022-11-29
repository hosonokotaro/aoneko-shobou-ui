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
  text: string
  buttonColor: ButtonBackgroundColor
  isSeeMore: boolean
}

const Button = ({ text, buttonColor, isSeeMore }: Props) => {
  return (
    <StyledButton $buttonColor={buttonColor}>
      {isSeeMore && (
        <StyledIcon iconKind="NAVIGATE_NEXT" fillColor="WHITE" size="XXL" />
      )}
      <Text>{text}</Text>
    </StyledButton>
  )
}

export default Button

const StyledButton = styled.button<{
  $buttonColor: ButtonBackgroundColor
}>`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  font-size: ${INLINE_SIZE.L};
  border-radius: ${BORDER_RADIUS.S};
  color: ${FONT_COLOR.WHITE};
  transition: background ${TRANSITION_TIME};

  ${({ $buttonColor }) =>
    `background: ${BUTTON_BACKGROUND_COLOR[$buttonColor]};`}

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

const Text = styled.div`
  line-height: 28px;
`
