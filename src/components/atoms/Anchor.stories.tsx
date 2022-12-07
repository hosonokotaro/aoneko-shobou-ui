import { ComponentMeta, ComponentStory } from '@storybook/react'

import Anchor from '@/atoms/Anchor'
import Image from '@/atoms/Image'

export default {
  title: 'atoms/Anchor',
  component: Anchor,
} as ComponentMeta<typeof Anchor>

const Template: ComponentStory<typeof Anchor> = (args) => <Anchor {...args} />

export const Self = Template.bind({})
Self.args = {
  href: '#',
  target: 'SELF',
  children: 'self link text',
}

export const Blank = Template.bind({})
Blank.args = {
  href: '#',
  target: 'BLANK',
  children: 'blank link text',
}

export const ImageLink = Template.bind({})
ImageLink.args = {
  href: '#',
  target: 'BLANK',
  children: (
    <Image
      src="https://picsum.photos/640/480"
      alt="default"
      width={640}
      height={480}
    />
  ),
}
