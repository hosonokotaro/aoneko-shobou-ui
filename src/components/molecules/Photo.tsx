import styled from 'styled-components'

import { Image, ImageProps } from '@/atoms/Image'
import { BASE_COLOR, BORDER_COLOR } from '@/const/color'

export type PhotoProps = {
  /** Atoms の Image component の props を受け取る */
  imageProps: ImageProps
}

export const Photo = ({ imageProps }: PhotoProps) => {
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

const StyledPhoto = styled.div`
  display: inline-flex;
  border: 8px solid ${BORDER_COLOR.LIGHT_GRAY};

  /* NOTE: ここでしか利用しないのでハードコードで対応する */
  background: ${BASE_COLOR.LIGHT_GRAY};
`
