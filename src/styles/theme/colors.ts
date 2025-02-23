export const baseColors = {
  purple: {
    primary: '#a370d3',
  },
  blue: {
    primary: '#5d7fb3',
    link: '#4a90d6',
    linkHover: '#417cb5',
    linkCurrent: '#34628f',
  },
  yellow: {
    link: '#a4a368',
    linkHover: '#827f3c',
  },
  red: {
    primary: '#ff8897',
  },
  gray: {
    caption: '#999',
    light: '#eee',
  },
  mono: {
    black: '#111',
    white: '#fcfcfc',
  },
} as const

export const colors = {
  background: {
    primary: baseColors.mono.white,
    secondary: baseColors.gray.light,
  },
  text: {
    primary: baseColors.mono.black,
    secondary: baseColors.gray.caption,
    title: baseColors.purple.primary,
    caption: baseColors.gray.caption,
    caution: baseColors.red.primary,
    white: baseColors.mono.white,
  },
  link: {
    default: baseColors.blue.link,
    hover: baseColors.blue.linkHover,
    current: baseColors.blue.linkCurrent,
    external: baseColors.yellow.link,
    externalHover: baseColors.yellow.linkHover,
  },
  button: {
    default: baseColors.blue.link,
    hover: baseColors.blue.linkHover,
    current: baseColors.blue.linkCurrent,
    external: baseColors.yellow.link,
    externalHover: baseColors.yellow.linkHover,
  },
  chip: {
    default: baseColors.blue.primary,
    caution: baseColors.red.primary,
  },
  border: {
    light: baseColors.gray.light,
    gray: baseColors.gray.caption,
    black: baseColors.mono.black,
    title: baseColors.purple.primary,
    white: baseColors.mono.white,
  },
  bullet: {
    default: baseColors.mono.white,
    active: baseColors.red.primary,
  },
  status: {
    information: baseColors.blue.primary,
    attention: baseColors.purple.primary,
    caution: baseColors.red.primary,
  },
} as const

export type BaseColors = typeof baseColors
export type Colors = typeof colors
