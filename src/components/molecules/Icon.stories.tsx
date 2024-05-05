import { ComponentMeta, ComponentStory } from '@storybook/react'

import { ICON_KIND } from '@/const/common'
import { Icon } from '@/molecules/Icon'

export default {
  title: 'molecules/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />

export const Info = Template.bind({})
Info.args = {
  iconKind: ICON_KIND.INFO,
  size: 'XXL',
  dataStyleProps: { 'data-fill-color': 'TITLE' },
}

export const OpenInNew = Template.bind({})
OpenInNew.args = {
  iconKind: ICON_KIND.OPEN_IN_NEW,
  size: 'XXL',
  dataStyleProps: { 'data-fill-color': 'LINK' },
}

export const NavigateNext = Template.bind({})
NavigateNext.args = {
  iconKind: ICON_KIND.NAVIGATE_NEXT,
  size: 'XXL',
  dataStyleProps: { 'data-fill-color': 'BLACK' },
}

export const Menu = Template.bind({})
Menu.args = {
  iconKind: ICON_KIND.MENU,
  size: 'XXL',
  dataStyleProps: { 'data-fill-color': 'LINK' },
}

export const MenuOpen = Template.bind({})
MenuOpen.args = {
  iconKind: ICON_KIND.MENU_OPEN,
  size: 'XXL',
  dataStyleProps: { 'data-fill-color': 'LINK' },
}

export const Spinner = Template.bind({})
Spinner.args = {
  iconKind: ICON_KIND.SPINNER,
  size: 'XXL',
  dataStyleProps: { 'data-size': 'M' },
}
