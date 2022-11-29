import styled from 'styled-components'

import Info from '@/atoms/IconSvg/SvgInfo'
import OpenInNew from '@/atoms/IconSvg/SvgOpenInNew'
import { FONT_COLOR, FontColor, INLINE_SIZE, InlineSize } from '@/const/style'

export const ICON_KIND = {
  INFO: 'INFO',
  OPEN_IN_NEW: 'OPEN_IN_NEW',
} as const

type IconKind = typeof ICON_KIND[keyof typeof ICON_KIND]

type Props = {
  iconKind: IconKind
  fillColor: FontColor
  size: InlineSize
}

const Icon = ({ iconKind, fillColor, size }: Props) => {
  return (
    <StyledIcon>
      {iconKind === ICON_KIND.INFO && (
        <StyledInfo
          $fillColor={fillColor}
          width={INLINE_SIZE[size]}
          height={INLINE_SIZE[size]}
        />
      )}
      {iconKind === ICON_KIND.OPEN_IN_NEW && (
        <StyledOpenInNew
          $fillColor={fillColor}
          width={INLINE_SIZE[size]}
          height={INLINE_SIZE[size]}
        />
      )}
    </StyledIcon>
  )
}

export default Icon

const StyledIcon = styled.i`
  display: inline-flex;
  align-items: center;
`

export const StyledInfo = styled(Info)<{
  $fillColor: FontColor
}>`
  ${({ $fillColor }) => `fill: ${FONT_COLOR[$fillColor]};`}
`

export const StyledOpenInNew = styled(OpenInNew)<{
  $fillColor: FontColor
}>`
  ${({ $fillColor }) => `fill: ${FONT_COLOR[$fillColor]};`}
`
