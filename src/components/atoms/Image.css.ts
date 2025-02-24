import { style } from '@vanilla-extract/css'

import { colors } from '~/styles/theme/colors'
import { sizes } from '~/styles/theme/spacing'

export type DataStyleProps = {
  'data-parent-component': 'Carousel'
  'data-photo-style': '0' | '1'
}

// NOTE: ここでしか利用しないのでハードコードで対応する
const MAX_WIDTH = '749px'

export const image = style({
  maxWidth: sizes.width.full,
  height: 'auto',

  selectors: {
    '&[data-parent-component="Carousel"]': {
      width: sizes.width.full,
      maxWidth: MAX_WIDTH,
      height: '100%',
      objectFit: 'cover',
    },
    '&[data-photo-style="1"]': {
      border: `8px solid ${colors.border.light}`,

      // NOTE: ここでしか利用しないのでハードコードで対応する
      background: colors.background.secondary,
    },
  },
})
