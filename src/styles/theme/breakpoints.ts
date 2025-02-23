export const breakpoints = {
  mobile: '540px',
  tablet: '768px',
  pc: '769px',
  xga: '1025px',
} as const

export const mediaQueries = {
  up: {
    pc: `screen and (min-width: ${breakpoints.pc})`,
    xga: `screen and (min-width: ${breakpoints.xga})`,
  },
  down: {
    mobile: `screen and (max-width: ${breakpoints.mobile})`,
    tablet: `screen and (max-width: ${breakpoints.tablet})`,
  },
} as const

export type Breakpoints = typeof breakpoints
export type MediaQueries = typeof mediaQueries
