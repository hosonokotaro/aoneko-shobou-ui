import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Icon } from '@/atoms/Icon'
import { ICON_KIND } from '@/const/common'

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

export const Menu = Template.bind({})
Menu.args = {
  iconKind: ICON_KIND.MENU,
  fillColor: 'LINK',
  size: 'XXL',
}

export const MenuOpen = Template.bind({})
MenuOpen.args = {
  iconKind: ICON_KIND.MENU_OPEN,
  fillColor: 'LINK',
  size: 'XXL',
}
