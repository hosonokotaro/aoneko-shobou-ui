import styled from 'styled-components'

import { FONT_COLOR, FontColor } from '@/const/color'
import { INLINE_SIZE } from '@/const/size'

export type AnnotationTextProps = {
  className?: string
  text: string
  color: FontColor
}

export const AnnotationText = ({
  className,
  text,
  color,
}: AnnotationTextProps) => {
  return (
    <StyledAnnotationText className={className} $color={color}>
      {text}
    </StyledAnnotationText>
  )
}

const StyledAnnotationText = styled.span<{ $color: FontColor }>`
  font-size: ${INLINE_SIZE.M};
  color: ${({ $color }) => FONT_COLOR[$color]};
`
