export const space = {
  auto: 'auto',
  none: '0',
  xs: '4px',
  s: '8px',
  m: '12px',
  l: '16px',
  xl: '20px',
} as const

export const sizes = {
  width: {
    auto: 'auto',
    full: '100%',
    half: '50%',
    oneThird: 'calc(100% / 3)',
  },
  font: {
    xxl: '2rem',
    xl: '1.6rem',
    l: '1.2rem',
    m: '1rem',
    s: '0.9rem',
  },
  button: {
    l: {
      width: '60px',
      height: '60px',
    },
    m: {
      width: '40px',
      height: '40px',
    },
    s: {
      width: '20px',
      height: '20px',
    },
  },
  table: {
    twoColumn: {
      widthOdd: '61.8%',
      widthEven: '38.2%',
      paddingTopBottom: '4px',
      paddingLeftRight: '12px',
    },
  },
} as const

export const radius = {
  none: '0',
  s: '3px',
  m: '6px',
  half: '50%',
} as const

export const fontWeight = {
  normal: '300',
  bold: '600',
} as const

export type Space = typeof space
export type Sizes = typeof sizes
export type Radius = typeof radius
export type FontWeight = typeof fontWeight
