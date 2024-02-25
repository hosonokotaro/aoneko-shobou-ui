import { assignInlineVars } from '@vanilla-extract/dynamic'

import * as Styles from '@/atoms/Chip.css'
import { CHIP_BACKGROUND_COLOR, ChipBackgroundColor } from '@/const/color'

export type ChipProps = {
  /** 利用したい状態を名前で受け取る */
  status: ChipBackgroundColor
  text: string
}

export const Chip = ({ status, text }: ChipProps) => {
  return (
    <span
      className={Styles.chip}
      style={{
        ...assignInlineVars({
          [Styles.backgroundColor]: CHIP_BACKGROUND_COLOR[status],
        }),
      }}
    >
      {text}
    </span>
  )
}
