import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import Icon, { FILL_COLOR, ICON_NAME } from '@/atoms/Icon'

export default {
  title: 'atoms/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />

export const Info = Template.bind({})
Info.args = {
  iconName: ICON_NAME.INFO,
  fillColor: FILL_COLOR.ATTENTION,
}
