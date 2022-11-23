import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import Message from '@/atoms/Message'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'atoms/Message',
  component: Message,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    no: {
      control: 'number',
      defaultValue: 0,
    },
  },
} as ComponentMeta<typeof Message>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Message> = (args) => <Message {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  text: 'Primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
  text: 'Secondary',
}
