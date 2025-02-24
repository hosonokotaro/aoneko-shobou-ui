import { style } from '@vanilla-extract/css'

import { colors } from '~/styles/theme/colors'
import { sizes } from '~/styles/theme/spacing'

export const annotationText = style({
  fontSize: sizes.font.m,
  selectors: {
    '&[data-color="caption"]': {
      color: colors.text.caption,
    },
    '&[data-color="caution"]': {
      color: colors.text.caution,
    },
    '&[data-color="default"]': {
      color: colors.link.default,
    },
    '&[data-color="hover"]': {
      color: colors.link.hover,
    },
    '&[data-color="title"]': {
      color: colors.text.title,
    },
    '&[data-color="white"]': {
      color: colors.text.white,
    },
    '&[data-color="primary"]': {
      color: colors.text.primary,
    },
  },
})
