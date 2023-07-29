import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Select } from '@/atoms/Select'

export default {
  title: 'atoms/Select',
  component: Select,
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />

export const Default = Template.bind({})
Default.args = {
  placeholder: '選択してください',
  valueList: [
    '店舗について',
    '取扱い商品について',
    '開催イベントについて',
    'サロン・ギャラリーについて',
    '宣伝・広告等について',
    'お取引について',
    'その他',
  ],
}
