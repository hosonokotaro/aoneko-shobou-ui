import styled from 'styled-components'

import Image, { Props } from '@/atoms/Image'
import { BASE_COLOR } from '@/const/style'

const Photo = ({ src, alt = '', width, height, loading }: Props) => {
  return (
    <PhotoWrapper>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
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
