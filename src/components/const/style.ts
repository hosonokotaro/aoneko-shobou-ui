export const COLOR = {
  ATTENTION: '#a370d3',
  CAUTION: '#ff8897',
  LIGHT_GRAY: '#efefef',
  LINK: '#6fb2f5',
  TITLE: '#a370d3',
  WHITE: '#fff',
} as const

export type Color = keyof typeof COLOR

export const BUTTON_COLOR = {
  DEFAULT: '#6fb2f5',
  DEFAULT_HOVER: '#4084c7',
  EXTERNAL: '#cac74e',
  EXTERNAL_HOVER: '#969448',
} as const

export type ButtonColor = keyof typeof BUTTON_COLOR

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

export const MARGIN = {
  XL: '20px',
  L: '16px',
  M: '12px',
  S: '8px',
  XS: '4px',
} as const

export type Margin = keyof typeof MARGIN
