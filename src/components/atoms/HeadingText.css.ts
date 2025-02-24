import { style } from '@vanilla-extract/css'

import { colors } from '~/styles/theme/colors'
import { fontWeight, sizes } from '~/styles/theme/spacing'

export const pageTitle = style({
  fontSize: sizes.font.xxl,
  fontWeight: fontWeight.normal,
  color: colors.text.title,
})

export const sectionTitle = style({
  paddingLeft: '8px',
  borderLeft: `2px solid ${colors.border.title}`,
  fontSize: sizes.font.xl,
  fontWeight: fontWeight.normal,
  color: colors.text.title,
})

export const subTitle = style({
  fontSize: sizes.font.l,
  fontWeight: fontWeight.normal,
  color: colors.text.title,
})
