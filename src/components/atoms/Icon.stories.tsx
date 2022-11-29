import { ComponentMeta, ComponentStory } from '@storybook/react'

import Icon, { ICON_KIND } from '@/atoms/Icon'

export default {
  title: 'atoms/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />

export const Info = Template.bind({})
Info.args = {
  iconKind: ICON_KIND.INFO,
  fillColor: 'TITLE',
  size: 'XXL',
}
