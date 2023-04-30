import { ComponentMeta, ComponentStory } from '@storybook/react'

import { ImageProps } from '@/atoms/Image'
import { Carousel } from '@/molecules/Carousel'

export default {
  title: 'molecules/Carousel',
  component: Carousel,
} as ComponentMeta<typeof Carousel>

const Template: ComponentStory<typeof Carousel> = (args) => (
  <Carousel {...args} />
)

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

export const Default = Template.bind({})
Default.args = {
  imageList,
}
