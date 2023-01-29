import styled from 'styled-components'

import {
  CHIP_BACKGROUND_COLOR,
  ChipBackgroundColor,
  FONT_COLOR,
} from '@/const/color'
import { BORDER_RADIUS } from '@/const/size'

export type ChipProps = {
  /** 利用したい状態を名前で指定する */
  status: ChipBackgroundColor
  text: string
}

export const Chip = ({ status, text }: ChipProps) => {
  return <StyledChip $status={status}>{text}</StyledChip>
}

const StyledChip = styled.span<{ $status: ChipBackgroundColor }>`
  display: inline-block;
  padding: 2px 8px;
  border-radius: ${BORDER_RADIUS.S};
  background: ${({ $status }) => CHIP_BACKGROUND_COLOR[$status]};
  color: ${FONT_COLOR.WHITE};
`
