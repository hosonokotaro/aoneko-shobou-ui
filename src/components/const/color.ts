// NOTE: BASE_COLOR を直接使うのは最後の手段で、取り急ぎ使う場合は利用箇所にコメントを残してリファクタリングを検討すること
export const BASE_COLOR = {
  ATTENTION: '#a370d3',
  CAUTION: '#ff8897',
  CAPTION: '#999',
  INFORMATION: '#5d7fb3',
  LIGHT_GRAY: '#efefef',
  LINK: '#4a90d6',
  LINK_HOVER: '#417cb5',
  LINK_CURRENT: '#34628f',
  LINK_EXTERNAL: '#a4a368',
  LINK_EXTERNAL_HOVER: '#827f3c',
  TITLE: '#a370d3',
  WHITE: '#fff',
} as const

export type BaseColor = keyof typeof BASE_COLOR

export const BACKGROUND_COLOR = {
  WHITE: BASE_COLOR.WHITE,
}

export type BackgroundColor = keyof typeof BACKGROUND_COLOR

export const BUTTON_BACKGROUND_COLOR = {
  DEFAULT: BASE_COLOR.LINK,
  DEFAULT_HOVER: BASE_COLOR.LINK_HOVER,
  DEFAULT_CURRENT: BASE_COLOR.LINK_CURRENT,
  EXTERNAL: BASE_COLOR.LINK_EXTERNAL,
  EXTERNAL_HOVER: BASE_COLOR.LINK_EXTERNAL_HOVER,
} as const

export type ButtonBackgroundColor = keyof typeof BUTTON_BACKGROUND_COLOR

// NOTE: FONT_COLOR は fill と設定を共有する
export const FONT_COLOR = {
  CAPTION: BASE_COLOR.CAPTION,
  CAUTION: BASE_COLOR.CAUTION,
  LINK: BASE_COLOR.LINK,
  LINK_HOVER: BASE_COLOR.LINK_HOVER,
  TITLE: BASE_COLOR.TITLE,
  WHITE: BASE_COLOR.WHITE,
} as const

export type FontColor = keyof typeof FONT_COLOR

export const CHIP_BACKGROUND_COLOR = {
  DEFAULT: BASE_COLOR.INFORMATION,
  CAUTION: BASE_COLOR.CAUTION,
} as const

export type ChipBackgroundColor = keyof typeof CHIP_BACKGROUND_COLOR

export const BORDER_COLOR = {
  LIGHT_GRAY: BASE_COLOR.LIGHT_GRAY,
  TITLE: BASE_COLOR.TITLE,
  WHITE: BASE_COLOR.WHITE,
} as const

export type BorderColor = keyof typeof BORDER_COLOR
