import { map } from 'lodash-es'
import { ComponentProps } from 'react'
import styled from 'styled-components'

import { BORDER_COLOR, FONT_COLOR } from '../const/color'
import { BLOCK_WIDTH, BORDER_RADIUS, SPACE } from '../const/size'

export type SelectProps = {
  className?: string
  selectElementProps: ComponentProps<'select'>
  valueList: string[]
}

export const Select = ({
  className,
  selectElementProps,
  valueList,
}: SelectProps) => {
  return (
    <StyledSelect className={className}>
      <select {...selectElementProps}>
        {map(valueList, (value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </StyledSelect>
  )
}

const StyledSelect = styled.div`
  /* FIXME: Styled components を使った要素は DOM として制御し辛い。
     Style を子要素に適用する使い方をした。なにかの形で修正したい */
  & > select {
    width: ${BLOCK_WIDTH.FULL};
    padding: ${`${SPACE.M} ${SPACE.XS}`};
    border: 1px solid ${BORDER_COLOR.GRAY};
    color: ${FONT_COLOR.BLACK};
    border-radius: ${BORDER_RADIUS.S};

    &:focus {
      outline: 1px solid ${BORDER_COLOR.BLACK};
    }
  }
`
