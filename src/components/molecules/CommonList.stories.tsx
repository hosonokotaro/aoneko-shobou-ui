import { ComponentMeta, ComponentStory } from '@storybook/react'

import { CommonItem, CommonList } from '@/molecules/CommonList'

export default {
  title: 'molecules/CommonList',
  component: CommonList,
} as ComponentMeta<typeof CommonList>

const Template: ComponentStory<typeof CommonList> = (args) => (
  <CommonList {...args} />
)

const commonList: CommonItem[] = [
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

export const Default = Template.bind({})
Default.args = {
  commonList,
}
