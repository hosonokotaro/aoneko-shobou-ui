import { StyleRule } from '@vanilla-extract/css'

import { theme } from '~/styles/theme'

export const flexCenter: StyleRule = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

export const flexColumn: StyleRule = {
  display: 'flex',
  flexDirection: 'column',
}

export const gridCenter: StyleRule = {
  display: 'grid',
  placeItems: 'center',
}

export const container: StyleRule = {
  width: '100%',
  maxWidth: '1200px',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: theme.space.l,
  paddingRight: theme.space.l,
}

export const visuallyHidden: StyleRule = {
  position: 'absolute',
  width: '1px',
  height: '1px',
  padding: 0,
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap',
  border: 0,
}
