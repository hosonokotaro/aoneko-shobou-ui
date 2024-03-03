import { style } from '@vanilla-extract/css'

import { FONT_COLOR } from '@/const/color'
import { INLINE_SIZE } from '@/const/size'

export const annotationText = style({
  fontSize: INLINE_SIZE.M,
  selectors: {
    '&[data-color="CAPTION"]': {
      color: FONT_COLOR.CAPTION,
    },
    '&[data-color="CAUTION"]': {
      color: FONT_COLOR.CAUTION,
    },
    '&[data-color="LINK"]': {
      color: FONT_COLOR.LINK,
    },
    '&[data-color="LINK_HOVER"]': {
      color: FONT_COLOR.LINK_HOVER,
    },
    '&[data-color="TITLE"]': {
      color: FONT_COLOR.TITLE,
    },
    '&[data-color="WHITE"]': {
      color: FONT_COLOR.WHITE,
    },
    '&[data-color="BLACK"]': {
      color: FONT_COLOR.BLACK,
    },
  },
})
