import styled from 'styled-components'

import { COLOR } from '../const/style'

type Props = {
  text: string
}

const ParagraphText = ({ text }: Props) => {
  return <StyledParagraphText>{text}</StyledParagraphText>
}

export default ParagraphText

const StyledParagraphText = styled.p`
  padding: 12px;
  border-left: 2px solid ${COLOR.LIGHT_GRAY};
`
