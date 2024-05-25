import { map } from 'lodash-es'
import { ComponentProps } from 'react'

import * as Styles from '@/atoms/Select.css'

export type SelectProps = {
  valueList: string[]
  selectElementProps: ComponentProps<'select'>
  defaultSelectOption?: string
}

export const Select = ({
  valueList,
  selectElementProps,
  defaultSelectOption,
}: SelectProps) => {
  return (
    <select className={Styles.select} {...selectElementProps}>
      {map(valueList, (value) => (
        <option
          key={value}
          value={value}
          selected={value === defaultSelectOption}
        >
          {value}
        </option>
      ))}
    </select>
  )
}
