import { Meta } from '@storybook/react'

import { AnchorText } from '@/molecules/AnchorText'

export default {
  title: 'molecules/AnchorText',
  component: AnchorText,
} as Meta<typeof AnchorText>

export const Self = {
  args: {
    text: '予定一覧はこちら',
    href: '',
    target: '_self',
  },
}

export const Blank = {
  args: {
    text: '○○ の web サイトへ',
    href: '#',
    target: '_blank',
  },
}
