import { ComponentMeta, ComponentStory } from '@storybook/react'

import Chip from '@/atoms/Chip'

export default {
  title: 'atoms/Chip',
  component: Chip,
} as ComponentMeta<typeof Chip>

const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />

export const Default = Template.bind({})
Default.args = {
  status: 'DEFAULT',
  text: '電話',
}

export const Caution = Template.bind({})
Caution.args = {
  status: 'CAUTION',
  text: '必須',
}
