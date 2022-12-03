import styled from 'styled-components'

import Image, { Props } from '@/atoms/Image'
import { BASE_COLOR, BORDER_COLOR } from '@/const/style'

const Photo = ({ src, alt = '', width, height, loading }: Props) => {
  return (
    <StyledPhoto>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
      />
    </StyledPhoto>
  )
}

export default Photo

const StyledPhoto = styled.div`
  display: inline-flex;
  border: 8px solid ${BORDER_COLOR.LIGHT_GRAY};

  /* NOTE: ここでしか利用しないのでハードコードで対応する */
  background: ${BASE_COLOR.LIGHT_GRAY};
`
