import { style } from '@vanilla-extract/css'

import { colors } from '~/styles/theme/colors'
import { space } from '~/styles/theme/spacing'

export const paragraphText = style({
  padding: space.m,
  borderLeft: `2px solid ${colors.border.light}`,
})
