import { style } from '@vanilla-extract/css'

import { BACKGROUND_COLOR } from '@/const/color'
import { MEDIA_QUERY } from '@/const/mediaQuery'
import { BLOCK_WIDTH, BORDER_RADIUS, BUTTON_SIZE, SPACE } from '@/const/size'

export const globalNavigationWrapper = style({
  overflowY: 'auto',
  transition: `background 0.25s ease`,

  '@media': {
    [MEDIA_QUERY.TABLET]: {
      position: 'fixed',
      top: 0,
      right: 0,
      width: BLOCK_WIDTH.HALF,

      // NOTE: iOS Safari の address bar 対策のため
      height: ['100vh', '100dvh'],

      background: 'none',
      pointerEvents: 'none',

      selectors: {
        [`&[data-open-navigation="1"]`]: {
          background: BACKGROUND_COLOR.WHITE,
          pointerEvents: 'auto',
        },
      },
    },
    [MEDIA_QUERY.MOBILE]: {
      width: BLOCK_WIDTH.FULL,
    },
  },
})

export const globalNavigation = style({
  display: 'none',
  justifyContent: 'space-between',
  overflow: 'hidden',
  borderRadius: BORDER_RADIUS.M,

  selectors: {
    [`${globalNavigationWrapper}[data-open-navigation="1"] > &`]: {
      display: 'flex',
    },
  },

  '@media': {
    [MEDIA_QUERY.TABLET]: {
      flexDirection: 'column',
      alignItems: 'flex-end',
      height: `calc((${BUTTON_SIZE.M.HEIGHT} * 6) + (${SPACE.L} * 5))`,
      marginBottom: SPACE.L,
      borderRadius: BORDER_RADIUS.NONE,
    },
  },
})

// NOTE: ここでしか利用しないのでハードコードで対応する
const MOBILE_NAVIGATION_HEIGHT = '336px'

export const toggleButtonWrapper = style({
  display: 'none',

  '@media': {
    [MEDIA_QUERY.TABLET]: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginTop: MOBILE_NAVIGATION_HEIGHT,

      selectors: {
        [`${globalNavigationWrapper}[data-open-navigation="1"] > &`]: {
          marginTop: 0,
        },
      },
    },
  },
})
