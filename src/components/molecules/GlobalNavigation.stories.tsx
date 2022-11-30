import { ComponentMeta, ComponentStory } from '@storybook/react'
import { map } from 'lodash-es'

import GlobalNavigation, { NavigationItem } from '@/molecules/GlobalNavigation'

export default {
  title: 'molecules/GlobalNavigation',
  component: GlobalNavigation,
} as ComponentMeta<typeof GlobalNavigation>

const Template: ComponentStory<typeof GlobalNavigation> = (args) => (
  <GlobalNavigation {...args} />
)

const PAGE_LIST = [
  {
    PATH: '/',
    NAME: 'HOME',
    IS_EXTERNAL: false,
  },
  {
    PATH: '/overture',
    NAME: '青猫書房について',
    IS_EXTERNAL: false,
  },
  {
    PATH: '/info',
    NAME: '店舗情報',
    IS_EXTERNAL: false,
  },
  {
    PATH: '/salon-gallery',
    NAME: 'サロン・ギャラリー',
    IS_EXTERNAL: false,
  },
  {
    PATH: '/contact',
    NAME: 'お問い合わせ',
    IS_EXTERNAL: false,
  },
  {
    PATH: 'https://blog.aoneko-shobou.jp',
    NAME: '青猫書房の日々',
    IS_EXTERNAL: true,
  },
] as const

// NOTE: 定数なので大文字になるが、実際に component で利用するには小文字が望ましいので、変換作業をする
const fixedList: NavigationItem[] = []

map(PAGE_LIST, (item) => {
  fixedList.push({
    path: item.PATH,
    name: item.NAME,
    isExternal: item.IS_EXTERNAL,
  })
})

export const Default = Template.bind({})
Default.args = {
  navigationList: fixedList,
  handleClick: (path: string, isExternal: boolean) =>
    console.log(path, isExternal),
}
