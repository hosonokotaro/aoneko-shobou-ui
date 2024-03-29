// NOTE: BREAK_POINTS を直接使うのは最後の手段で、取り急ぎ使う場合は利用箇所にコメントを残してリファクタリングを検討すること
export const BREAK_POINTS = {
  XGA: '1025px',
  PC: '769px',
  TABLET: '768px',
  MOBILE: '540px',
} as const

export type BreakPoints = keyof typeof BREAK_POINTS

export const MATCH_MEDIA = {
  XGA: `(min-width: ${BREAK_POINTS.XGA})`,
  PC: `(min-width: ${BREAK_POINTS.PC})`,
  TABLET: `(max-width: ${BREAK_POINTS.TABLET})`,
  MOBILE: `(max-width: ${BREAK_POINTS.MOBILE})`,
} as const

export type MatchMedia = keyof typeof MATCH_MEDIA

export const MEDIA_QUERY = {
  XGA: `screen and ${MATCH_MEDIA.XGA}`,
  PC: `screen and ${MATCH_MEDIA.PC}`,
  TABLET: `screen and ${MATCH_MEDIA.TABLET}`,
  MOBILE: `screen and ${MATCH_MEDIA.MOBILE}`,
} as const

export type MediaQuery = keyof typeof MEDIA_QUERY
