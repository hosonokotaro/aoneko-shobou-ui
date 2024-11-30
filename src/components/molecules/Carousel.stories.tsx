import { Meta } from '@storybook/react'

import { ImageProps } from '@/atoms/Image'
import { Carousel } from '@/molecules/Carousel'

export default {
  title: 'molecules/Carousel',
  component: Carousel,
} as Meta<typeof Carousel>

const imageProps1: ImageProps = {
  src: 'images/home_main_03.jpg',
  alt: 'test',
  width: 749,
  height: 295,
  loading: 'lazy',
} as const

const imageProps2: ImageProps = {
  src: 'images/home_main_04.jpg',
  alt: 'test',
  width: 749,
  height: 295,
  loading: 'lazy',
} as const

const imageList = [imageProps1, imageProps2]

export const Default = {
  args: {
    imageList,
  },
}

export const WithBottomContent = {
  args: {
    imageList,
    bottomContent: (
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.75)',
          color: '#111',
          padding: '10px',
          textAlign: 'center',
        }}
      >
        bottom content{' '}
        <a href="https://www.google.com" target="_blank" rel="noreferrer">
          google.com
        </a>
      </div>
    ),
  },
}
