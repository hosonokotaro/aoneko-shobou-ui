import { style } from '@vanilla-extract/css'
import { CSSProperties } from 'react'

import {
  BUTTON_BACKGROUND_COLOR,
  ButtonBackgroundColor,
  FONT_COLOR,
} from '@/const/color'
import { TRANSITION_TIME } from '@/const/common'
import { MEDIA_QUERY } from '@/const/mediaQuery'
import {
  BLOCK_WIDTH,
  BORDER_RADIUS,
  BUTTON_SIZE,
  INLINE_SIZE,
  InlineSize,
  SPACE,
} from '@/const/size'

export type DataStyleProps = {
  'data-parent-component': 'AnchorText' | 'Button' | 'GlobalNavigation'
  'data-background-color': ButtonBackgroundColor
  'data-size': InlineSize
}

// FIXME: as const satisfies を使いたいが、TypeScript の version が古いため使えない

// NOTE: anchorText component で anchor を wrap して style を適用するため
const anchorTextLikeStyle: CSSProperties = {
  display: 'inline-flex',
  gap: SPACE.XS,
}

// NOTE: button component で anchor を wrap して style を適用するため
export const buttonLikeStyle: CSSProperties = {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: SPACE.NONE,
  fontSize: INLINE_SIZE.M,
  color: FONT_COLOR.WHITE,
  transition: `background ${TRANSITION_TIME}`,
  borderRadius: BORDER_RADIUS.S,
}

export const anchorSelectorStyle = {
  '&[data-background-color="DEFAULT"]': {
    background: BUTTON_BACKGROUND_COLOR.DEFAULT,
  },
  '&[data-background-color="EXTERNAL"]': {
    background: BUTTON_BACKGROUND_COLOR.EXTERNAL,
  },
  '&[data-background-color="DEFAULT_CURRENT"]': {
    background: BUTTON_BACKGROUND_COLOR.DEFAULT_CURRENT,
    cursor: 'pointer',
    pointerEvents: 'none',
  },
  '&[data-size="S"]': {
    minWidth: BUTTON_SIZE.S.WIDTH,
    minHeight: BUTTON_SIZE.S.HEIGHT,
  },
  '&[data-size="M"]': {
    minWidth: BUTTON_SIZE.M.WIDTH,
    minHeight: BUTTON_SIZE.M.HEIGHT,
  },
  '&[data-size="L"]': {
    minWidth: BUTTON_SIZE.L.WIDTH,
    minHeight: BUTTON_SIZE.L.HEIGHT,
  },
} as const

export const anchorSelectorHoverStyle = {
  '&[data-background-color="DEFAULT"]:hover': {
    background: BUTTON_BACKGROUND_COLOR.DEFAULT_HOVER,
  },
  '&[data-background-color="EXTERNAL"]:hover': {
    background: BUTTON_BACKGROUND_COLOR.EXTERNAL_HOVER,
  },
} as const

export const anchorStyle = {
  color: FONT_COLOR.LINK,
  transition: `color ${TRANSITION_TIME}`,
} as const

export const anchorHoverStyle = {
  color: FONT_COLOR.LINK_HOVER,
} as const

export const anchor = style({
  ...anchorStyle,
  selectors: {
    '&[data-parent-component="AnchorText"]': {
      ...anchorTextLikeStyle,
    },
    '&[data-parent-component="Button"]': {
      ...buttonLikeStyle,
    },
    '&[data-parent-component="GlobalNavigation"]': {
      ...buttonLikeStyle,
      width: BLOCK_WIDTH.FULL,
      borderRadius: BORDER_RADIUS.NONE,
    },
    ...anchorSelectorStyle,
  },
  '@media': {
    '(any-hover: hover)': {
      selectors: {
        '&:hover': {
          ...anchorHoverStyle,
        },
        '&[data-parent-component="Button"]:hover': {
          color: FONT_COLOR.WHITE,
        },
        '&[data-parent-component="GlobalNavigation"]:hover': {
          color: FONT_COLOR.WHITE,
        },
        ...anchorSelectorHoverStyle,
      },
    },
    [MEDIA_QUERY.TABLET]: {
      selectors: {
        '&[data-parent-component="GlobalNavigation"]': {
          borderRadius: BORDER_RADIUS.S,
        },
      },
    },
  },
})
