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
  dataIconProps: {
    'data-rotate': '0deg',
    'data-fill-color': 'TITLE',
    'data-size': 'XXL',
  },
  iconKind: ICON_KIND.INFO,
}

export const OpenInNew = Template.bind({})
OpenInNew.args = {
  dataIconProps: {
    'data-rotate': '0deg',
    'data-fill-color': 'LINK',
    'data-size': 'XXL',
  },
  iconKind: ICON_KIND.OPEN_IN_NEW,
}

export const NavigateNext = Template.bind({})
NavigateNext.args = {
  dataIconProps: {
    'data-rotate': '0deg',
    'data-fill-color': 'BLACK',
    'data-size': 'XXL',
  },
  iconKind: ICON_KIND.NAVIGATE_NEXT,
}

export const Menu = Template.bind({})
Menu.args = {
  dataIconProps: {
    'data-rotate': '0deg',
    'data-fill-color': 'LINK',
    'data-size': 'XXL',
  },
  iconKind: ICON_KIND.MENU,
}

export const MenuOpen = Template.bind({})
MenuOpen.args = {
  dataIconProps: {
    'data-rotate': '0deg',
    'data-fill-color': 'LINK',
    'data-size': 'XXL',
  },
  iconKind: ICON_KIND.MENU_OPEN,
}

export const Spinner = Template.bind({})
Spinner.args = {
  dataIconProps: {
    'data-rotate': '0deg',
    'data-fill-color': 'TITLE',
    'data-size': 'XXL',
  },
  iconKind: ICON_KIND.SPINNER,
}
