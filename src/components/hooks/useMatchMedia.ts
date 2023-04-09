import { useRef } from 'react'

import { MATCH_MEDIA } from '@/const/mediaQuery'

const isTabletDevice = () => {
  if (typeof window === 'undefined') return false
  return window.matchMedia(MATCH_MEDIA.TABLET).matches
}

export const useMatchMedia = () => {
  const tabletDeviceRef = useRef<null | boolean>(null)
  tabletDeviceRef.current = isTabletDevice()

  return { isTablet: tabletDeviceRef.current }
}
