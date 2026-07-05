import { describe, expect, it } from 'vitest'

import { BREAK_POINTS, MATCH_MEDIA, MEDIA_QUERY } from '@/const/mediaQuery'

describe('mediaQuery', () => {
  it('MATCH_MEDIA は BREAK_POINTS から導出される', () => {
    expect(MATCH_MEDIA.XGA).toBe(`(min-width: ${BREAK_POINTS.XGA})`)
    expect(MATCH_MEDIA.PC).toBe(`(min-width: ${BREAK_POINTS.PC})`)
    expect(MATCH_MEDIA.TABLET).toBe(`(max-width: ${BREAK_POINTS.TABLET})`)
    expect(MATCH_MEDIA.MOBILE).toBe(`(max-width: ${BREAK_POINTS.MOBILE})`)
  })

  it('MEDIA_QUERY は MATCH_MEDIA に screen and を付与したもの', () => {
    expect(MEDIA_QUERY.XGA).toBe(`screen and ${MATCH_MEDIA.XGA}`)
    expect(MEDIA_QUERY.PC).toBe(`screen and ${MATCH_MEDIA.PC}`)
    expect(MEDIA_QUERY.TABLET).toBe(`screen and ${MATCH_MEDIA.TABLET}`)
    expect(MEDIA_QUERY.MOBILE).toBe(`screen and ${MATCH_MEDIA.MOBILE}`)
  })

  it('PC(min-width)と TABLET(max-width)の境界は重複しない', () => {
    expect(parseInt(BREAK_POINTS.PC)).toBe(parseInt(BREAK_POINTS.TABLET) + 1)
  })
})
