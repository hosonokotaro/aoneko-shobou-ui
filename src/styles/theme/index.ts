import { breakpoints, mediaQueries } from '~/styles/theme/breakpoints'
import { baseColors, colors } from '~/styles/theme/colors'
import { fontWeight, radius, sizes, space } from '~/styles/theme/spacing'

export const theme = {
  colors,
  baseColors,
  space,
  sizes,
  radius,
  fontWeight,
  breakpoints,
  mediaQueries,
} as const

export type Theme = typeof theme

export * from '~/styles/theme/breakpoints'
export * from '~/styles/theme/colors'
export * from '~/styles/theme/spacing'
