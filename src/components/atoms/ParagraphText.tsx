import styled from 'styled-components'

import { BASE_COLOR } from '@/const/style'

type Props = {
  text: string
}

const ParagraphText = ({ text }: Props) => {
  return <StyledParagraphText>{text}</StyledParagraphText>
}

export default ParagraphText

// NOTE: ここでしか利用しないのでハードコードで対応する
const PARAGRAPH_TEXT_COLOR = {
  BORDER_LEFT: BASE_COLOR.LIGHT_GRAY,
} as const

const StyledParagraphText = styled.p`
  padding: 12px;
  border-left: 2px solid ${PARAGRAPH_TEXT_COLOR.BORDER_LEFT};
`
