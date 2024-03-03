import { style } from '@vanilla-extract/css'

import { BASE_COLOR, BORDER_COLOR } from '@/const/color'
import { BLOCK_WIDTH } from '@/const/size'

export type DataStyleProps = {
  'data-parent-component': 'Carousel'
  'data-photo-style': '0' | '1'
}

// NOTE: ここでしか利用しないのでハードコードで対応する
const MAX_WIDTH = '749px'

export const image = style({
  maxWidth: BLOCK_WIDTH.FULL,
  height: 'auto',

  selectors: {
    '&[data-parent-component="Carousel"]': {
      width: BLOCK_WIDTH.FULL,
      maxWidth: MAX_WIDTH,
      height: '100%',
      objectFit: 'cover',
    },
    '&[data-photo-style="1"]': {
      border: `8px solid ${BORDER_COLOR.LIGHT_GRAY}`,

      // NOTE: ここでしか利用しないのでハードコードで対応する
      background: BASE_COLOR.LIGHT_GRAY,
    },
  },
})
