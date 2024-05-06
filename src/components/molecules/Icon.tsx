import { SvgInfo } from '@/atoms/IconSvg/SvgInfo'
import { SvgMenu } from '@/atoms/IconSvg/SvgMenuClose'
import { SvgMenuOpen } from '@/atoms/IconSvg/SvgMenuOpen'
import { SvgNavigateNext } from '@/atoms/IconSvg/SvgNavigateNext'
import { SvgOpenInNew } from '@/atoms/IconSvg/SvgOpenInNew'
import { ICON_KIND, IconKind } from '@/const/common'
import * as Styles from '@/molecules/Icon.css'

export type IconProps = {
  dataIconProps: Partial<Styles.DataIconProps>
  iconKind: IconKind
}

export const Icon = ({ dataIconProps, iconKind }: IconProps) => {
  return (
    <i className={Styles.icon}>
      {iconKind === ICON_KIND.INFO && (
        <SvgInfo className={Styles.info} {...dataIconProps} />
      )}
      {iconKind === ICON_KIND.OPEN_IN_NEW && (
        <SvgOpenInNew className={Styles.openInNew} {...dataIconProps} />
      )}
      {iconKind === ICON_KIND.NAVIGATE_NEXT && (
        <SvgNavigateNext className={Styles.navigateNext} {...dataIconProps} />
      )}
      {iconKind === ICON_KIND.MENU && (
        <SvgMenu className={Styles.menu} {...dataIconProps} />
      )}
      {iconKind === ICON_KIND.MENU_OPEN && (
        <SvgMenuOpen className={Styles.menuOpen} {...dataIconProps} />
      )}
      {iconKind === ICON_KIND.SPINNER && (
        <div className={Styles.spinner} {...dataIconProps} />
      )}
    </i>
  )
}
