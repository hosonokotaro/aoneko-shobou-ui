import dayjs from 'dayjs'
import { map } from 'lodash-es'
import { Fragment } from 'react'
import styled from 'styled-components'

import { BORDER_COLOR } from '../const/color'
import { MEDIA_QUERY } from '../const/mediaQuery'
import { BLOCK_WIDTH, FONT_WEIGHT, MARGIN } from '../const/size'

dayjs().format()

export type ScheduleItem = {
  period: string
  timeFrame: string
  description: string
  endDate: string
}

type Props = {
  scheduleList: ScheduleItem[]
  currentTime: string
}

const ScheduleList = ({ scheduleList, currentTime }: Props) => {
  const currentTimeDayJs = dayjs(currentTime)

  if (!scheduleList.length) return null

  return (
    <StyledScheduleList>
      {map(scheduleList, (scheduleItem, index) => {
        return (
          <Fragment key={index}>
            {!currentTimeDayJs.isAfter(dayjs(scheduleItem.endDate), 'day') && (
              <>
                <StyledPeriod>{scheduleItem.period}</StyledPeriod>
                <StyledDescription>
                  {scheduleItem.description}
                </StyledDescription>
              </>
            )}
          </Fragment>
        )
      })}
    </StyledScheduleList>
  )
}

export default ScheduleList

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
