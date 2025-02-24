import { globalStyle, style } from '@vanilla-extract/css'

import { anchorHoverStyle, anchorStyle } from '@/atoms/Anchor.css'
import { mediaQueries } from '~/styles/theme/breakpoints'
import { colors } from '~/styles/theme/colors'
import { fontWeight, sizes, space } from '~/styles/theme/spacing'

export const scheduleList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: space.l,
})

export const scheduleItem = style({
  display: 'flex',
  justifyContent: 'space-between',

  selectors: {
    [`${scheduleList}[data-summary="1"] > &`]: {
      flexDirection: 'column',
      gap: space.s,
    },
  },

  '@media': {
    [mediaQueries.down.mobile]: {
      flexDirection: 'column',
      gap: space.s,
    },
  },
})

export const period = style({
  width: sizes.table.twoColumn.widthEven,
  padding: `${space.s} ${space.m}`,
  paddingLeft: 0,
  fontWeight: fontWeight.bold,

  selectors: {
    [`${scheduleList}[data-summary="1"] &`]: {
      width: sizes.width.full,
      padding: 0,
    },
  },

  '@media': {
    [mediaQueries.down.mobile]: {
      width: sizes.width.full,
      padding: 0,
    },
  },
})

export const description = style({
  display: 'flex',
  gap: `${space.none} ${space.m}`,
  width: sizes.table.twoColumn.widthOdd,
  padding: `${space.s} ${space.m}`,
  paddingRight: 0,
  borderLeft: `2px solid ${colors.border.light}`,

  selectors: {
    [`${scheduleList}[data-summary="1"] &`]: {
      display: '-webkit-box',
      overflow: 'hidden',
      width: sizes.width.full,
      paddingTop: 0,
      paddingBottom: 0,
      // NOTE: 子要素が inline でないと WebkitLineClamp が効かない
      WebkitLineClamp: 1,
      WebkitBoxOrient: 'vertical',
    },
  },

  '@media': {
    [mediaQueries.down.mobile]: {
      display: 'block',
      width: sizes.width.full,
    },
  },
})

export const timeframe = style({
  display: 'inline',
  flexShrink: 0,
  fontWeight: fontWeight.bold,
})

// NOTE: 外部から呼んだ html を使うため
export const text = style({
  display: 'inline',
  wordBreak: 'break-all',

  selectors: {
    [`${scheduleList}[data-summary="1"] &`]: {
      marginLeft: space.m,
    },
  },

  '@media': {
    [mediaQueries.down.mobile]: {
      marginLeft: space.m,
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
