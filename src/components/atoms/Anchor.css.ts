import { style } from '@vanilla-extract/css'
import { CSSProperties } from 'react'

import { TRANSITION_TIME } from '@/const/common'
import { mediaQueries } from '~/styles/theme/breakpoints'
import { colors } from '~/styles/theme/colors'
import { radius, sizes, space } from '~/styles/theme/spacing'

export type DataStyleProps = {
  'data-parent-component': 'AnchorText' | 'Button' | 'GlobalNavigation'
  'data-background-color': 'DEFAULT' | 'EXTERNAL' | 'DEFAULT_CURRENT'
  'data-size': keyof typeof sizes.font
}

// FIXME: as const satisfies を使いたいが、TypeScript の version が古いため使えない

// NOTE: anchorText component で anchor を wrap して style を適用するため
const anchorTextLikeStyle: CSSProperties = {
  display: 'inline-flex',
  gap: space.xs,
}

// NOTE: button component で anchor を wrap して style を適用するため
export const buttonLikeStyle: CSSProperties = {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: space.none,
  fontSize: sizes.font.m,
  color: colors.text.white,
  transition: `background ${TRANSITION_TIME}`,
  borderRadius: radius.s,
}

export const anchorSelectorStyle = {
  '&[data-background-color="DEFAULT"]': {
    background: colors.button.default,
  },
  '&[data-background-color="EXTERNAL"]': {
    background: colors.button.external,
  },
  '&[data-background-color="DEFAULT_CURRENT"]': {
    background: colors.button.current,
    cursor: 'pointer',
    pointerEvents: 'none',
  },
  '&[data-size="S"]': {
    minWidth: sizes.button.s.width,
    minHeight: sizes.button.s.height,
  },
  '&[data-size="M"]': {
    minWidth: sizes.button.m.width,
    minHeight: sizes.button.m.height,
  },
  '&[data-size="L"]': {
    minWidth: sizes.button.l.width,
    minHeight: sizes.button.l.height,
  },
} as const

export const anchorSelectorHoverStyle = {
  '&[data-background-color="DEFAULT"]:hover': {
    background: colors.button.hover,
  },
  '&[data-background-color="EXTERNAL"]:hover': {
    background: colors.button.externalHover,
  },
} as const

export const anchorStyle = {
  color: colors.link.default,
  transition: `color ${TRANSITION_TIME}`,
} as const

export const anchorHoverStyle = {
  color: colors.link.hover,
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
      width: sizes.width.full,
      borderRadius: radius.none,
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
          color: colors.text.white,
        },
        '&[data-parent-component="GlobalNavigation"]:hover': {
          color: colors.text.white,
        },
        ...anchorSelectorHoverStyle,
      },
    },
    [mediaQueries.down.tablet]: {
      selectors: {
        '&[data-parent-component="GlobalNavigation"]': {
          borderRadius: radius.s,
        },
      },
    },
  },
})
