import { createVar, style } from '@vanilla-extract/css'

import { CHIP_BACKGROUND_COLOR, FONT_COLOR } from '@/const/color'
import { BORDER_RADIUS } from '@/const/size'

export const backgroundColor = createVar()

export const chip = style({
  display: 'inline-block',
  padding: '2px 8px',
  borderRadius: BORDER_RADIUS.S,
  color: FONT_COLOR.WHITE,

  selectors: {
    '&[data-background-color="DEFAULT"]': {
      background: CHIP_BACKGROUND_COLOR.DEFAULT,
    },
    '&[data-background-color="CAUTION"]': {
      background: CHIP_BACKGROUND_COLOR.CAUTION,
    },
  },
})
