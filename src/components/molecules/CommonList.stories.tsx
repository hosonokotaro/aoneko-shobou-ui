import { Meta } from '@storybook/react'

import { CommonList, CommonListProps } from '@/molecules/CommonList'

export default {
  title: 'molecules/CommonList',
  component: CommonList,
} as Meta<typeof CommonList>

const commonList: CommonListProps['commonList'] = [
  {
    title: 'ホットコーヒー',
    description: '￥400（税込）',
  },
  {
    title: 'ラテマキアート',
    description: '￥500（税込）',
  },
  {
    title: 'ノンカフェインコーヒー',
    description: '￥450（税込）',
  },
  {
    title: 'アイスコーヒー',
    description: '￥400（税込）',
  },
  {
    title: 'アイスカフェオレ',
    description: '￥450（税込）',
  },
  {
    title: 'オレンジジュース',
    description: '￥400（税込）',
  },
  {
    title: 'アップルジュース',
    description: '￥400（税込）',
  },
]

export const Default = {
  args: {
    commonList,
  },
}
