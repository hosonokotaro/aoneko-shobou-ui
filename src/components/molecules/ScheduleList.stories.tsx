import { ComponentMeta, ComponentStory } from '@storybook/react'

import ScheduleList, { ScheduleItem } from '@/molecules/ScheduleList'

export default {
  title: 'molecules/ScheduleList',
  component: ScheduleList,
} as ComponentMeta<typeof ScheduleList>

const Template: ComponentStory<typeof ScheduleList> = (args) => (
  <ScheduleList {...args} />
)

const scheduleList: ScheduleItem[] = [
  {
    period: '2022年11月23日(水)～2022年12月26日(月)',
    timeFrame: '11:00～18:00',
    description: '「おとうさんとぼく」展示会',
    endDate: '2022/12/26',
  },
  {
    period: '2022年12月3日(土)',
    timeFrame: '14:30～15:00',
    description: 'プレコンサート■ダミアン原田シターコンサート　無料',
    endDate: '2022/12/3',
  },
  {
    period: '2022年12月4日(日)',
    timeFrame: '13:15～15:15',
    description: '＊サロン占有使用に付き、展示は見られません🙇',
    endDate: '2022/12/4',
  },
]

export const Default = Template.bind({})
Default.args = {
  scheduleList: scheduleList,
  currentTime: '2022/12/6',
}
