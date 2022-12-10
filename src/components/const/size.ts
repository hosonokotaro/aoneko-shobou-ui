export const BLOCK_WIDTH = {
  AUTO: 'auto',
  FULL: '100%',
  HALF: '50%',
  ONE_THIRD: 'calc(100% / 3)',
} as const

export type BlockWidth = keyof typeof BLOCK_WIDTH

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

// NOTE: この設定方法が正しいのか、しばらく様子を見ること
export const ICON_BUTTON_SIZE = {
  M: {
    WIDTH: '40px',
    HEIGHT: '40px',
  },
  S: {
    WIDTH: '20px',
    HEIGHT: '20px',
  },
} as const

export type IconButtonSize = keyof typeof ICON_BUTTON_SIZE

export const MARGIN = {
  AUTO: 'auto',
  XL: '20px',
  L: '16px',
  M: '12px',
  S: '8px',
  XS: '4px',
  NONE: '0',
} as const

export type Margin = keyof typeof MARGIN

export const BORDER_RADIUS = {
  M: '6px',
  S: '3px',
  NONE: '0',
} as const

export type BorderRadius = keyof typeof BORDER_RADIUS
