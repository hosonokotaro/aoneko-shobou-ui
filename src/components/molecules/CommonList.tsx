import { map } from 'lodash-es'
import { Fragment } from 'react'
import styled from 'styled-components'

import { BORDER_COLOR } from '@/const/color'
import { MEDIA_QUERY } from '@/const/mediaQuery'
import { BLOCK_WIDTH, FONT_WEIGHT, MARGIN } from '@/const/size'

type CommonItem = {
  title: string
  description: string
}

export type CommonListProps = {
  /** title, description の配列を受け取る */
  commonList: CommonItem[]
}

export const CommonList = ({ commonList }: CommonListProps) => {
  return (
    <StyledCommonList>
      {map(commonList, (commonItem, index) => {
        return (
          <Fragment key={index}>
            <StyledTitle>{commonItem.title}</StyledTitle>
            <StyledDescription>{commonItem.description}</StyledDescription>
          </Fragment>
        )
      })}
    </StyledCommonList>
  )
}

const StyledCommonList = styled.dl`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  & > :nth-of-type(-n + 1) {
    margin-top: ${MARGIN.NONE};
  }
`

// NOTE: ここでしか利用しないのでハードコードで対応する
const SCHEDULE_ITEM = {
  WIDTH_ODD: '68%',
  WIDTH_EVEN: '32%',
  PADDING_TOP_BOTTOM: '4px',
  PADDING_LEFT_RIGHT: '12px',
} as const

const StyledTitle = styled.dt`
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

const StyledDescription = styled.dd`
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
