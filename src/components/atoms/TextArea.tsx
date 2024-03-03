import * as Styles from '@/atoms/TextArea.css'

export type TextAreaProps = {
  placeholder?: string
}

export const TextArea = ({ placeholder }: TextAreaProps) => {
  return <textarea className={Styles.textarea} placeholder={placeholder} />
}
