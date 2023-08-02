import { ComponentProps } from 'react'
import styled from 'styled-components'

import { BORDER_COLOR, FONT_COLOR } from '../const/color'
import { BLOCK_WIDTH, BORDER_RADIUS, SPACE } from '../const/size'

export type InputTextProps = {
  className?: string
  elementProps?: ComponentProps<'input'>
  placeholder?: string
}

export const InputText = ({
  className,
  elementProps,
  placeholder,
}: InputTextProps) => {
  return (
    <StyledInputText className={className}>
      <input type="text" {...elementProps} placeholder={placeholder} />
    </StyledInputText>
  )
}

const StyledInputText = styled.div`
  /* FIXME: Styled components を使った要素は DOM として制御し辛い。
     Style を子要素に適用する使い方をした。なにかの形で修正したい */
  & > input {
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
  }
`
