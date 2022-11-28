export const COLOR = {
  ATTENTION: '#a370d3',
  CAUTION: '#ff8897',
  LINK: '#6fb2f5',
  TITLE: '#a370d3',
} as const

export type Color = keyof typeof COLOR

export const FONT_SIZE = {
  XL: '1.6rem',
  L: '1.2rem',
  M: '1rem',
  S: '0.9rem',
} as const

export type FontSize = keyof typeof FONT_SIZE

export const FONT_WEIGHT = {
  BOLD: 'bold',
  NORMAL: 'normal',
} as const

export type FontWeight = keyof typeof FONT_WEIGHT
