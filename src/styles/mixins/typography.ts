import { StyleRule } from '@vanilla-extract/css'

import { theme } from '~/styles/theme'

export const heading1: StyleRule = {
  fontSize: theme.sizes.font.xxl,
  fontWeight: theme.fontWeight.bold,
  lineHeight: 1.2,
  color: theme.colors.text.primary,
}

export const heading2: StyleRule = {
  fontSize: theme.sizes.font.xl,
  fontWeight: theme.fontWeight.bold,
  lineHeight: 1.3,
  color: theme.colors.text.primary,
}

export const heading3: StyleRule = {
  fontSize: theme.sizes.font.l,
  fontWeight: theme.fontWeight.bold,
  lineHeight: 1.4,
  color: theme.colors.text.primary,
}

export const body1: StyleRule = {
  fontSize: theme.sizes.font.m,
  lineHeight: 1.5,
  color: theme.colors.text.primary,
}

export const body2: StyleRule = {
  fontSize: theme.sizes.font.s,
  lineHeight: 1.6,
  color: theme.colors.text.secondary,
}

export const caption: StyleRule = {
  fontSize: theme.sizes.font.s,
  lineHeight: 1.4,
  color: theme.colors.text.caption,
}
