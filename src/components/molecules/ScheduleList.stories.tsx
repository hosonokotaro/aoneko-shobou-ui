import { ComponentMeta, ComponentStory } from '@storybook/react'

import { ScheduleItem, ScheduleList } from '@/molecules/ScheduleList'

export default {
  title: 'molecules/ScheduleList',
  component: ScheduleList,
} as ComponentMeta<typeof ScheduleList>

const Template: ComponentStory<typeof ScheduleList> = (args) => (
  <ScheduleList {...args} />
)

const scheduleList: ScheduleItem[] = [
  {
    startDate: '2022/11/23',
    endDate: '2022/12/26',
    timeFrame: '11:00～18:00',
    description: '「おとうさんとぼく」展示会',
  },
  {
    startDate: '2022/12/3',
    endDate: '2022/12/3',
    timeFrame: '14:30～15:00',
    description: 'プレコンサート■ダミアン原田シターコンサート　無料',
  },
  {
    startDate: '2022/12/4',
    endDate: '2022/12/4',
    timeFrame: '13:15～15:15',
    description: '＊サロン占有使用に付き、展示は見られません🙇',
  },
]

export const Default = Template.bind({})
Default.args = {
  scheduleList: scheduleList,
  currentTime: '2022/12/6',
}
