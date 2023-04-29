import { useCallback, useEffect, useMemo, useState } from 'react'

import { MATCH_MEDIA } from '@/const/mediaQuery'

export const useMatchMedia = () => {
  const matchTabletDevice = useMemo(() => {
    if (typeof window === 'undefined') return
    return window.matchMedia(MATCH_MEDIA.TABLET)
  }, [])

  const [isTablet, setIsTablet] = useState(
    matchTabletDevice ? matchTabletDevice.matches : false
  )

  const handleIsTablet = useCallback((event: MediaQueryListEvent) => {
    setIsTablet(event.matches)
  }, [])

  useEffect(() => {
    if (!matchTabletDevice) return
    matchTabletDevice.addEventListener('change', handleIsTablet, false)

    return () => {
      matchTabletDevice.removeEventListener('change', handleIsTablet, false)
    }
  }, [handleIsTablet, matchTabletDevice])

  return { isTablet }
}
