import { action } from '@storybook/addon-actions'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import Button, { BUTTON_SIZE } from '@/molecules/Button'

export default {
  title: 'molecules/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  text: '予約する',
  buttonSize: BUTTON_SIZE.M,
  buttonColor: 'DEFAULT',
  isBorderRadius: true,
  callback: action('Default'),
}

export const SeeMore = Template.bind({})
SeeMore.args = {
  text: '続きを見る',
  buttonSize: BUTTON_SIZE.M,
  buttonColor: 'DEFAULT',
  iconKind: 'NAVIGATE_NEXT',
  isBorderRadius: true,
  callback: action('SeeMore'),
}

export const External = Template.bind({})
External.args = {
  text: '外のサイトへ',
  buttonSize: BUTTON_SIZE.M,
  buttonColor: 'EXTERNAL',
  iconKind: 'NAVIGATE_NEXT',
  isBorderRadius: true,
  isAnchor: true,
  href: 'https://www.google.com/',
  target: 'BLANK',
}

export const IconOnly = Template.bind({})
IconOnly.args = {
  buttonColor: 'DEFAULT',
  buttonSize: BUTTON_SIZE.M,
  iconKind: 'NAVIGATE_NEXT',
  isBorderRadius: true,
  callback: action('IconOnly'),
}
