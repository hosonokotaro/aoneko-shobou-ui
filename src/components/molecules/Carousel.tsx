import 'swiper/css'
import 'swiper/css/pagination'

import { map } from 'lodash-es'
import { Autoplay, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Image, ImageProps } from '@/atoms/Image'
import * as Styles from '@/molecules/Carousel.css'

export type CarouselProps = {
  /** Atoms の Image component の props の配列を受け取る */
  imageList: ImageProps[]
}

const renderBullet = (_: number, className: string) => {
  return `<button class="${className}"><span class="inner"></span></button>`
}

export const Carousel = ({ imageList }: CarouselProps) => {
  return (
    <Swiper
      className={Styles.carousel}
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
        <SwiperSlide key={index} className={Styles.slide}>
          <Image
            dataStyleProps={{ 'data-parent-component': 'Carousel' }}
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading={loading}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
