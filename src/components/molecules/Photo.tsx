import styled from 'styled-components'

import Image, { Props as ImageProps } from '@/atoms/Image'
import { BASE_COLOR, BORDER_COLOR } from '@/const/color'

type Props = {
  imageProps: ImageProps
}

const Photo = ({ imageProps }: Props) => {
  return (
    <StyledPhoto>
      <Image
        src={imageProps.src}
        alt={imageProps.alt}
        width={imageProps.width}
        height={imageProps.height}
        loading={imageProps.loading}
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
