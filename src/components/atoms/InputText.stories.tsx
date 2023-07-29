import { ComponentMeta, ComponentStory } from '@storybook/react'

import { InputText } from '@/atoms/InputText'

export default {
  title: 'atoms/InputText',
  component: InputText,
} as ComponentMeta<typeof InputText>

const Template: ComponentStory<typeof InputText> = (args) => (
  <InputText {...args} />
)

export const SingleLine = Template.bind({})
SingleLine.args = {
  placeholder: '入力してください',
  isMultiLine: false,
}

export const MultiLine = Template.bind({})
MultiLine.args = {
  placeholder: '入力してください\n複数行入力できます',
  isMultiLine: true,
}
