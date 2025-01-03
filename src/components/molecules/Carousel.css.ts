import { globalStyle, style } from '@vanilla-extract/css'

import { BULLET_COLOR } from '@/const/color'
import { MEDIA_QUERY } from '@/const/mediaQuery'
import { BLOCK_WIDTH, BUTTON_SIZE, SPACE } from '@/const/size'

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
  width: BUTTON_SIZE.M.WIDTH,
  height: BUTTON_SIZE.S.HEIGHT,
  margin: `${SPACE.NONE} ${SPACE.S}`,

  '@media': {
    [MEDIA_QUERY.MOBILE]: {
      display: 'none',
    },
  },
})

globalStyle(`${carousel} .custom-bullet-style .inner`, {
  width: BLOCK_WIDTH.FULL,
  height: '4px',
  background: BULLET_COLOR.DEFAULT,
})

globalStyle(`${carousel} .custom-bullet-style-active`, {
  cursor: 'default',
  pointerEvents: 'none',
})

globalStyle(`${carousel} .custom-bullet-style-active .inner`, {
  background: BULLET_COLOR.ACTIVE,
})
