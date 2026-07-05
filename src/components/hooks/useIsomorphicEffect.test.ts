import { renderHook } from '@testing-library/react'
import { useLayoutEffect } from 'react'
import { describe, expect, it } from 'vitest'

import { useIsomorphicEffect } from '@/hooks/useIsomorphicEffect'

describe('useIsomorphicEffect', () => {
  it('ブラウザ環境では useLayoutEffect を返す', () => {
    const { result } = renderHook(() => useIsomorphicEffect())

    expect(result.current).toBe(useLayoutEffect)
  })
})
