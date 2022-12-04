import { action } from '@storybook/addon-actions'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import Button from '@/molecules/Button'

export default {
  title: 'molecules/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  text: '予約する',
  buttonColor: 'DEFAULT',
  isBorderRadius: true,
  handleClick: action('Default'),
}

export const SeeMore = Template.bind({})
SeeMore.args = {
  text: '続きを見る',
  buttonColor: 'DEFAULT',
  iconKind: 'NAVIGATE_NEXT',
  isBorderRadius: true,
  handleClick: action('SeeMore'),
}

export const External = Template.bind({})
External.args = {
  text: '外のサイトへ',
  buttonColor: 'EXTERNAL',
  iconKind: 'NAVIGATE_NEXT',
  isBorderRadius: true,
  handleClick: action('External'),
}

export const IconOnly = Template.bind({})
IconOnly.args = {
  buttonColor: 'DEFAULT',
  iconKind: 'NAVIGATE_NEXT',
  isBorderRadius: true,
  handleClick: action('IconOnly'),
}