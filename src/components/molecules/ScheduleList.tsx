import 'dayjs/locale/ja'

import dayjs from 'dayjs'
import { map } from 'lodash-es'
import { useCallback } from 'react'
import styled from 'styled-components'

import { anchorStyle } from '@/atoms/Anchor'
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
    <div>
      {!scheduleList.length && <div>準備中です</div>}
      {map(scheduleList, (beforeScheduleItem, index) => {
        return (
          <StyledScheduleItem key={index} isSummary={isSummary}>
            <StyledPeriod isSummary={isSummary}>
              {dateFormat(beforeScheduleItem.startDate)}
              {beforeScheduleItem.startDate !== beforeScheduleItem.endDate &&
                `〜${dateFormat(beforeScheduleItem.endDate)}`}
            </StyledPeriod>
            <StyledDescription isSummary={isSummary}>
              {beforeScheduleItem.timeFrame && (
                <StyledTimeFrame>
                  {beforeScheduleItem.timeFrame}
                </StyledTimeFrame>
              )}
              <StyledText
                dangerouslySetInnerHTML={{
                  __html: beforeScheduleItem.description,
                }}
              />
            </StyledDescription>
          </StyledScheduleItem>
        )
      })}
    </div>
  )
}

const StyledScheduleItem = styled.div<{ isSummary: boolean }>`
  display: flex;
  justify-content: space-between;

  &:not(:first-of-type) {
    margin-top: ${MARGIN.M};
  }

  ${MEDIA_QUERY.MOBILE} {
    flex-direction: column;
  }

  ${({ isSummary }) => isSummary && `flex-direction: column;`}
`

// NOTE: ここでしか利用しないのでハードコードで対応する
const SCHEDULE_ITEM = {
  WIDTH_ODD: '68%',
  WIDTH_EVEN: '32%',
  PADDING_TOP_BOTTOM: '4px',
  PADDING_LEFT_RIGHT: '12px',
} as const

const StyledPeriod = styled.div<{ isSummary: boolean }>`
  width: ${SCHEDULE_ITEM.WIDTH_EVEN};
  padding-top: ${SCHEDULE_ITEM.PADDING_TOP_BOTTOM};
  padding-bottom: ${SCHEDULE_ITEM.PADDING_TOP_BOTTOM};
  padding-right: ${SCHEDULE_ITEM.PADDING_LEFT_RIGHT};
  font-weight: ${FONT_WEIGHT.BOLD};

  ${MEDIA_QUERY.MOBILE} {
    width: ${BLOCK_WIDTH.FULL};
  }

  ${({ isSummary }) =>
    isSummary &&
    `
      width: ${BLOCK_WIDTH.FULL};
    `}
`

const StyledDescription = styled.div<{ isSummary: boolean }>`
  width: ${SCHEDULE_ITEM.WIDTH_ODD};
  padding-top: ${SCHEDULE_ITEM.PADDING_TOP_BOTTOM};
  padding-bottom: ${SCHEDULE_ITEM.PADDING_TOP_BOTTOM};
  padding-left: ${SCHEDULE_ITEM.PADDING_LEFT_RIGHT};
  border-left: 2px solid ${BORDER_COLOR.LIGHT_GRAY};

  ${MEDIA_QUERY.MOBILE} {
    width: ${BLOCK_WIDTH.FULL};
    margin-top: ${MARGIN.XS};
  }

  ${({ isSummary }) =>
    isSummary &&
    `
      display: -webkit-box;
      width: ${BLOCK_WIDTH.FULL};
      margin-top: ${MARGIN.XS};
      overflow: hidden;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    `}
`

const StyledTimeFrame = styled.div`
  display: inline;
  margin-right: ${MARGIN.M};
  font-weight: ${FONT_WEIGHT.BOLD};
`

const StyledText = styled.div`
  display: inline;

  /* NOTE: 外部から呼んだ html を使うため */
  > a {
    ${anchorStyle}
  }
`
