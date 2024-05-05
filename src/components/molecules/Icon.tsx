import { SvgInfo } from '@/atoms/IconSvg/SvgInfo'
import { SvgMenu } from '@/atoms/IconSvg/SvgMenuClose'
import { SvgMenuOpen } from '@/atoms/IconSvg/SvgMenuOpen'
import { SvgNavigateNext } from '@/atoms/IconSvg/SvgNavigateNext'
import { SvgOpenInNew } from '@/atoms/IconSvg/SvgOpenInNew'
import { ICON_KIND, IconKind } from '@/const/common'
import { INLINE_SIZE, InlineSize } from '@/const/size'
import * as Styles from '@/molecules/Icon.css'

export type IconProps = {
  dataStyleProps?: Partial<Styles.DataStyleProps>
  iconKind: IconKind
  /** NOTE: SVG としての size を受け取る。適用後のサイズ単位は rem */
  size?: InlineSize
}

// FIXME: SVG と CSS の size が混在しているので統一したい
export const Icon = ({ dataStyleProps, iconKind, size = 'XXL' }: IconProps) => {
  return (
    <i className={Styles.icon} {...dataStyleProps}>
      {iconKind === ICON_KIND.INFO && (
        <SvgInfo
          className={Styles.info}
          width={INLINE_SIZE[size]}
          height={INLINE_SIZE[size]}
          {...dataStyleProps}
        />
      )}
      {iconKind === ICON_KIND.OPEN_IN_NEW && (
        <SvgOpenInNew
          className={Styles.openInNew}
          width={INLINE_SIZE[size]}
          height={INLINE_SIZE[size]}
          {...dataStyleProps}
        />
      )}
      {iconKind === ICON_KIND.NAVIGATE_NEXT && (
        <SvgNavigateNext
          className={Styles.navigateNext}
          width={INLINE_SIZE[size]}
          height={INLINE_SIZE[size]}
          {...dataStyleProps}
        />
      )}
      {iconKind === ICON_KIND.MENU && (
        <SvgMenu
          className={Styles.menu}
          width={INLINE_SIZE[size]}
          height={INLINE_SIZE[size]}
          {...dataStyleProps}
        />
      )}
      {iconKind === ICON_KIND.MENU_OPEN && (
        <SvgMenuOpen
          className={Styles.menuOpen}
          width={INLINE_SIZE[size]}
          height={INLINE_SIZE[size]}
          {...dataStyleProps}
        />
      )}
      {iconKind === ICON_KIND.SPINNER && (
        <div className={Styles.spinner} {...dataStyleProps} />
      )}
    </i>
  )
}
