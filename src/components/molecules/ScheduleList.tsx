import 'dayjs/locale/ja'

import dayjs from 'dayjs'
import { map } from 'lodash-es'
import { useCallback } from 'react'

import * as Styles from '@/molecules/ScheduleList.css'

// import { anchorStyle } from '@/atoms/Anchor'

dayjs().format()
dayjs.locale('ja')

type ScheduleItem = {
  startDate: string
  endDate: string
  timeFrame: string
  description: string
}

export type ScheduleListProps = {
  className?: string
  /** 予定の開始日、終了日、時間帯、内容を記載した配列を受け取る */
  scheduleList: ScheduleItem[]
  /** 要約して表示する */
  isSummary?: boolean
}

export const ScheduleList = ({
  scheduleList,
  isSummary = false,
}: ScheduleListProps) => {
  const dateFormat = useCallback((dateText: string) => {
    return dayjs(dateText).format('YYYY年M月D日(ddd)')
  }, [])

  return (
    <div className={Styles.scheduleList} data-summary={Number(isSummary)}>
      {!scheduleList.length && <div>準備中です</div>}
      {map(scheduleList, (beforeScheduleItem, index) => {
        return (
          <div key={index} className={Styles.scheduleItem}>
            <div className={Styles.period}>
              {dateFormat(beforeScheduleItem.startDate)}
              {beforeScheduleItem.startDate !== beforeScheduleItem.endDate &&
                `〜${dateFormat(beforeScheduleItem.endDate)}`}
            </div>
            <div className={Styles.description}>
              {beforeScheduleItem.timeFrame && (
                <div className={Styles.timeframe}>
                  {beforeScheduleItem.timeFrame}
                </div>
              )}
              <div
                className={Styles.text}
                dangerouslySetInnerHTML={{
                  __html: beforeScheduleItem.description,
                }}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}
