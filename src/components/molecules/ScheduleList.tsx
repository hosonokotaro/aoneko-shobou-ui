import 'dayjs/locale/ja'

import dayjs from 'dayjs'
import { map } from 'lodash-es'
import { Fragment, useCallback, useMemo } from 'react'
import styled from 'styled-components'

import { BORDER_COLOR } from '@/const/color'
import { MEDIA_QUERY } from '@/const/mediaQuery'
import { BLOCK_WIDTH, FONT_WEIGHT, MARGIN } from '@/const/size'

dayjs().format()
dayjs.locale('ja')

type ScheduleItem = {
  startDate: string
  endDate: string
  timeFrame: string
  description: string
}

export type ScheduleListProps = {
  /** 予定の開始日、終了日、時間帯、内容を記載した配列を受け取る */
  scheduleList: ScheduleItem[]
  /** 現在の日時 (e.g. 2022/12/1) を受け取る。Library 側では日時の取得に責任を持たない為 */
  currentTime: string
}

export const ScheduleList = ({
  scheduleList,
  currentTime,
}: ScheduleListProps) => {
  const dateFormat = useCallback((dateText: string) => {
    return dayjs(dateText).format('YYYY年M月D日(ddd)')
  }, [])

  const beforeScheduleList = useMemo(() => {
    const currentTimeDayJs = dayjs(currentTime)
    let tempBeforeScheduleList: ScheduleItem[] = []

    map(scheduleList, (scheduleItem) => {
      if (currentTimeDayJs.isAfter(dayjs(scheduleItem.endDate), 'day')) return

      const startDate = dateFormat(scheduleItem.startDate)
      const endDate = dateFormat(scheduleItem.endDate)

      const formattedScheduleItem: ScheduleItem = {
        ...scheduleItem,
        startDate,
        endDate,
      }

      tempBeforeScheduleList = [
        ...tempBeforeScheduleList,
        formattedScheduleItem,
      ]
    })

    return tempBeforeScheduleList
  }, [currentTime, dateFormat, scheduleList])

  return (
    <StyledScheduleList>
      {!beforeScheduleList.length && <div>準備中です</div>}
      {map(beforeScheduleList, (beforeScheduleItem, index) => {
        return (
          <Fragment key={index}>
            <StyledPeriod>
              {beforeScheduleItem.startDate}
              {beforeScheduleItem.startDate !== beforeScheduleItem.endDate &&
                `〜${beforeScheduleItem.endDate}`}
            </StyledPeriod>
            <StyledDescription>
              {beforeScheduleItem.timeFrame && (
                <StyledTimeFrame>
                  {beforeScheduleItem.timeFrame}
                </StyledTimeFrame>
              )}
              <span>{beforeScheduleItem.description}</span>
            </StyledDescription>
          </Fragment>
        )
      })}
    </StyledScheduleList>
  )
}

const StyledScheduleList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  & > :nth-of-type(-n + 2) {
    margin-top: ${MARGIN.NONE};
  }

  ${MEDIA_QUERY.MOBILE} {
    & > :nth-of-type(2) {
      margin-top: ${MARGIN.XS};
    }
  }
`

// NOTE: ここでしか利用しないのでハードコードで対応する
const SCHEDULE_ITEM = {
  WIDTH_ODD: '68%',
  WIDTH_EVEN: '32%',
  PADDING_TOP_BOTTOM: '4px',
  PADDING_LEFT_RIGHT: '12px',
} as const

const StyledPeriod = styled.div`
  width: ${SCHEDULE_ITEM.WIDTH_EVEN};
  margin-top: ${MARGIN.M};
  padding-top: ${SCHEDULE_ITEM.PADDING_TOP_BOTTOM};
  padding-bottom: ${SCHEDULE_ITEM.PADDING_TOP_BOTTOM};
  padding-right: ${SCHEDULE_ITEM.PADDING_LEFT_RIGHT};
  font-weight: ${FONT_WEIGHT.BOLD};

  ${MEDIA_QUERY.MOBILE} {
    width: ${BLOCK_WIDTH.FULL};
    margin-top: ${MARGIN.M};
  }
`

const StyledDescription = styled.div`
  width: ${SCHEDULE_ITEM.WIDTH_ODD};
  margin-top: ${MARGIN.M};
  padding-top: ${SCHEDULE_ITEM.PADDING_TOP_BOTTOM};
  padding-bottom: ${SCHEDULE_ITEM.PADDING_TOP_BOTTOM};
  padding-left: ${SCHEDULE_ITEM.PADDING_LEFT_RIGHT};
  border-left: 2px solid ${BORDER_COLOR.LIGHT_GRAY};

  ${MEDIA_QUERY.MOBILE} {
    width: ${BLOCK_WIDTH.FULL};
    margin-top: ${MARGIN.XS};
  }
`

const StyledTimeFrame = styled.span`
  margin-right: ${MARGIN.M};
  font-weight: ${FONT_WEIGHT.BOLD};
`
