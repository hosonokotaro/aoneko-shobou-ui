import { action } from '@storybook/addon-actions'
import { Meta } from '@storybook/react'

import { Button } from '@/molecules/Button'

export default {
  title: 'molecules/Button',
  component: Button,
} as Meta<typeof Button>

export const Default = {
  args: {
    text: '予約する',
    buttonSize: 'M',
    buttonColor: 'DEFAULT',
    onClick: action('Default'),
  },
}

export const SeeMore = {
  args: {
    text: '続きを見る',
    buttonSize: 'M',
    buttonColor: 'DEFAULT',
    iconKind: 'NAVIGATE_NEXT',
    onClick: action('SeeMore'),
  },
}

export const External = {
  args: {
    text: '外のサイトへ',
    buttonSize: 'M',
    buttonColor: 'EXTERNAL',
    iconKind: 'NAVIGATE_NEXT',
    isAnchor: true,
    href: 'https://www.google.com/',
    target: '_blank',
  },
}

export const IconOnly = {
  args: {
    buttonColor: 'DEFAULT',
    buttonSize: 'M',
    iconKind: 'NAVIGATE_NEXT',
    onClick: action('IconOnly'),
  },
}

export const HasAnchorCallback = {
  args: {
    text: 'Anchor かつ Callback 付',
    buttonSize: 'M',
    buttonColor: 'DEFAULT',
    isAnchor: true,
    onClick: action('HasAnchorCallback'),
  },
}
