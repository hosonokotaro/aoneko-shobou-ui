export const TRANSITION_TIME = '0.25s ease'

export const ROTATE = {
  DEFAULT: '0deg',
  DEG90: '90deg',
  DEG180: '180deg',
  DEG270: '270deg',
} as const

export type Rotate = keyof typeof ROTATE

// NOTE: BREAK_POINTS を直接使うのは最後の手段で、取り急ぎ使う場合は利用箇所にコメントを残してリファクタリングを検討すること
export const BREAK_POINTS = {
  TABLET: '768px',
  MOBILE: '540px',
} as const

export type BreakPoints = keyof typeof BREAK_POINTS

export const MEDIA_QUERY = {
  TABLET: `@media screen and (max-width: ${BREAK_POINTS.TABLET})`,
  MOBILE: `@media screen and (max-width: ${BREAK_POINTS.MOBILE})`,
} as const

export type MediaQuery = keyof typeof MEDIA_QUERY
