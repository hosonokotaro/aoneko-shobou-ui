import { style } from '@vanilla-extract/css'

import { anchor } from '@/atoms/Anchor.css'
import { FONT_COLOR, FontColor } from '@/const/color'
import { Rotate, TRANSITION_TIME } from '@/const/common'
import { IconButtonSize, SPACE } from '@/const/size'

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
      transform: 'rotate(0deg)',
    },
    '&[data-icon-rotate="90deg"]': {
      transform: 'rotate(90deg)',
    },
    '&[data-icon-rotate="180deg"]': {
      transform: 'rotate(180deg)',
    },
    '&[data-icon-rotate="270deg"]': {
      transform: 'rotate(270deg)',
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
