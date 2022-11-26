import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import Icon from '@/atoms/Icon'

export default {
  title: 'atoms/Icon',
  component: Icon,
  args: {
    no: 0,
  },
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />

export const Info = Template.bind({})
Info.args = {
  iconName: 'Info',
  fillColor: 'attention',
}
