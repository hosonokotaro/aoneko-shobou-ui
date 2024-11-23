import { Meta } from '@storybook/react'

import { Chip } from '@/atoms/Chip'

export default {
  title: 'atoms/Chip',
  component: Chip,
} as Meta<typeof Chip>

export const Default = {
  args: {
    status: 'DEFAULT',
    text: '電話',
  },
}

export const Caution = {
  args: {
    status: 'CAUTION',
    text: '必須',
  },
}
