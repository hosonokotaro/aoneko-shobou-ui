import { style } from '@vanilla-extract/css'

import { BORDER_COLOR, FONT_COLOR } from '@/const/color'
import { BLOCK_WIDTH, BORDER_RADIUS, INLINE_SIZE, SPACE } from '@/const/size'

export const inputText = style({
  width: BLOCK_WIDTH.FULL,
  padding: `${SPACE.M} ${SPACE.S}`,
  fontSize: INLINE_SIZE.L,
  border: `1px solid ${BORDER_COLOR.GRAY}`,
  color: FONT_COLOR.BLACK,
  borderRadius: BORDER_RADIUS.S,
  selectors: {
    '&::placeholder': {
      color: FONT_COLOR.CAPTION,
    },
    '&:focus': {
      outline: `1px solid ${BORDER_COLOR.BLACK}`,
    },
  },
})
