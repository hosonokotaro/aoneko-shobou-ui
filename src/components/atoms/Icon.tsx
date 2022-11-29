import styled from 'styled-components'

import Info from '@/atoms/IconSvg/SvgInfo'
import NavigateNext from '@/atoms/IconSvg/SvgNavigateNext'
import OpenInNew from '@/atoms/IconSvg/SvgOpenInNew'
import { FONT_COLOR, FontColor, INLINE_SIZE, InlineSize } from '@/const/style'

export const ICON_KIND = {
  INFO: 'INFO',
  OPEN_IN_NEW: 'OPEN_IN_NEW',
  NAVIGATE_NEXT: 'NAVIGATE_NEXT',
} as const

type IconKind = typeof ICON_KIND[keyof typeof ICON_KIND]

type Props = {
  className?: string
  iconKind: IconKind
  fillColor: FontColor
  size: InlineSize
}

const Icon = ({ className, iconKind, fillColor, size }: Props) => {
  return (
    <StyledIcon className={className}>
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
      {iconKind === ICON_KIND.NAVIGATE_NEXT && (
        <StyledNavigateNext
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

export const StyledNavigateNext = styled(NavigateNext)<{
  $fillColor: FontColor
}>`
  ${({ $fillColor }) => `fill: ${FONT_COLOR[$fillColor]};`}
`
