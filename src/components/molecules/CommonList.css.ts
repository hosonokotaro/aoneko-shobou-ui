import { style } from '@vanilla-extract/css'

import { mediaQueries } from '~/styles/theme/breakpoints'
import { colors } from '~/styles/theme/colors'
import { fontWeight, sizes, space } from '~/styles/theme/spacing'

export const commonList = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: `${space.m} ${space.none}`,

  '@media': {
    [mediaQueries.down.mobile]: {
      gap: space.none,
    },
  },
})

export const description = style({
  display: 'flex',
  alignItems: 'center',
  width: sizes.table.twoColumn.widthOdd,
  minHeight: '30px',
  paddingLeft: sizes.table.twoColumn.paddingLeftRight,
  borderLeft: `2px solid ${colors.border.light}`,
  whiteSpace: 'pre-line',

  '@media': {
    [mediaQueries.down.mobile]: {
      width: sizes.width.full,
    },
  },
})

export const title = style({
  display: 'flex',
  alignItems: 'center',
  width: sizes.table.twoColumn.widthEven,
  minHeight: '30px',
  paddingRight: sizes.table.twoColumn.paddingLeftRight,
  fontWeight: fontWeight.bold,
  whiteSpace: 'pre-line',

  '@media': {
    [mediaQueries.down.mobile]: {
      width: sizes.width.full,
      paddingRight: space.none,
      selectors: {
        [`${description} + &`]: {
          marginTop: space.m,
        },
      },
    },
  },
})
