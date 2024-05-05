import { keyframes, style } from '@vanilla-extract/css'

import { anchor } from '@/atoms/Anchor.css'
import { BORDER_COLOR, FONT_COLOR, FontColor } from '@/const/color'
import { ROTATE, Rotate, TRANSITION_TIME } from '@/const/common'
import {
  BORDER_RADIUS,
  ICON_BUTTON_SIZE,
  IconButtonSize,
  SPACE,
} from '@/const/size'

export type DataStyleProps = {
  'data-parent-component': 'Button'
  'data-icon-rotate': Rotate
  'data-fill-color': FontColor
  'data-size': IconButtonSize
}

export const icon = style({
  display: 'inline-grid',
  placeContent: 'center',

  selectors: {
    '&[data-parent-component="Button"][data-size="M"]': {
      margin: `${SPACE.NONE} ${SPACE.XS}`,
    },
    '&[data-icon-rotate="0deg"]': {
      transform: `rotate(${ROTATE.DEFAULT})`,
    },
    '&[data-icon-rotate="90deg"]': {
      transform: `rotate(${ROTATE.DEG90})`,
    },
    '&[data-icon-rotate="180deg"]': {
      transform: `rotate(${ROTATE.DEG180})`,
    },
    '&[data-icon-rotate="270deg"]': {
      transform: `rotate(${ROTATE.DEG270})`,
    },
  },
})

const sharedSelectors = {
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
  // NOTE: CSS としての size を受け取る。適用後のサイズ単位は px
  '&[data-size="L"]': {
    width: ICON_BUTTON_SIZE.L.WIDTH,
    height: ICON_BUTTON_SIZE.L.HEIGHT,
  },
  '&[data-size="M"]': {
    width: ICON_BUTTON_SIZE.M.WIDTH,
    height: ICON_BUTTON_SIZE.M.HEIGHT,
  },
  '&[data-size="S"]': {
    width: ICON_BUTTON_SIZE.S.WIDTH,
    height: ICON_BUTTON_SIZE.S.HEIGHT,
  },
} as const

export const info = style({
  selectors: {
    ...sharedSelectors,
  },
})

export const openInNew = style({
  transition: `fill ${TRANSITION_TIME}`,
  selectors: {
    ...sharedSelectors,
    [`${anchor}:hover &`]: {
      fill: FONT_COLOR.LINK_HOVER,
    },
  },
})

export const navigateNext = style({
  selectors: {
    ...sharedSelectors,
  },
})

export const menu = style({
  selectors: {
    ...sharedSelectors,
  },
})

export const menuOpen = style({
  selectors: {
    ...sharedSelectors,
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
    ...sharedSelectors,
  },
})
