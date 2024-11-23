import { Meta } from '@storybook/react'

import { ICON_KIND } from '@/const/common'
import { Icon } from '@/molecules/Icon'

export default {
  title: 'molecules/Icon',
  component: Icon,
} as Meta<typeof Icon>

export const Info = {
  args: {
    dataIconProps: {
      'data-rotate': '0deg',
      'data-fill-color': 'TITLE',
      'data-size': 'XXL',
    },
    iconKind: ICON_KIND.INFO,
  },
}

export const OpenInNew = {
  args: {
    dataIconProps: {
      'data-rotate': '0deg',
      'data-fill-color': 'LINK',
      'data-size': 'XXL',
    },
    iconKind: ICON_KIND.OPEN_IN_NEW,
  },
}

export const NavigateNext = {
  args: {
    dataIconProps: {
      'data-rotate': '0deg',
      'data-fill-color': 'BLACK',
      'data-size': 'XXL',
    },
    iconKind: ICON_KIND.NAVIGATE_NEXT,
  },
}

export const Menu = {
  args: {
    dataIconProps: {
      'data-rotate': '0deg',
      'data-fill-color': 'LINK',
      'data-size': 'XXL',
    },
    iconKind: ICON_KIND.MENU,
  },
}

export const MenuOpen = {
  args: {
    dataIconProps: {
      'data-rotate': '0deg',
      'data-fill-color': 'LINK',
      'data-size': 'XXL',
    },
    iconKind: ICON_KIND.MENU_OPEN,
  },
}

export const Spinner = {
  args: {
    dataIconProps: {
      'data-rotate': '0deg',
      'data-fill-color': 'TITLE',
      'data-size': 'XXL',
    },
    iconKind: ICON_KIND.SPINNER,
  },
}
