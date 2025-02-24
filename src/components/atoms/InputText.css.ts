import { style } from '@vanilla-extract/css'

import { colors } from '~/styles/theme/colors'
import { radius, sizes, space } from '~/styles/theme/spacing'

export const inputText = style({
  width: sizes.width.full,
  padding: `${space.m} ${space.s}`,
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
