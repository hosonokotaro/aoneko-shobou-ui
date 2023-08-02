import { ComponentMeta, ComponentStory } from '@storybook/react'

import { InputText } from '@/atoms/InputText'

export default {
  title: 'atoms/InputText',
  component: InputText,
} as ComponentMeta<typeof InputText>

const Template: ComponentStory<typeof InputText> = (args) => (
  <InputText {...args} />
)

export const Default = Template.bind({})
Default.args = {}
