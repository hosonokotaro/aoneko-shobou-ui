import styled from 'styled-components'

import { BORDER_COLOR } from '@/const/color'

export type ParagraphTextProps = {
  className?: string
  text: string
}

export const ParagraphText = ({ className, text }: ParagraphTextProps) => {
  return <StyledParagraphText className={className}>{text}</StyledParagraphText>
}

const StyledParagraphText = styled.p`
  padding: 12px;
  border-left: 2px solid ${BORDER_COLOR.LIGHT_GRAY};
`
