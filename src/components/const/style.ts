export const COLOR = {
  ATTENTION: '#a370d3',
  CAUTION: '#ff8897',
  LIGHT_GRAY: '#efefef',
  LINK: '#6fb2f5',
  LINK_HOVER: '#4084c7',
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

export const INLINE_SIZE = {
  XXL: '2rem',
  XL: '1.6rem',
  L: '1.2rem',
  M: '1rem',
  S: '0.9rem',
} as const

export type InlineSize = keyof typeof INLINE_SIZE

export const FONT_WEIGHT = {
  BOLD: '600',
  NORMAL: '300',
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

export const TRANSITION_TIME = '0.25s ease'
