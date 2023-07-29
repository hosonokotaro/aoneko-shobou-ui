import { map } from 'lodash-es'

export type SelectProps = {
  className?: string
  placeholder: string
  valueList: string[]
}

export const Select = ({ className, placeholder, valueList }: SelectProps) => {
  return (
    <select className={className}>
      <option value="" selected disabled hidden>
        {placeholder}
      </option>
      {map(valueList, (value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  )
}
