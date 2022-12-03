import styled from 'styled-components'

import Info from '@/atoms/IconSvg/SvgInfo'
import Menu from '@/atoms/IconSvg/SvgMenu'
import MenuOpen from '@/atoms/IconSvg/SvgMenuOpen'
import NavigateNext from '@/atoms/IconSvg/SvgNavigateNext'
import OpenInNew from '@/atoms/IconSvg/SvgOpenInNew'
import {
  FONT_COLOR,
  FontColor,
  INLINE_SIZE,
  InlineSize,
  ROTATE,
  Rotate,
} from '@/const/style'

export const ICON_KIND = {
  INFO: 'INFO',
  OPEN_IN_NEW: 'OPEN_IN_NEW',
  NAVIGATE_NEXT: 'NAVIGATE_NEXT',
  MENU: 'MENU',
  MENU_OPEN: 'MENU_OPEN',
} as const

export type IconKind = typeof ICON_KIND[keyof typeof ICON_KIND]

type Props = {
  className?: string
  iconKind: IconKind
  fillColor: FontColor
  size: InlineSize
  iconRotate: Rotate
}

const Icon = ({ className, iconKind, fillColor, size, iconRotate }: Props) => {
  return (
    <StyledIcon className={className} $iconRotate={iconRotate}>
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
      {iconKind === ICON_KIND.MENU && (
        <StyledMenu
          $fillColor={fillColor}
          width={INLINE_SIZE[size]}
          height={INLINE_SIZE[size]}
        />
      )}
      {iconKind === ICON_KIND.MENU_OPEN && (
        <StyledMenuOpen
          $fillColor={fillColor}
          width={INLINE_SIZE[size]}
          height={INLINE_SIZE[size]}
        />
      )}
    </StyledIcon>
  )
}

export default Icon

const StyledIcon = styled.i<{ $iconRotate: Rotate }>`
  display: inline-grid;
  place-content: center;
  transform: rotate(${({ $iconRotate }) => `${ROTATE[$iconRotate]}`});
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

export const StyledMenu = styled(Menu)<{
  $fillColor: FontColor
}>`
  ${({ $fillColor }) => `fill: ${FONT_COLOR[$fillColor]};`}
`

export const StyledMenuOpen = styled(MenuOpen)<{
  $fillColor: FontColor
}>`
  ${({ $fillColor }) => `fill: ${FONT_COLOR[$fillColor]};`}
`
