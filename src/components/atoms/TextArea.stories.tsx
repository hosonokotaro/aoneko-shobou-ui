import { ComponentMeta, ComponentStory } from '@storybook/react'

import { TextArea } from '@/atoms/TextArea'

export default {
  title: 'atoms/TextArea',
  component: TextArea,
} as ComponentMeta<typeof TextArea>

const Template: ComponentStory<typeof TextArea> = (args) => (
  <TextArea {...args} />
)

export const Default = Template.bind({})
Default.args = {
  placeholder: '入力してください\n複数行入力できます',
}
