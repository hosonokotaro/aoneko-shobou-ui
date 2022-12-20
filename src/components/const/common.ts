export const TRANSITION_TIME = '0.25s ease'

export const ROTATE = {
  DEFAULT: '0deg',
  DEG90: '90deg',
  DEG180: '180deg',
  DEG270: '270deg',
} as const

export type Rotate = keyof typeof ROTATE

export const ICON_KIND = {
  INFO: 'INFO',
  OPEN_IN_NEW: 'OPEN_IN_NEW',
  NAVIGATE_NEXT: 'NAVIGATE_NEXT',
  MENU: 'MENU',
  MENU_OPEN: 'MENU_OPEN',
} as const

export type IconKind = typeof ICON_KIND[keyof typeof ICON_KIND]
