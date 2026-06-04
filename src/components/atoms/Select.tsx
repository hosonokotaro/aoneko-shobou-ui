import { ComponentProps } from 'react'

import * as Styles from '@/atoms/Select.css'

export type SelectProps = {
  valueList: string[]
  elementProps: ComponentProps<'select'>
}

export const Select = ({ valueList, elementProps }: SelectProps) => {
  return (
    <select className={Styles.select} {...elementProps}>
      {valueList.map((value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  )
}
