import { useCallback, useEffect, useMemo, useState } from 'react'

import { MATCH_MEDIA } from '@/const/mediaQuery'

type MatchMedia = {
  isTablet: boolean
  isMobile: boolean
}

export const useMatchMedia = () => {
  const [matchMedia, setMatchMedia] = useState<MatchMedia>({
    isTablet: window.matchMedia(MATCH_MEDIA.TABLET).matches,
    isMobile: window.matchMedia(MATCH_MEDIA.MOBILE).matches,
  })

  const matchTabletDevice = useMemo(() => {
    return window.matchMedia(MATCH_MEDIA.TABLET)
  }, [])

  const matchMobileDevice = useMemo(() => {
    return window.matchMedia(MATCH_MEDIA.MOBILE)
  }, [])

  const handleChangeTablet = useCallback(
    (event: MediaQueryListEvent) => {
      setMatchMedia({ ...matchMedia, isTablet: event.matches })
    },
    [matchMedia]
  )

  const handleChangeMobile = useCallback(
    (event: MediaQueryListEvent) => {
      setMatchMedia({ ...matchMedia, isMobile: event.matches })
    },
    [matchMedia]
  )

  useEffect(() => {
    matchTabletDevice.addEventListener('change', handleChangeTablet, false)
    matchMobileDevice.addEventListener('change', handleChangeMobile, false)

    return () => {
      matchTabletDevice.removeEventListener('change', handleChangeTablet, false)
      matchMobileDevice.removeEventListener('change', handleChangeMobile, false)
    }
  }, [matchTabletDevice, matchMobileDevice])

  return {
    ...matchMedia,
  }
}
