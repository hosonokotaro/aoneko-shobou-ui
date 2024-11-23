import { Meta } from '@storybook/react'

import { Image } from '@/atoms/Image'

export default {
  title: 'atoms/Image',
  component: Image,
} as Meta<typeof Image>

export const Default = {
  args: {
    src: 'https://picsum.photos/640/480',
    alt: 'default',
    width: 640,
    height: 480,
    loading: undefined,
    dataStyleProps: {
      'data-photo-style': '0',
    },
  },
}
