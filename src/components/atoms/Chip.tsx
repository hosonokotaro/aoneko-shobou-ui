import * as Styles from '@/atoms/Chip.css'
import { ChipBackgroundColor } from '@/const/color'

export type ChipProps = {
  /** 利用したい状態を名前で受け取る */
  status: ChipBackgroundColor
  text: string
}

export const Chip = ({ status, text }: ChipProps) => {
  return (
    <span className={Styles.chip} data-background-color={status}>
      {text}
    </span>
  )
}
