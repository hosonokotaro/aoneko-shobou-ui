import { ComponentMeta, ComponentStory } from '@storybook/react'

import Photo from '@/molecules/Photo'

export default {
  title: 'molecules/Photo',
  component: Photo,
} as ComponentMeta<typeof Photo>

const Template: ComponentStory<typeof Photo> = (args) => <Photo {...args} />

export const Default = Template.bind({})
Default.args = {
  src: 'https://picsum.photos/640/480',
  alt: 'default',
  width: 640,
  height: 480,
  loading: undefined,
}