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
  isSeeMore: false,
  isBorderRadius: true,
}

export const SeeMore = Template.bind({})
SeeMore.args = {
  text: '続きを見る',
  buttonColor: 'DEFAULT',
  isSeeMore: true,
  isBorderRadius: true,
}

export const External = Template.bind({})
External.args = {
  text: '外のサイトへ',
  buttonColor: 'EXTERNAL',
  isSeeMore: false,
  isBorderRadius: true,
}
