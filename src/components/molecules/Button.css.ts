import { style } from '@vanilla-extract/css'

import {
  anchorSelectorHoverStyle,
  anchorSelectorStyle,
  buttonLikeStyle,
} from '@/atoms/Anchor.css'
import { BORDER_COLOR } from '@/const/color'
import { MEDIA_QUERY } from '@/const/mediaQuery'
import { INLINE_SIZE, SPACE } from '@/const/size'

export type DataStyleProps = {
  'data-parent-component': 'GlobalNavigation'
}

export const buttonWrapper = style({
  display: 'inline-flex',
  pointerEvents: 'auto',
  selectors: {
    [`&[data-parent-component="GlobalNavigation"]`]: {
      justifyContent: 'center',
      flexGrow: 1,
    },
    [`&[data-parent-component="GlobalNavigation"] + &`]: {
      borderLeft: `1px solid ${BORDER_COLOR.WHITE}`,
    },
  },

  '@media': {
    [MEDIA_QUERY.TABLET]: {
      selectors: {
        [`&[data-parent-component="GlobalNavigation"]`]: {
          flexGrow: 0,
        },
      },
    },
  },
})

export const button = style({
  ...buttonLikeStyle,
  selectors: {
    ...anchorSelectorStyle,
  },
  '@media': {
    '(any-hover: hover)': {
      selectors: {
        ...anchorSelectorHoverStyle,
      },
    },
  },
})

export const iconWrapper = style({
  display: 'inline-flex',
  margin: `${SPACE.NONE} ${SPACE.XS}`,
})

export const iconWrapperNoText = style({
  display: 'inline-flex',
})

export const text = style({
  textAlign: 'left',
  userSelect: 'none',

  selectors: {
    '&[data-button-size="S"]': {
      marginLeft: SPACE.S,
      marginRight: SPACE.S,
      fontSize: INLINE_SIZE.S,
    },
    '&[data-button-size="M"]': {
      marginLeft: SPACE.M,
      marginRight: SPACE.M,
      fontSize: INLINE_SIZE.M,
    },
    '&[data-button-size="L"]': {
      marginLeft: SPACE.L,
      marginRight: SPACE.L,
      fontSize: INLINE_SIZE.L,
    },
    [`${iconWrapper} + &`]: {
      marginLeft: SPACE.NONE,
    },
  },
})
