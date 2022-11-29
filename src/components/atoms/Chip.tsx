import styled from 'styled-components'

import { BORDER_RADIUS, CHIP_COLOR, ChipColor, FONT_COLOR } from '@/const/style'

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
  border-radius: ${BORDER_RADIUS};
  background-color: ${({ $status }) => CHIP_COLOR[$status]};
  color: ${FONT_COLOR.WHITE};
`
