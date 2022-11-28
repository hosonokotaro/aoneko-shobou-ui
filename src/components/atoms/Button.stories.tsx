import { ComponentMeta, ComponentStory } from '@storybook/react'

import Button from '@/atoms/Button'

export default {
  title: 'atoms/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  text: '予約する',
  buttonColor: 'DEFAULT',
  isSeeMore: false,
}

export const SeeMore = Template.bind({})
SeeMore.args = {
  text: '続きを見る',
  buttonColor: 'DEFAULT',
  isSeeMore: true,
}

export const External = Template.bind({})
External.args = {
  text: '外のサイトへ',
  buttonColor: 'EXTERNAL',
  isSeeMore: false,
}
