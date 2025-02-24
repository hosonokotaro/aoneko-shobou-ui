import { style } from '@vanilla-extract/css'

import { mediaQueries } from '~/styles/theme/breakpoints'
import { colors } from '~/styles/theme/colors'
import { radius, sizes, space } from '~/styles/theme/spacing'

export const globalNavigationWrapper = style({
  overflowY: 'auto',
  transition: `background 0.25s ease`,

  '@media': {
    [mediaQueries.down.tablet]: {
      position: 'fixed',
      top: 0,
      right: 0,
      width: sizes.width.half,

      // NOTE: iOS Safari の address bar 対策のため
      height: ['100vh', '100dvh'],

      padding: space.xl,
      background: 'none',
      pointerEvents: 'none',

      selectors: {
        [`&[data-open-navigation="1"]`]: {
          background: colors.background.primary,
          pointerEvents: 'auto',
        },
      },
    },
    [mediaQueries.down.mobile]: {
      width: sizes.width.full,
    },
  },
})

export const globalNavigation = style({
  display: 'none',
  justifyContent: 'space-between',
  overflow: 'hidden',
  borderRadius: radius.m,

  selectors: {
    [`${globalNavigationWrapper}[data-open-navigation="1"] > &`]: {
      display: 'flex',
    },
  },

  '@media': {
    [mediaQueries.down.tablet]: {
      flexDirection: 'column',
      alignItems: 'flex-end',
      height: `calc((${sizes.button.m.height} * 6) + (${space.l} * 5))`,
      marginBottom: space.l,
      borderRadius: radius.none,
    },
  },
})

// NOTE: ここでしか利用しないのでハードコードで対応する
const MOBILE_NAVIGATION_HEIGHT = '336px'

export const toggleButtonWrapper = style({
  display: 'none',

  '@media': {
    [mediaQueries.down.tablet]: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginTop: MOBILE_NAVIGATION_HEIGHT,
      opacity: 0.75,

      selectors: {
        [`${globalNavigationWrapper}[data-open-navigation="1"] > &`]: {
          marginTop: 0,
          opacity: 1,
        },
      },
    },
  },
})
