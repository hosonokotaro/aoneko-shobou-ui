import styled from 'styled-components'

import Info from '@/atoms/IconSvg/SvgInfo'
import OpenInNew from '@/atoms/IconSvg/SvgOpenInNew'
import { COLOR, Color, FONT_SIZE, FontSize } from '@/const/style'

export const ICON_KIND = {
  INFO: 'INFO',
  OPEN_IN_NEW: 'OPEN_IN_NEW',
} as const

type IconKind = typeof ICON_KIND[keyof typeof ICON_KIND]

type Props = {
  iconKind: IconKind
  fillColor: Color
  size: FontSize
}

const Icon = ({ iconKind, fillColor, size }: Props) => {
  return (
    <StyledIcon>
      {iconKind === ICON_KIND.INFO && (
        <StyledInfo
          $fillColor={fillColor}
          width={FONT_SIZE[size]}
          height={FONT_SIZE[size]}
        />
      )}
      {iconKind === ICON_KIND.OPEN_IN_NEW && (
        <StyledOpenInNew
          $fillColor={fillColor}
          width={FONT_SIZE[size]}
          height={FONT_SIZE[size]}
        />
      )}
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

export const StyledOpenInNew = styled(OpenInNew)<{
  $fillColor: Color
}>`
  vertical-align: middle;
  ${({ $fillColor }) => `fill: ${COLOR[$fillColor]};`}
`
