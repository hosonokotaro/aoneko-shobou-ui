import { style } from '@vanilla-extract/css'

import { BORDER_COLOR } from '@/const/color'

export const paragraphText = style({
  padding: '12px',
  borderLeft: `2px solid ${BORDER_COLOR.LIGHT_GRAY}`,
})
