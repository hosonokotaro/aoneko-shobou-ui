import { createVar, style } from '@vanilla-extract/css'

import { colors } from '~/styles/theme/colors'
import { radius } from '~/styles/theme/spacing'

export const backgroundColor = createVar()

export const chip = style({
  display: 'inline-block',
  padding: '2px 8px',
  borderRadius: radius.s,
  color: colors.text.white,

  selectors: {
    '&[data-background-color="default"]': {
      background: colors.chip.default,
    },
    '&[data-background-color="caution"]': {
      background: colors.chip.caution,
    },
  },
})
