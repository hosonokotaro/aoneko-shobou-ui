import { globalStyle, style } from '@vanilla-extract/css'

import { mediaQueries } from '~/styles/theme/breakpoints'
import { colors } from '~/styles/theme/colors'
import { sizes, space } from '~/styles/theme/spacing'

export const carouselWrapper = style({
  position: 'relative',
})

export const bottomContent = style({
  position: 'absolute',
  // NOTE: pager の領域を避けるため
  bottom: '22px',
  left: 0,
  zIndex: 2,
  width: '100%',
})

export const carousel = style({})

export const slide = style({
  display: 'grid',
  placeContent: 'center',
})

// NOTE: vanilla-extract では、子要素に対してスタイルを直接当てることができないため、globalStyle を利用する
globalStyle(
  `${carousel} .swiper-pagination-bullets.swiper-pagination-horizontal`,
  {
    bottom: 0,
  }
)

globalStyle(`${carousel} .custom-bullet-style`, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: sizes.button.m.width,
  height: sizes.button.s.height,
  margin: `${space.none} ${space.s}`,

  '@media': {
    [mediaQueries.down.mobile]: {
      display: 'none',
    },
  },
})

globalStyle(`${carousel} .custom-bullet-style .inner`, {
  width: sizes.width.full,
  height: '4px',
  background: colors.bullet.default,
})

globalStyle(`${carousel} .custom-bullet-style-active`, {
  cursor: 'default',
  pointerEvents: 'none',
})

globalStyle(`${carousel} .custom-bullet-style-active .inner`, {
  background: colors.bullet.active,
})
