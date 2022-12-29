import { ComponentMeta, ComponentStory } from '@storybook/react'

import { HeadingText } from '@/atoms/HeadingText'

export default {
  title: 'atoms/HeadingText',
  component: HeadingText,
} as ComponentMeta<typeof HeadingText>

const Template: ComponentStory<typeof HeadingText> = (args) => (
  <HeadingText {...args} />
)

export const PageTitle = Template.bind({})
PageTitle.args = {
  text: '青猫書房について',
  kind: 'PAGE_TITLE',
}

export const SectionTitle = Template.bind({})
SectionTitle.args = {
  text: '更新履歴',
  kind: 'SECTION_TITLE',
}

export const SubTitle = Template.bind({})
SubTitle.args = {
  text: '店舗の電話番号',
  kind: 'SUBTITLE',
}
