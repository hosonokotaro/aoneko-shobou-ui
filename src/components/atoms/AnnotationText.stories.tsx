import { ComponentMeta, ComponentStory } from '@storybook/react'

import { AnnotationText } from '@/atoms/AnnotationText'

export default {
  title: 'atoms/AnnotationText',
  component: AnnotationText,
} as ComponentMeta<typeof AnnotationText>

const Template: ComponentStory<typeof AnnotationText> = (args) => (
  <AnnotationText {...args} />
)

export const Caption = Template.bind({})
Caption.args = {
  text: '店舗の外観です',
  color: 'CAPTION',
}

export const Caution = Template.bind({})
Caution.args = {
  text: '※書店・カフェ共に販売はいたしません',
  color: 'CAUTION',
}
