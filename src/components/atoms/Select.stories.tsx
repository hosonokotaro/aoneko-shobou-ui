import { Meta } from '@storybook/react'

import { Select } from '@/atoms/Select'

export default {
  title: 'atoms/Select',
  component: Select,
} as Meta<typeof Select>

export const Default = {
  args: {
    valueList: [
      '店舗について',
      '取扱い商品について',
      '開催イベントについて',
      'サロン・ギャラリーについて',
      '宣伝・広告等について',
      'お取引について',
      'その他',
    ],
  },
}
