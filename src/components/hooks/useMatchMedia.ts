import { useCallback, useEffect, useState } from 'react'

import { MATCH_MEDIA } from '@/const/mediaQuery'

const tabletDevice = matchMedia(MATCH_MEDIA.TABLET)

const useMatchMedia = () => {
  const [isTablet, setIsTablet] = useState(tabletDevice.matches)

  const handleIsTablet = useCallback((event: MediaQueryListEvent) => {
    setIsTablet(event.matches)
  }, [])

  useEffect(() => {
    tabletDevice.addEventListener('change', handleIsTablet, false)

    return () => {
      tabletDevice.removeEventListener('change', handleIsTablet, false)
    }
  }, [handleIsTablet])

  return { isTablet }
}

export default useMatchMedia
