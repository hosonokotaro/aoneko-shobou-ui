import { globalStyle, style } from '@vanilla-extract/css'

import { BULLET_COLOR } from '@/const/color'
import { MEDIA_QUERY } from '@/const/mediaQuery'
import { BLOCK_WIDTH, ICON_BUTTON_SIZE, SPACE } from '@/const/size'

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
  width: ICON_BUTTON_SIZE.M.WIDTH,
  height: ICON_BUTTON_SIZE.S.HEIGHT,
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
