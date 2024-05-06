import { keyframes, style } from '@vanilla-extract/css'

import { anchor } from '@/atoms/Anchor.css'
import { BORDER_COLOR, FONT_COLOR, FontColor } from '@/const/color'
import { ROTATE, Rotate, TRANSITION_TIME } from '@/const/common'
import { BORDER_RADIUS, INLINE_SIZE, InlineSize } from '@/const/size'

// export type DataParentNameProps = {
//   'data-parent-component': 'Button'
// }

export const icon = style({
  display: 'inline-grid',
  placeContent: 'center',
})

export type DataIconProps = {
  'data-rotate': Rotate
  'data-fill-color': FontColor
  'data-size': InlineSize
}

const iconDataSelectors = {
  '&[data-rotate="0deg"]': {
    transform: `rotate(${ROTATE.DEFAULT})`,
  },
  '&[data-rotate="90deg"]': {
    transform: `rotate(${ROTATE.DEG90})`,
  },
  '&[data-rotate="180deg"]': {
    transform: `rotate(${ROTATE.DEG180})`,
  },
  '&[data-rotate="270deg"]': {
    transform: `rotate(${ROTATE.DEG270})`,
  },
  '&[data-fill-color="CAPTION"]': {
    fill: FONT_COLOR.CAPTION,
  },
  '&[data-fill-color="CAUTION"]': {
    fill: FONT_COLOR.CAUTION,
  },
  '&[data-fill-color="LINK"]': {
    fill: FONT_COLOR.LINK,
  },
  '&[data-fill-color="LINK_HOVER"]': {
    fill: FONT_COLOR.LINK_HOVER,
  },
  '&[data-fill-color="TITLE"]': {
    fill: FONT_COLOR.TITLE,
  },
  '&[data-fill-color="WHITE"]': {
    fill: FONT_COLOR.WHITE,
  },
  '&[data-fill-color="BLACK"]': {
    fill: FONT_COLOR.BLACK,
  },
  '&[data-size="XXL"]': {
    width: INLINE_SIZE.XXL,
    height: INLINE_SIZE.XXL,
  },
  '&[data-size="XL"]': {
    width: INLINE_SIZE.XL,
    height: INLINE_SIZE.XL,
  },
  '&[data-size="L"]': {
    width: INLINE_SIZE.L,
    height: INLINE_SIZE.L,
  },
  '&[data-size="M"]': {
    width: INLINE_SIZE.M,
    height: INLINE_SIZE.M,
  },
  '&[data-size="S"]': {
    width: INLINE_SIZE.S,
    height: INLINE_SIZE.S,
  },
} as const

export const info = style({
  selectors: {
    ...iconDataSelectors,
  },
})

export const openInNew = style({
  transition: `fill ${TRANSITION_TIME}`,
  selectors: {
    ...iconDataSelectors,
    [`${anchor}:hover &`]: {
      fill: FONT_COLOR.LINK_HOVER,
    },
  },
})

export const navigateNext = style({
  selectors: {
    ...iconDataSelectors,
  },
})

export const menu = style({
  selectors: {
    ...iconDataSelectors,
  },
})

export const menuOpen = style({
  selectors: {
    ...iconDataSelectors,
  },
})

const spin = keyframes({
  '0%': { transform: `rotate(${ROTATE.DEFAULT})` },
  '100%': { transform: `rotate(${ROTATE.DEG360})` },
})

export const spinner = style({
  border: `4px solid ${BORDER_COLOR.GRAY}`,
  borderRadius: BORDER_RADIUS.HALF,
  borderLeftColor: BORDER_COLOR.LIGHT_GRAY,
  animation: `${spin} 1s linear infinite`,

  selectors: {
    ...iconDataSelectors,
  },
})
