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

export const INLINE_MARGIN = {
  XL: '20px',
  L: '16px',
  M: '12px',
  S: '8px',
  XS: '4px',
} as const

export type InlineMargin = keyof typeof INLINE_MARGIN

export const BORDER_RADIUS = {
  M: '6px',
  S: '3px',
  NONE: '0',
} as const

export type BorderRadius = keyof typeof BORDER_RADIUS
