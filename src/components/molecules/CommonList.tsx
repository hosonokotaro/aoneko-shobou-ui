import { map } from 'lodash-es'
import { Fragment } from 'react'

import * as Styles from '@/molecules/CommonList.css'

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
    <dl className={Styles.commonList}>
      {map(commonList, (commonItem, index) => {
        return (
          <Fragment key={index}>
            <dt className={Styles.title}>{commonItem.title}</dt>
            <dd className={Styles.description}>{commonItem.description}</dd>
          </Fragment>
        )
      })}
    </dl>
  )
}
