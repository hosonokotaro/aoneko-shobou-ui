import { keyframes, style } from '@vanilla-extract/css'

import { anchor } from '@/atoms/Anchor.css'
import { ROTATE, Rotate, TRANSITION_TIME } from '@/const/common'
import { colors } from '~/styles/theme/colors'
import { radius, sizes } from '~/styles/theme/spacing'

export const icon = style({
  display: 'inline-grid',
  placeContent: 'center',
})

type ColorKeys =
  | 'caption'
  | 'caution'
  | 'title'
  | 'white'
  | 'primary'
  | 'LINK'
  | 'LINK_HOVER'

export type DataIconProps = {
  'data-rotate': Rotate
  'data-fill-color': ColorKeys
  'data-size': keyof typeof sizes.font
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
  '&[data-fill-color="caption"]': {
    fill: colors.text.caption,
  },
  '&[data-fill-color="caution"]': {
    fill: colors.text.caution,
  },
  '&[data-fill-color="LINK"]': {
    fill: colors.link.default,
  },
  '&[data-fill-color="LINK_HOVER"]': {
    fill: colors.link.hover,
  },
  '&[data-fill-color="title"]': {
    fill: colors.text.title,
  },
  '&[data-fill-color="white"]': {
    fill: colors.text.white,
  },
  '&[data-fill-color="primary"]': {
    fill: colors.text.primary,
  },
  '&[data-size="xxl"]': {
    width: sizes.font.xxl,
    height: sizes.font.xxl,
  },
  '&[data-size="xl"]': {
    width: sizes.font.xl,
    height: sizes.font.xl,
  },
  '&[data-size="l"]': {
    width: sizes.font.l,
    height: sizes.font.l,
  },
  '&[data-size="m"]': {
    width: sizes.font.m,
    height: sizes.font.m,
  },
  '&[data-size="s"]': {
    width: sizes.font.s,
    height: sizes.font.s,
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
      fill: colors.link.hover,
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
  border: `4px solid ${colors.border.gray}`,
  borderRadius: radius.half,
  borderLeftColor: colors.border.light,
  animation: `${spin} 1s linear infinite`,

  selectors: {
    ...iconDataSelectors,
  },
})
