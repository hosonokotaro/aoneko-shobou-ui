// NOTE: BASE_COLOR を直接使うのは最後の手段で、取り急ぎ使う場合は利用箇所で TODO コメントを残してリファクタリングを検討すること
export const BASE_COLOR = {
  ATTENTION: '#a370d3',
  CAUTION: '#ff8897',
  CAPTION: '#999',
  INFORMATION: '#5d7fb3',
  LIGHT_GRAY: '#efefef',
  LINK: '#4a90d6',
  LINK_HOVER: '#3c73a9',
  LINK_EXTERNAL: '#a4a368',
  LINK_EXTERNAL_HOVER: '#827f3c',
  TITLE: '#a370d3',
  WHITE: '#fff',
} as const

export type BaseColor = keyof typeof BASE_COLOR

export const BUTTON_BACKGROUND_COLOR = {
  DEFAULT: BASE_COLOR.LINK,
  DEFAULT_HOVER: BASE_COLOR.LINK_HOVER,
  EXTERNAL: BASE_COLOR.LINK_EXTERNAL,
  EXTERNAL_HOVER: BASE_COLOR.LINK_EXTERNAL_HOVER,
} as const

export type ButtonBackgroundColor = keyof typeof BUTTON_BACKGROUND_COLOR

// NOTE: FONT_COLOR は fill などと設定を共有する場合がある
export const FONT_COLOR = {
  CAPTION: BASE_COLOR.CAPTION,
  CAUTION: BASE_COLOR.CAUTION,
  LINK: BASE_COLOR.LINK,
  LINK_HOVER: BASE_COLOR.LINK_HOVER,
  TITLE: BASE_COLOR.TITLE,
  WHITE: BASE_COLOR.WHITE,
} as const

export type FontColor = keyof typeof FONT_COLOR

export const CHIP_COLOR = {
  DEFAULT: BASE_COLOR.INFORMATION,
  CAUTION: BASE_COLOR.CAUTION,
} as const

export type ChipColor = keyof typeof CHIP_COLOR

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

export const BORDER_RADIUS = {
  M: '6px',
  S: '3px',
} as const

export type BorderRadius = keyof typeof BORDER_RADIUS

export const TRANSITION_TIME = '0.25s ease'
