import React from 'react'
import styled from 'styled-components'

import Info from '@/atoms/IconSvg/SvgInfo'

type IconName = 'Info'

type Props = {
  iconName: IconName
  fillColor: FillColor
}

const Icon: React.FC<Props> = ({ iconName, fillColor }) => {
  return (
    <StyledIcon>
      {iconName === 'Info' && <StyledInfo $fillColor={fillColor} />}
    </StyledIcon>
  )
}

export default Icon

const StyledIcon = styled.i`
  display: inline-block;
  line-height: 1;
`

type FillColor = 'default' | 'link' | 'attention' | 'error'

/* NOTE: Property を追加する例として引数を残します */
export const StyledInfo = styled(Info)<{
  $fillColor: FillColor
}>`
  vertical-align: middle;

  ${({ $fillColor }) => {
    switch ($fillColor) {
      case 'attention':
        return `fill: #a370d3;`
      default:
        return `fill: #000;`
    }
  }}
`
