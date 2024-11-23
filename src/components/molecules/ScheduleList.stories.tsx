import { Meta } from '@storybook/react'

import { ScheduleList, ScheduleListProps } from '@/molecules/ScheduleList'

export default {
  title: 'molecules/ScheduleList',
  component: ScheduleList,
} as Meta<typeof ScheduleList>

const scheduleList: ScheduleListProps['scheduleList'] = [
  {
    startDate: '2022/11/23',
    endDate: '2022/12/26',
    timeFrame: '11:00～18:00',
    description:
      '「おとうさんとぼく」展示会 詳細は<a href="" target="_blank">こちら</a>',
  },
  {
    startDate: '2022/12/3',
    endDate: '2022/12/3',
    timeFrame: '14:30～15:00',
    description: 'プレコンサート■ダミアン原田シターコンサート　無料',
  },
  {
    startDate: '2022/12/3',
    endDate: '2022/12/3',
    timeFrame: '16:30～17:30',
    description: '懇親会',
  },
  {
    startDate: '2022/12/4',
    endDate: '2022/12/4',
    timeFrame: '13:15～15:15',
    description: '＊サロン占有使用に付き、展示は見られません🙇',
  },
  {
    startDate: '2022/12/13',
    endDate: '2022/12/16',
    timeFrame: '11:00～18:00',
    description: '「なにかの」展示会',
  },
  {
    startDate: '2022/12/28',
    endDate: '2023/1/4',
    timeFrame: '10:00～19:00',
    description: '冬期休業',
  },
  {
    startDate: '2023/1/15',
    endDate: '2023/1/15',
    timeFrame: '13:00～16:00',
    description:
      'コンサートコンサートコンサートコンサートコンサートコンサートコンサート',
  },
  {
    startDate: '2023/1/23',
    endDate: '2023/1/23',
    timeFrame: '11:00～18:00',
    description: '「おとうさんとぼく」展示会',
  },
  {
    startDate: '2023/2/3',
    endDate: '2023/2/3',
    timeFrame: '14:30～15:00',
    description: '節分の日',
  },
]

export const Default = {
  args: {
    scheduleList: scheduleList,
    isSummary: false,
  },
}
