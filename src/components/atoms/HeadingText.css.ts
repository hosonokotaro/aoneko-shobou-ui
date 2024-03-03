import { style } from '@vanilla-extract/css'

import { BORDER_COLOR, FONT_COLOR } from '@/const/color'
import { FONT_WEIGHT, INLINE_SIZE } from '@/const/size'

export const pageTitle = style({
  fontSize: INLINE_SIZE.XXL,
  fontWeight: FONT_WEIGHT.NORMAL,
  color: FONT_COLOR.TITLE,
})

export const sectionTitle = style({
  paddingLeft: '8px',
  borderLeft: `2px solid ${BORDER_COLOR.TITLE}`,
  fontSize: INLINE_SIZE.XL,
  fontWeight: FONT_WEIGHT.NORMAL,
  color: FONT_COLOR.TITLE,
})

export const subTitle = style({
  fontSize: INLINE_SIZE.L,
  fontWeight: FONT_WEIGHT.NORMAL,
  color: FONT_COLOR.TITLE,
})
