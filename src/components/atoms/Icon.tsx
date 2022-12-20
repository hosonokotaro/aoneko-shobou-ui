import styled from 'styled-components'

import Info from '@/atoms/IconSvg/SvgInfo'
import Menu from '@/atoms/IconSvg/SvgMenuClose'
import MenuOpen from '@/atoms/IconSvg/SvgMenuOpen'
import NavigateNext from '@/atoms/IconSvg/SvgNavigateNext'
import OpenInNew from '@/atoms/IconSvg/SvgOpenInNew'
import { FONT_COLOR, FontColor } from '@/const/color'
import { ICON_KIND, IconKind, ROTATE, Rotate } from '@/const/common'
import { INLINE_SIZE, InlineSize } from '@/const/size'

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

const StyledInfo = styled(Info)<{
  $fillColor: FontColor
}>`
  ${({ $fillColor }) => `fill: ${FONT_COLOR[$fillColor]};`}
`

const StyledOpenInNew = styled(OpenInNew)<{
  $fillColor: FontColor
}>`
  ${({ $fillColor }) => `fill: ${FONT_COLOR[$fillColor]};`}
`

const StyledNavigateNext = styled(NavigateNext)<{
  $fillColor: FontColor
}>`
  ${({ $fillColor }) => `fill: ${FONT_COLOR[$fillColor]};`}
`

const StyledMenu = styled(Menu)<{
  $fillColor: FontColor
}>`
  ${({ $fillColor }) => `fill: ${FONT_COLOR[$fillColor]};`}
`

const StyledMenuOpen = styled(MenuOpen)<{
  $fillColor: FontColor
}>`
  ${({ $fillColor }) => `fill: ${FONT_COLOR[$fillColor]};`}
`
