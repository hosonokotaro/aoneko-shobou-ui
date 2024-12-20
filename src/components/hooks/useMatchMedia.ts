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
    if (typeof window === 'undefined') return

    const tabletQuery = window.matchMedia(MATCH_MEDIA.TABLET)
    const mobileQuery = window.matchMedia(MATCH_MEDIA.MOBILE)

    const updateMedia = () => {
      setMatchMedia({
        isTablet: tabletQuery.matches,
        isMobile: mobileQuery.matches,
      })
    }

    updateMedia()

    tabletQuery.addEventListener('change', updateMedia)
    mobileQuery.addEventListener('change', updateMedia)

    return () => {
      tabletQuery.removeEventListener('change', updateMedia)
      mobileQuery.removeEventListener('change', updateMedia)
    }
  }, [])

  return matchMedia
}
