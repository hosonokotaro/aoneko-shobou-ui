import { action } from '@storybook/addon-actions'
import { Meta } from '@storybook/react'

import { Anchor } from '@/atoms/Anchor'
import { Image } from '@/atoms/Image'

export default {
  title: 'atoms/Anchor',
  component: Anchor,
} as Meta<typeof Anchor>

export const Self = {
  args: {
    href: '#',
    target: '_self',
    children: 'self link text',
  },
}

export const Blank = {
  args: {
    href: '#',
    target: '_blank',
    children: 'blank link text',
  },
}

export const HasEventHandler = {
  args: {
    href: '#',
    target: '_self',
    children: 'Action event',
    onClick: action('HasEventHandler'),
  },
}

export const ImageLink = {
  args: {
    href: '#',
    target: '_blank',
    children: (
      <Image
        src="https://picsum.photos/640/480"
        alt="default"
        width={640}
        height={480}
      />
    ),
  },
}
