import { action } from '@storybook/addon-actions'
import { Meta, StoryFn } from '@storybook/react'
import { useState } from 'react'

import {
  GlobalNavigation,
  GlobalNavigationProps,
} from '@/molecules/GlobalNavigation'

export default {
  title: 'molecules/GlobalNavigation',
  component: GlobalNavigation,
} as Meta<typeof GlobalNavigation>

const Template: StoryFn<typeof GlobalNavigation> = (args) => {
  // NOTE: 親側で持つ useState を mock する
  const [isOpenNavigation, setIsOpenNavigation] = useState(true)

  return (
    <GlobalNavigation
      {...args}
      isOpenNavigation={isOpenNavigation}
      handleSetIsOpenNavigation={setIsOpenNavigation}
    />
  )
}

const navigationList: GlobalNavigationProps['navigationList'] = [
  {
    path: '/',
    name: 'HOME',
    isExternal: false,
  },
  {
    path: '/overture',
    name: '青猫書房について',
    isExternal: false,
  },
  {
    path: '/info',
    name: '店舗情報',
    isExternal: false,
  },
  {
    path: '/salon-gallery',
    name: 'サロン・ギャラリー',
    isExternal: false,
  },
  {
    path: '/contact',
    name: 'お問い合わせ',
    isExternal: false,
  },
  {
    path: 'https://blog.aoneko-shobou.jp',
    name: '青猫書房の日々',
    isExternal: true,
  },
]

export const Default = {
  render: Template,

  args: {
    navigationList,
    handleLinkEvent: action('[event, path, isExternal]'),
    currentPath: '/',
  },
}
