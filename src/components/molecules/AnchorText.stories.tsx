import { ComponentMeta, ComponentStory } from '@storybook/react'

import { AnchorText } from '@/molecules/AnchorText'

export default {
  title: 'molecules/AnchorText',
  component: AnchorText,
} as ComponentMeta<typeof AnchorText>

const Template: ComponentStory<typeof AnchorText> = (args) => (
  <AnchorText {...args} />
)

export const Self = Template.bind({})
Self.args = {
  text: '予定一覧はこちら',
  href: '',
  target: 'SELF',
}

export const Blank = Template.bind({})
Blank.args = {
  text: '○○ の web サイトへ',
  href: '#',
  target: 'BLANK',
}
