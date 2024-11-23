import { Meta } from '@storybook/react'

import { ParagraphText } from '@/atoms/ParagraphText'

export default {
  title: 'atoms/ParagraphText',
  component: ParagraphText,
} as Meta<typeof ParagraphText>

export const Default = {
  args: {
    text: '参加費の記載のないイベントは無料。また、イベントの日程は変更になる場合がございます。要予約の記載のないイベントは定員を超えていなければ当日参加可能です。（要お問い合わせ）',
  },
}
