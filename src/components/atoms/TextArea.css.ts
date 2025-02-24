import { style } from '@vanilla-extract/css'

import { colors } from '~/styles/theme/colors'
import { radius, sizes, space } from '~/styles/theme/spacing'

export const textarea = style({
  width: sizes.width.full,
  height: '16em',
  padding: `${space.m} ${space.s}`,
  lineHeight: sizes.font.xxl,
  fontSize: sizes.font.l,
  border: `1px solid ${colors.border.gray}`,
  color: colors.text.primary,
  borderRadius: radius.s,
  selectors: {
    '&::placeholder': {
      color: colors.text.caption,
    },
    '&:focus': {
      outline: `1px solid ${colors.border.black}`,
    },
  },
})
