import { globalStyle, style } from '@vanilla-extract/css'

import { anchorHoverStyle, anchorStyle } from '@/atoms/Anchor.css'
import { BORDER_COLOR } from '@/const/color'
import { MEDIA_QUERY } from '@/const/mediaQuery'
import { BLOCK_WIDTH, FONT_WEIGHT, SPACE, TABLE_TWO_COLUMN } from '@/const/size'

export const scheduleList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: SPACE.L,
})

export const scheduleItem = style({
  display: 'flex',
  justifyContent: 'space-between',

  selectors: {
    [`${scheduleList}[data-summary="1"] > &`]: {
      flexDirection: 'column',
      gap: SPACE.S,
    },
  },

  '@media': {
    [MEDIA_QUERY.MOBILE]: {
      flexDirection: 'column',
      gap: SPACE.S,
    },
  },
})

export const period = style({
  width: TABLE_TWO_COLUMN.WIDTH_EVEN,
  padding: `${SPACE.S} ${SPACE.M}`,
  paddingLeft: 0,
  fontWeight: FONT_WEIGHT.BOLD,

  selectors: {
    [`${scheduleList}[data-summary="1"] &`]: {
      width: BLOCK_WIDTH.FULL,
      padding: 0,
    },
  },

  '@media': {
    [MEDIA_QUERY.MOBILE]: {
      width: BLOCK_WIDTH.FULL,
      padding: 0,
    },
  },
})

export const description = style({
  display: 'flex',
  gap: `${SPACE.NONE} ${SPACE.M}`,
  width: TABLE_TWO_COLUMN.WIDTH_ODD,
  padding: `${SPACE.S} ${SPACE.M}`,
  paddingRight: 0,
  borderLeft: `2px solid ${BORDER_COLOR.LIGHT_GRAY}`,

  selectors: {
    [`${scheduleList}[data-summary="1"] &`]: {
      display: '-webkit-box',
      overflow: 'hidden',
      width: BLOCK_WIDTH.FULL,
      paddingTop: 0,
      paddingBottom: 0,
      // NOTE: 子要素が inline でないと WebkitLineClamp が効かない
      WebkitLineClamp: 1,
      WebkitBoxOrient: 'vertical',
    },
  },

  '@media': {
    [MEDIA_QUERY.MOBILE]: {
      display: 'block',
      width: BLOCK_WIDTH.FULL,
    },
  },
})

export const timeframe = style({
  display: 'inline',
  flexShrink: 0,
  fontWeight: FONT_WEIGHT.BOLD,
})

// NOTE: 外部から呼んだ html を使うため
export const text = style({
  display: 'inline',
  wordBreak: 'break-all',
  whiteSpace: 'pre-wrap',

  selectors: {
    [`${scheduleList}[data-summary="1"] &`]: {
      marginLeft: SPACE.M,
    },
  },

  '@media': {
    [MEDIA_QUERY.MOBILE]: {
      marginLeft: SPACE.M,
    },
  },
})

globalStyle(`${text} > a`, {
  ...anchorStyle,
})

globalStyle(`${text} > a:hover`, {
  '@media': {
    '(any-hover: hover)': {
      ...anchorHoverStyle,
    },
  },
})
