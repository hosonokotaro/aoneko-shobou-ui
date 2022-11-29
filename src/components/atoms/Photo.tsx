import styled from 'styled-components'

import { BASE_COLOR } from '../const/style'

export const LOADING_PARAMS = {
  EAGER: 'eager',
  LAZY: 'lazy',
  NONE: undefined,
} as const

type LoadingParams = keyof typeof LOADING_PARAMS

type Props = {
  src: string
  alt?: string
  width?: number
  height?: number
  loading?: LoadingParams
}

const Photo = ({ src, alt = '', width, height, loading }: Props) => {
  const loadingParam =
    loading === 'EAGER'
      ? LOADING_PARAMS.EAGER
      : loading === 'LAZY'
      ? LOADING_PARAMS.LAZY
      : undefined

  return (
    <PhotoWrapper>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loadingParam}
      />
    </PhotoWrapper>
  )
}

export default Photo

// NOTE: ここでしか利用しないのでハードコードで対応する
const PHOTO_WRAPPER_COLOR = {
  BORDER: BASE_COLOR.LIGHT_GRAY,
  BACKGROUND: BASE_COLOR.LIGHT_GRAY,
} as const

const PhotoWrapper = styled.div`
  display: inline-flex;
  border: 8px solid ${PHOTO_WRAPPER_COLOR.BORDER};
  background: ${PHOTO_WRAPPER_COLOR.BACKGROUND};
`
