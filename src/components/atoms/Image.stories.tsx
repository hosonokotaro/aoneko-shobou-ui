import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Image } from '@/atoms/Image'

export default {
  title: 'atoms/Image',
  component: Image,
} as ComponentMeta<typeof Image>

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />

export const Default = Template.bind({})
Default.args = {
  src: 'https://picsum.photos/640/480',
  alt: 'default',
  width: 640,
  height: 480,
  loading: undefined,
}
