import 'swiper/css'
import 'swiper/css/pagination'

import { map } from 'lodash-es'
import { Autoplay, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import Image, { Props as ImageProps } from '@/atoms/Image'

type CarouselParams = {
  loop: boolean
  slidesPerView: number
  speedMs: number
  autoPlauDelay: number
  autoplayDisableOnInteraction: boolean
  autoplayPauseOnMouseEnter: boolean
  autoHeight: boolean
  pagenationClickable: boolean
}

type Props = {
  imageList: ImageProps[]
  carouselParams: CarouselParams
}

const Carousel = ({ imageList, carouselParams }: Props) => {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      loop={carouselParams.loop}
      slidesPerView={carouselParams.slidesPerView}
      speed={carouselParams.speedMs}
      autoplay={{
        delay: carouselParams.autoPlauDelay,
        disableOnInteraction: carouselParams.autoplayDisableOnInteraction,
        pauseOnMouseEnter: carouselParams.autoplayPauseOnMouseEnter,
      }}
      autoHeight={carouselParams.autoHeight}
      pagination={{ clickable: carouselParams.pagenationClickable }}
    >
      {map(imageList, (image, index) => (
        <SwiperSlide key={index}>
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            loading={image.loading}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Carousel
