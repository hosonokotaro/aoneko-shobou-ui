import styled from 'styled-components'

import { FONT_COLOR, FontColor, INLINE_SIZE } from '@/const/style'

type Props = {
  text: string
  color: FontColor
}

const AnnotationText = ({ text, color }: Props) => {
  return <StyledAnnotationText $color={color}>{text}</StyledAnnotationText>
}

export default AnnotationText

const StyledAnnotationText = styled.span<{ $color: FontColor }>`
  font-size: ${INLINE_SIZE.M};
  color: ${({ $color }) => FONT_COLOR[$color]};
`
