import { map } from 'lodash-es'
import { Fragment } from 'react'
import styled from 'styled-components'

import { BORDER_COLOR } from '@/const/color'
import { MEDIA_QUERY } from '@/const/mediaQuery'
import { BLOCK_WIDTH, FONT_WEIGHT, SPACE, TABLE_TWO_COLUMN } from '@/const/size'

type CommonItem = {
  title: string
  description: string
}

export type CommonListProps = {
  className?: string
  /** title, description の配列を受け取る */
  commonList: CommonItem[]
}

export const CommonList = ({ className, commonList }: CommonListProps) => {
  return (
    <StyledCommonList className={className}>
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
    margin-top: ${SPACE.NONE};
  }
`

const StyledTitle = styled.dt`
  width: ${TABLE_TWO_COLUMN.WIDTH_EVEN};
  margin-top: ${SPACE.M};
  padding: ${`${TABLE_TWO_COLUMN.PADDING_TOP_BOTTOM} ${TABLE_TWO_COLUMN.PADDING_LEFT_RIGHT}`};
  padding-left: 0;
  font-weight: ${FONT_WEIGHT.BOLD};

  ${MEDIA_QUERY.MOBILE} {
    width: ${BLOCK_WIDTH.FULL};
    margin-top: ${SPACE.M};
  }
`

const StyledDescription = styled.dd`
  width: ${TABLE_TWO_COLUMN.WIDTH_ODD};
  margin-top: ${SPACE.M};
  padding: ${`${TABLE_TWO_COLUMN.PADDING_TOP_BOTTOM} ${TABLE_TWO_COLUMN.PADDING_LEFT_RIGHT}`};
  padding-right: 0;
  border-left: 2px solid ${BORDER_COLOR.LIGHT_GRAY};

  ${MEDIA_QUERY.MOBILE} {
    width: ${BLOCK_WIDTH.FULL};
    margin-top: ${SPACE.XS};
  }
`
