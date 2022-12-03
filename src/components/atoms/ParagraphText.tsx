import styled from 'styled-components'

import { BORDER_COLOR } from '@/const/color'

type Props = {
  text: string
}

const ParagraphText = ({ text }: Props) => {
  return <StyledParagraphText>{text}</StyledParagraphText>
}

export default ParagraphText

const StyledParagraphText = styled.p`
  padding: 12px;
  border-left: 2px solid ${BORDER_COLOR.LIGHT_GRAY};
`
