import { Loader, LoaderOptions } from '@googlemaps/js-api-loader'
import { useCallback, useEffect, useRef } from 'react'
import styled from 'styled-components'

type Center = {
  lat: number
  lng: number
}

type MapTypeControlOptions = {
  mapTypeIds: string[]
}

type MapOptions = {
  zoom: number
  center: Center
  mapTypeControl: boolean
  mapTypeControlOptions: MapTypeControlOptions
}

type Stylers = {
  color: string
}

type StyledMap = {
  featureType?: string
  elementType: string
  stylers: Stylers[]
}

export type Props = {
  loaderOptions: LoaderOptions
  mapTypeId: string
  mapOptions: MapOptions
  styledMap: StyledMap[]
  height: string
}

const ShopMap = ({
  loaderOptions,
  mapTypeId,
  mapOptions,
  styledMap,
  height,
}: Props) => {
  const mapRef = useRef<HTMLDivElement>(null)

  const mapLoader = useCallback(async () => {
    if (mapRef.current === null) return

    const loader = new Loader(loaderOptions)
    const google = await loader.load()

    const styledMapType = new google.maps.StyledMapType(styledMap)
    const map = new google.maps.Map(mapRef.current, mapOptions)

    map.mapTypes.set(mapTypeId, styledMapType)
    map.setMapTypeId(mapTypeId)

    new google.maps.Marker({
      map,
      position: mapOptions.center,
    })
  }, [loaderOptions, mapOptions, mapTypeId, styledMap])

  useEffect(() => {
    mapLoader()

    return () => {
      mapLoader
    }
  }, [mapLoader])

  return <StyledShopMap ref={mapRef} $height={height} />
}

export default ShopMap

const StyledShopMap = styled.div<{ $height: string }>`
  height: ${({ $height }) => $height};
`
