import { style } from '@vanilla-extract/css'

import {
  anchorSelectorHoverStyle,
  anchorSelectorStyle,
  buttonLikeStyle,
} from '@/atoms/Anchor.css'
import { mediaQueries } from '~/styles/theme/breakpoints'
import { colors } from '~/styles/theme/colors'
import { sizes, space } from '~/styles/theme/spacing'

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
      borderLeft: `1px solid ${colors.text.white}`,
    },
  },

  '@media': {
    [mediaQueries.down.tablet]: {
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
  margin: `${space.none} ${space.xs}`,
})

export const iconWrapperNoText = style({
  display: 'inline-flex',
})

export const text = style({
  textAlign: 'left',
  userSelect: 'none',

  selectors: {
    '&[data-button-size="S"]': {
      marginLeft: space.s,
      marginRight: space.s,
      fontSize: sizes.font.s,
    },
    '&[data-button-size="M"]': {
      marginLeft: space.m,
      marginRight: space.m,
      fontSize: sizes.font.m,
    },
    '&[data-button-size="L"]': {
      marginLeft: space.l,
      marginRight: space.l,
      fontSize: sizes.font.l,
    },
    [`${iconWrapper} + &`]: {
      marginLeft: space.none,
    },
  },
})
