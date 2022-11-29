import { ComponentMeta, ComponentStory } from '@storybook/react'

import ParagraphText from '@/atoms/ParagraphText'

export default {
  title: 'atoms/ParagraphText',
  component: ParagraphText,
} as ComponentMeta<typeof ParagraphText>

const Template: ComponentStory<typeof ParagraphText> = (args) => (
  <ParagraphText {...args} />
)

export const Default = Template.bind({})
Default.args = {
  text: '参加費の記載のないイベントは無料。また、イベントの日程は変更になる場合がございます。要予約の記載のないイベントは定員を超えていなければ当日参加可能です。（要お問い合わせ）',
}
