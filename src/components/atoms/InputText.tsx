import { ComponentProps } from 'react'

import * as Styles from '@/atoms/InputText.css'

export type InputTextProps = {
  placeholder?: string
  elementProps?: ComponentProps<'input'>
}

export const InputText = ({ placeholder, elementProps }: InputTextProps) => {
  return (
    <input
      className={Styles.inputText}
      type="text"
      placeholder={placeholder}
      {...elementProps}
    />
  )
}
