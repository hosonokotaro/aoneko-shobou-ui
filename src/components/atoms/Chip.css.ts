import { createVar, style } from '@vanilla-extract/css'

import { FONT_COLOR } from '@/const/color'
import { BORDER_RADIUS } from '@/const/size'

export const backgroundColor = createVar()

export const chip = style({
  display: 'inline-block',
  padding: '2px 8px',
  borderRadius: BORDER_RADIUS.S,
  background: backgroundColor,
  color: FONT_COLOR.WHITE,
})
