import styled, { css } from 'styled-components'

import { BORDER_COLOR, FONT_COLOR } from '../const/color'
import { BLOCK_WIDTH, BORDER_RADIUS, SPACE } from '../const/size'

export type InputTextProps = {
  className?: string
  placeholder: string
  isMultiLine: boolean
}

export const InputText = ({
  className,
  placeholder,
  isMultiLine,
}: InputTextProps) => {
  return isMultiLine ? (
    <StyledTextArea className={className} placeholder={placeholder} />
  ) : (
    <StyledInput type="text" className={className} placeholder={placeholder} />
  )
}

const baseStyle = css`
  width: ${BLOCK_WIDTH.FULL};
  padding: ${`${SPACE.M} ${SPACE.S}`};
  border: 1px solid ${BORDER_COLOR.GRAY};
  color: ${FONT_COLOR.BLACK};
  border-radius: ${BORDER_RADIUS.S};

  &::placeholder {
    color: ${FONT_COLOR.CAPTION};
  }

  &:focus {
    outline: 1px solid ${BORDER_COLOR.BLACK};
  }
`

const StyledTextArea = styled.textarea`
  height: 16em;

  ${baseStyle}
`

const StyledInput = styled.input`
  ${baseStyle}
`
