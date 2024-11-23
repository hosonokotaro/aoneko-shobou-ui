import { Meta } from '@storybook/react'

import { HeadingText } from '@/atoms/HeadingText'

export default {
  title: 'atoms/HeadingText',
  component: HeadingText,
} as Meta<typeof HeadingText>

export const PageTitle = {
  args: {
    text: '青猫書房について',
    kind: 'PAGE_TITLE',
  },
}

export const SectionTitle = {
  args: {
    text: '更新履歴',
    kind: 'SECTION_TITLE',
  },
}

export const SubTitle = {
  args: {
    text: '店舗の電話番号',
    kind: 'SUBTITLE',
  },
}
