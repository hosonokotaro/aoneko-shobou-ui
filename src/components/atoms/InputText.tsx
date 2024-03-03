import * as Styles from '@/atoms/InputText.css'

export type InputTextProps = {
  placeholder?: string
}

export const InputText = ({ placeholder }: InputTextProps) => {
  return (
    <input className={Styles.inputText} type="text" placeholder={placeholder} />
  )
}
