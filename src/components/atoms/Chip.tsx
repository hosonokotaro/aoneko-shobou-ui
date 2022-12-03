import styled from 'styled-components'

import { CHIP_COLOR, ChipColor, FONT_COLOR } from '@/const/color'
import { BORDER_RADIUS } from '@/const/size'

type Props = {
  status: ChipColor
  text: string
}

const Chip = ({ status, text }: Props) => {
  return <StyledChip $status={status}>{text}</StyledChip>
}

export default Chip

const StyledChip = styled.span<{ $status: ChipColor }>`
  display: inline-block;
  padding: 2px 8px;
  border-radius: ${BORDER_RADIUS.S};
  background: ${({ $status }) => CHIP_COLOR[$status]};
  color: ${FONT_COLOR.WHITE};
`
