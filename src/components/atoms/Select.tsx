import { map } from 'lodash-es'
import styled from 'styled-components'

import { BORDER_COLOR, FONT_COLOR } from '../const/color'
import { BLOCK_WIDTH, BORDER_RADIUS, SPACE } from '../const/size'

export type SelectProps = {
  className?: string
  valueList: string[]
}

export const Select = ({ className, valueList }: SelectProps) => {
  return (
    <StyledSelect className={className}>
      {map(valueList, (value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </StyledSelect>
  )
}

const StyledSelect = styled.select`
  width: ${BLOCK_WIDTH.FULL};
  padding: ${`${SPACE.M} ${SPACE.XS}`};
  border: 1px solid ${BORDER_COLOR.GRAY};
  color: ${FONT_COLOR.BLACK};
  border-radius: ${BORDER_RADIUS.S};

  &:focus {
    outline: 1px solid ${BORDER_COLOR.BLACK};
  }
`
