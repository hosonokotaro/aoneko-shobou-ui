import styled from 'styled-components'

import { BASE_COLOR } from '@/const/style'

type Props = {
  text: string
}

const ParagraphText = ({ text }: Props) => {
  return <StyledParagraphText>{text}</StyledParagraphText>
}

export default ParagraphText

const StyledParagraphText = styled.p`
  padding: 12px;
  /* TODO: border の const 設定を作成する */
  border-left: 2px solid ${BASE_COLOR.LIGHT_GRAY};
`
