export const TRANSITION_TIME = '0.25s ease'

export const ROTATE = {
  DEFAULT: '0deg',
  DEG90: '90deg',
  DEG180: '180deg',
  DEG270: '270deg',
} as const

export type Rotate = keyof typeof ROTATE

export const MEDIA_QUERY = {
  TABLET: '@media screen and (max-width: 768px)',
} as const

export type MediaQuery = keyof typeof MEDIA_QUERY
