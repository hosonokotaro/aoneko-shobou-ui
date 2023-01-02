import { useCallback, useEffect, useState } from 'react'

import { MATCH_MEDIA } from '@/const/mediaQuery'

const tabletDevice =
  typeof window !== 'undefined' && window.matchMedia(MATCH_MEDIA.TABLET)

export const useMatchMedia = () => {
  const [isTablet, setIsTablet] = useState(
    tabletDevice !== false && tabletDevice.matches
  )

  const handleIsTablet = useCallback((event: MediaQueryListEvent) => {
    setIsTablet(event.matches)
  }, [])

  useEffect(() => {
    if (tabletDevice === false) return
    tabletDevice.addEventListener('change', handleIsTablet, false)

    return () => {
      tabletDevice.removeEventListener('change', handleIsTablet, false)
    }
  }, [handleIsTablet])

  return { isTablet }
}
