import 'swiper/css'
import 'swiper/css/pagination'

import { map } from 'lodash-es'
import styled from 'styled-components'
import { Autoplay, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Image, ImageProps } from '@/atoms/Image'

import { MEDIA_QUERY } from '../const/mediaQuery'
import { ICON_BUTTON_SIZE, MARGIN } from '../const/size'

export type CarouselProps = {
  /** Atoms の Image component の props の配列を受け取る */
  imageList: ImageProps[]
}

const renderBullet = (_: number, className: string) => {
  return `<button class="${className}"><span class="inner"></span></button>`
}

export const Carousel = ({ imageList }: CarouselProps) => {
  return (
    <StyledCarousel
      modules={[Autoplay, Pagination]}
      loop={true}
      slidesPerView={1}
      speed={1200}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      pagination={{
        clickable: true,
        renderBullet,
        bulletClass: 'custom-bullet-style',
        bulletActiveClass: 'custom-bullet-style-active',
      }}
      centeredSlides={true}
      spaceBetween={40}
    >
      {map(imageList, ({ src, alt, width, height, loading }, index) => (
        <SwiperSlide key={index}>
          <StyledImage
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading={loading}
          />
        </SwiperSlide>
      ))}
    </StyledCarousel>
  )
}

const StyledImage = styled(Image)``

// NOTE: ここでしか利用しないのでハードコードで対応する
const MAX_WIDTH = '749px'

const StyledCarousel = styled(Swiper)`
  & .swiper-slide {
    display: grid;
    place-content: center;
  }

  & .swiper-slide ${StyledImage} {
    width: 100%;
    max-width: ${MAX_WIDTH};
    height: 100%;
    object-fit: cover;
  }

  & .swiper-pagination-bullets.swiper-pagination-horizontal {
    bottom: 0;
  }

  & .custom-bullet-style {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: ${ICON_BUTTON_SIZE.M.WIDTH};
    height: ${ICON_BUTTON_SIZE.S.HEIGHT};
    margin: ${MARGIN.NONE} ${MARGIN.S};

    ${MEDIA_QUERY.MOBILE} {
      display: none;
    }
  }

  & .custom-bullet-style .inner {
    width: 100%;
    height: 4px;
    background: #fff;
  }

  & .custom-bullet-style-active .inner {
    background: #ff8897;
  }
`
