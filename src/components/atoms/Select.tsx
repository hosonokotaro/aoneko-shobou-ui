import { map } from 'lodash-es'

import * as Styles from '@/atoms/Select.css'

export type SelectProps = {
  valueList: string[]
}

export const Select = ({ valueList }: SelectProps) => {
  return (
    <select className={Styles.select}>
      {map(valueList, (value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  )
}
