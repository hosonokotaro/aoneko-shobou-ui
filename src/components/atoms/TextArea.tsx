import { ComponentProps } from 'react'

import * as Styles from '@/atoms/TextArea.css'

export type TextAreaProps = {
  placeholder?: string
  elementProps?: ComponentProps<'textarea'>
}

export const TextArea = ({ placeholder, elementProps }: TextAreaProps) => {
  return (
    <textarea
      className={Styles.textarea}
      placeholder={placeholder}
      {...elementProps}
    />
  )
}
