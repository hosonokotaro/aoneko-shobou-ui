import { act, renderHook } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import { MATCH_MEDIA } from '@/const/mediaQuery'
import { useMatchMedia } from '@/hooks/useMatchMedia'

type ChangeListener = (event: MediaQueryListEvent) => void

const createMatchMediaMock = (matchesByQuery: Record<string, boolean>) => {
  const listeners: Record<string, ChangeListener[]> = {}

  const matchMedia = (query: string): MediaQueryList =>
    ({
      get matches() {
        return matchesByQuery[query] ?? false
      },
      media: query,
      addEventListener: (_: 'change', listener: ChangeListener) => {
        listeners[query] = [...(listeners[query] ?? []), listener]
      },
      removeEventListener: (_: 'change', listener: ChangeListener) => {
        listeners[query] = (listeners[query] ?? []).filter(
          (item) => item !== listener
        )
      },
    } as MediaQueryList)

  const dispatchChange = (query: string, matches: boolean) => {
    matchesByQuery[query] = matches
    listeners[query]?.forEach((listener) =>
      listener({ matches, media: query } as MediaQueryListEvent)
    )
  }

  return { matchMedia, dispatchChange, listeners }
}

describe('useMatchMedia', () => {
  beforeEach(() => {
    vi.unstubAllGlobals()
  })

  it('マウント時に matchMedia の結果を反映する', () => {
    const { matchMedia } = createMatchMediaMock({
      [MATCH_MEDIA.TABLET]: true,
      [MATCH_MEDIA.MOBILE]: false,
    })
    vi.stubGlobal('matchMedia', matchMedia)

    const { result } = renderHook(() => useMatchMedia())

    expect(result.current).toEqual({ isTablet: true, isMobile: false })
  })

  it('change イベントで状態が更新される', () => {
    const { matchMedia, dispatchChange } = createMatchMediaMock({
      [MATCH_MEDIA.TABLET]: false,
      [MATCH_MEDIA.MOBILE]: false,
    })
    vi.stubGlobal('matchMedia', matchMedia)

    const { result } = renderHook(() => useMatchMedia())
    expect(result.current).toEqual({ isTablet: false, isMobile: false })

    act(() => {
      dispatchChange(MATCH_MEDIA.TABLET, true)
      dispatchChange(MATCH_MEDIA.MOBILE, true)
    })

    expect(result.current).toEqual({ isTablet: true, isMobile: true })
  })

  it('アンマウント時にリスナーが解除される', () => {
    const { matchMedia, listeners } = createMatchMediaMock({
      [MATCH_MEDIA.TABLET]: false,
      [MATCH_MEDIA.MOBILE]: false,
    })
    vi.stubGlobal('matchMedia', matchMedia)

    const { unmount } = renderHook(() => useMatchMedia())
    expect(listeners[MATCH_MEDIA.TABLET]).toHaveLength(1)
    expect(listeners[MATCH_MEDIA.MOBILE]).toHaveLength(1)

    unmount()

    expect(listeners[MATCH_MEDIA.TABLET]).toHaveLength(0)
    expect(listeners[MATCH_MEDIA.MOBILE]).toHaveLength(0)
  })
})
