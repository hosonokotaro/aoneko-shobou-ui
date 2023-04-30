import styled from 'styled-components'

import {
  CHIP_BACKGROUND_COLOR,
  ChipBackgroundColor,
  FONT_COLOR,
} from '@/const/color'
import { BORDER_RADIUS } from '@/const/size'

export type ChipProps = {
  className?: string
  /** 利用したい状態を名前で受け取る */
  status: ChipBackgroundColor
  text: string
}

export const Chip = ({ className, status, text }: ChipProps) => {
  return (
    <StyledChip className={className} $status={status}>
      {text}
    </StyledChip>
  )
}

const StyledChip = styled.span<{ $status: ChipBackgroundColor }>`
  display: inline-block;
  padding: 2px 8px;
  border-radius: ${BORDER_RADIUS.S};
  background: ${({ $status }) => CHIP_BACKGROUND_COLOR[$status]};
  color: ${FONT_COLOR.WHITE};
`
