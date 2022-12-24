import { action } from '@storybook/addon-actions'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { GlobalNavigation, NavigationItem } from '@/molecules/GlobalNavigation'

export default {
  title: 'molecules/GlobalNavigation',
  component: GlobalNavigation,
} as ComponentMeta<typeof GlobalNavigation>

const Template: ComponentStory<typeof GlobalNavigation> = (args) => (
  <GlobalNavigation {...args} />
)

const navigationList: NavigationItem[] = [
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

export const Default = Template.bind({})
Default.args = {
  navigationList,
  handleLinkEvent: action('[path, isExternal]'),
  currentPath: '/',
}
