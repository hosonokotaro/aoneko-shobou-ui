import styled from 'styled-components'

import { SvgInfo } from '@/atoms/IconSvg/SvgInfo'
import { SvgMenu } from '@/atoms/IconSvg/SvgMenuClose'
import { SvgMenuOpen } from '@/atoms/IconSvg/SvgMenuOpen'
import { SvgNavigateNext } from '@/atoms/IconSvg/SvgNavigateNext'
import { SvgOpenInNew } from '@/atoms/IconSvg/SvgOpenInNew'
import { FONT_COLOR, FontColor } from '@/const/color'
import { ICON_KIND, IconKind, ROTATE, Rotate } from '@/const/common'
import { INLINE_SIZE, InlineSize } from '@/const/size'

export type IconProps = {
  /** styled-components が wrap して style を適用するために存在する（利用側で明示的に指定する必要はない） */
  className?: string
  iconKind: IconKind
  /** SVG の fill color */
  fillColor: FontColor
  size: InlineSize
  /** 左回りの角度を指定する */
  iconRotate: Rotate
}

export const Icon = ({
  className,
  iconKind,
  fillColor,
  size,
  iconRotate,
}: IconProps) => {
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

const StyledIcon = styled.i<{ $iconRotate: Rotate }>`
  display: inline-grid;
  place-content: center;
  transform: rotate(${({ $iconRotate }) => `${ROTATE[$iconRotate]}`});
`

const StyledInfo = styled(SvgInfo)<{
  $fillColor: FontColor
}>`
  ${({ $fillColor }) => `fill: ${FONT_COLOR[$fillColor]};`}
`

const StyledOpenInNew = styled(SvgOpenInNew)<{
  $fillColor: FontColor
}>`
  ${({ $fillColor }) => `fill: ${FONT_COLOR[$fillColor]};`}
`

const StyledNavigateNext = styled(SvgNavigateNext)<{
  $fillColor: FontColor
}>`
  ${({ $fillColor }) => `fill: ${FONT_COLOR[$fillColor]};`}
`

const StyledMenu = styled(SvgMenu)<{
  $fillColor: FontColor
}>`
  ${({ $fillColor }) => `fill: ${FONT_COLOR[$fillColor]};`}
`

const StyledMenuOpen = styled(SvgMenuOpen)<{
  $fillColor: FontColor
}>`
  ${({ $fillColor }) => `fill: ${FONT_COLOR[$fillColor]};`}
`
