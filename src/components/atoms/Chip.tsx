import * as Styles from '@/atoms/Chip.css'
import { Colors } from '~/styles/theme/colors'

export type ChipProps = {
  status: keyof Colors['chip']
  text: string
}

export const Chip = ({ status, text }: ChipProps) => {
  return (
    <span className={Styles.chip} data-background-color={status}>
      {text}
    </span>
  )
}
