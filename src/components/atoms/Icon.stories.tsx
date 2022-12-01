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
  iconRotate: 'DEFAULT',
}

export const OpenInNew = Template.bind({})
OpenInNew.args = {
  iconKind: ICON_KIND.OPEN_IN_NEW,
  fillColor: 'LINK',
  size: 'XXL',
}

export const NavigateNext = Template.bind({})
NavigateNext.args = {
  iconKind: ICON_KIND.NAVIGATE_NEXT,
  fillColor: 'LINK',
  size: 'XXL',
}
