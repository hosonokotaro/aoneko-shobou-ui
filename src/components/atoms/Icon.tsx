import styled from 'styled-components'

import Info from '@/atoms/IconSvg/SvgInfo'
import { COLOR, Color } from '@/const/style'

export const ICON_KIND = {
  INFO: 'INFO',
} as const

type IconKind = typeof ICON_KIND[keyof typeof ICON_KIND]

type Props = {
  iconKind: IconKind
  fillColor: Color
}

const Icon = ({ iconKind, fillColor }: Props) => {
  return (
    <StyledIcon>
      {iconKind === ICON_KIND.INFO && <StyledInfo $fillColor={fillColor} />}
    </StyledIcon>
  )
}

export default Icon

const StyledIcon = styled.i`
  display: inline-block;
  line-height: 1;
`

/* NOTE: Property を追加する例として引数を残します */
export const StyledInfo = styled(Info)<{
  $fillColor: Color
}>`
  vertical-align: middle;
  ${({ $fillColor }) => `fill: ${COLOR[$fillColor]};`}
`
