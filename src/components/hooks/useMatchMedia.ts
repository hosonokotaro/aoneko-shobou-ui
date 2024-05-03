import { useEffect, useState } from 'react'

import { MATCH_MEDIA } from '@/const/mediaQuery'

type MatchMedia = {
  isTablet: boolean
  isMobile: boolean
}

export const useMatchMedia = () => {
  const [matchMedia, setMatchMedia] = useState<MatchMedia>({
    isTablet: false,
    isMobile: false,
  })

  useEffect(() => {
    const matchTabletDevice = window.matchMedia(MATCH_MEDIA.TABLET)
    const matchMobileDevice = window.matchMedia(MATCH_MEDIA.MOBILE)

    const handleChange =
      (type: keyof MatchMedia) => (event: MediaQueryListEvent) => {
        setMatchMedia((prev) => ({ ...prev, [type]: event.matches }))
      }

    matchTabletDevice.addEventListener('change', handleChange('isTablet'))
    matchMobileDevice.addEventListener('change', handleChange('isMobile'))

    handleChange('isTablet')({
      matches: matchTabletDevice.matches,
    } as MediaQueryListEvent)

    handleChange('isMobile')({
      matches: matchMobileDevice.matches,
    } as MediaQueryListEvent)

    return () => {
      matchTabletDevice.removeEventListener('change', handleChange('isTablet'))
      matchMobileDevice.removeEventListener('change', handleChange('isMobile'))
    }
  }, [])

  return matchMedia
}
