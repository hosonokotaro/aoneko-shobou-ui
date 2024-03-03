import { style } from '@vanilla-extract/css'

import { BORDER_COLOR } from '@/const/color'
import { MEDIA_QUERY } from '@/const/mediaQuery'
import { BLOCK_WIDTH, FONT_WEIGHT, SPACE, TABLE_TWO_COLUMN } from '@/const/size'

export const commonList = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: `${SPACE.M} ${SPACE.NONE}`,

  '@media': {
    [MEDIA_QUERY.MOBILE]: {
      gap: SPACE.NONE,
    },
  },
})

export const description = style({
  display: 'flex',
  alignItems: 'center',
  width: TABLE_TWO_COLUMN.WIDTH_ODD,
  height: '30px',
  paddingLeft: TABLE_TWO_COLUMN.PADDING_LEFT_RIGHT,
  borderLeft: `2px solid ${BORDER_COLOR.LIGHT_GRAY}`,

  '@media': {
    [MEDIA_QUERY.MOBILE]: {
      width: BLOCK_WIDTH.FULL,
    },
  },
})

export const title = style({
  display: 'flex',
  alignItems: 'center',
  width: TABLE_TWO_COLUMN.WIDTH_EVEN,
  height: '30px',
  paddingRight: TABLE_TWO_COLUMN.PADDING_LEFT_RIGHT,
  fontWeight: FONT_WEIGHT.BOLD,

  '@media': {
    [MEDIA_QUERY.MOBILE]: {
      width: BLOCK_WIDTH.FULL,
      paddingRight: SPACE.NONE,
      selectors: {
        [`${description} + &`]: {
          marginTop: SPACE.M,
        },
      },
    },
  },
})
