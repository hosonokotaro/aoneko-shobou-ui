import { ComponentMeta, ComponentStory } from '@storybook/react'

import HeadingText, { HEADING_KIND } from '@/atoms/HeadingText'

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
  kind: HEADING_KIND.PAGE_TITLE,
}

export const SectionTitle = Template.bind({})
SectionTitle.args = {
  text: '更新履歴',
  kind: HEADING_KIND.SECTION_TITLE,
}

export const SubTitle = Template.bind({})
SubTitle.args = {
  text: '店舗の電話番号',
  kind: HEADING_KIND.SUBTITLE,
}
