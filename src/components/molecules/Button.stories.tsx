import { action } from '@storybook/addon-actions'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Button } from '@/molecules/Button'

export default {
  title: 'molecules/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  text: '予約する',
  buttonSize: 'M',
  buttonColor: 'DEFAULT',
  buttonCallback: action('Default'),
}

export const SeeMore = Template.bind({})
SeeMore.args = {
  text: '続きを見る',
  buttonSize: 'M',
  buttonColor: 'DEFAULT',
  iconKind: 'NAVIGATE_NEXT',
  buttonCallback: action('SeeMore'),
}

export const External = Template.bind({})
External.args = {
  text: '外のサイトへ',
  buttonSize: 'M',
  buttonColor: 'EXTERNAL',
  iconKind: 'NAVIGATE_NEXT',
  isAnchor: true,
  href: 'https://www.google.com/',
  target: 'BLANK',
}

export const IconOnly = Template.bind({})
IconOnly.args = {
  buttonColor: 'DEFAULT',
  buttonSize: 'M',
  iconKind: 'NAVIGATE_NEXT',
  buttonCallback: action('IconOnly'),
}

export const HasAnchorCallback = Template.bind({})
HasAnchorCallback.args = {
  text: 'Anchor かつ Callback 付',
  buttonSize: 'M',
  buttonColor: 'DEFAULT',
  isAnchor: true,
  anchorCallback: action('HasAnchorCallback'),
}
