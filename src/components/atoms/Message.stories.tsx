import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import Message from '@/atoms/Message'

export default {
  title: 'atoms/Message',
  component: Message,
  args: {
    no: 0,
  },
} as ComponentMeta<typeof Message>

const Template: ComponentStory<typeof Message> = (args) => <Message {...args} />

export const Primary = Template.bind({})
Primary.args = {
  text: 'Primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
  text: 'Secondary',
}
