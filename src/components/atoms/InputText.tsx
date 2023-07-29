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
    <textarea className={className} placeholder={placeholder} />
  ) : (
    <input type="text" className={className} placeholder={placeholder} />
  )
}
