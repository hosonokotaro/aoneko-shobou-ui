import styled from 'styled-components'

import { FONT_COLOR, FontColor } from '@/const/color'
import { INLINE_SIZE } from '@/const/size'

type AnnotationTextProps = {
  text: string
  color: FontColor
}

const AnnotationText = ({ text, color }: AnnotationTextProps) => {
  return <StyledAnnotationText $color={color}>{text}</StyledAnnotationText>
}

export default AnnotationText

const StyledAnnotationText = styled.span<{ $color: FontColor }>`
  font-size: ${INLINE_SIZE.M};
  color: ${({ $color }) => FONT_COLOR[$color]};
`
