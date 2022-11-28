import styled from 'styled-components'

import { COLOR, FONT_SIZE, FONT_WEIGHT } from '@/const/style'

export const HEADING_KIND = {
  PAGE_TITLE: 'PAGE_TITLE',
  SECTION_TITLE: 'SECTION_TITLE',
  SUBTITLE: 'SUBTITLE',
} as const

type HeadingKind = typeof HEADING_KIND[keyof typeof HEADING_KIND]

type Props = {
  text: string
  kind: HeadingKind
}

const HeadingText = ({ text, kind }: Props) => {
  return (
    <>
      {kind === HEADING_KIND.PAGE_TITLE && <h1>{text}</h1>}
      {kind === HEADING_KIND.SECTION_TITLE && (
        <StyledHeadingTextH2>{text}</StyledHeadingTextH2>
      )}
      {kind === HEADING_KIND.SUBTITLE && <h3>{text}</h3>}
    </>
  )
}

export default HeadingText

const StyledHeadingTextH2 = styled.h2`
  padding-left: 8px;
  border-left: 2px solid ${COLOR.TITLE};
  font-size: ${FONT_SIZE.XL};
  color: ${COLOR.TITLE};
  font-weight: ${FONT_WEIGHT.NORMAL};
`
