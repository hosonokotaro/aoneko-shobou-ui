import { StyleRule } from '@vanilla-extract/css'

import { theme } from '~/styles/theme'

export const margin = {
  top: (size: keyof typeof theme.space): StyleRule => ({
    marginTop: theme.space[size],
  }),
  bottom: (size: keyof typeof theme.space): StyleRule => ({
    marginBottom: theme.space[size],
  }),
  left: (size: keyof typeof theme.space): StyleRule => ({
    marginLeft: theme.space[size],
  }),
  right: (size: keyof typeof theme.space): StyleRule => ({
    marginRight: theme.space[size],
  }),
}

export const padding = {
  top: (size: keyof typeof theme.space): StyleRule => ({
    paddingTop: theme.space[size],
  }),
  bottom: (size: keyof typeof theme.space): StyleRule => ({
    paddingBottom: theme.space[size],
  }),
  left: (size: keyof typeof theme.space): StyleRule => ({
    paddingLeft: theme.space[size],
  }),
  right: (size: keyof typeof theme.space): StyleRule => ({
    paddingRight: theme.space[size],
  }),
}

export const truncate: StyleRule = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
}

export const hideScrollbar: StyleRule = {
  scrollbarWidth: 'none',
  '::-webkit-scrollbar': {
    display: 'none',
  },
}
