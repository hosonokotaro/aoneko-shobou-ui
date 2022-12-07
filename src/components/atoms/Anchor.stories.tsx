import { ComponentMeta, ComponentStory } from '@storybook/react'

import Anchor from '@/atoms/Anchor'

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
