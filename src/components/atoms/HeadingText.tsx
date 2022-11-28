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
      {kind === HEADING_KIND.PAGE_TITLE && (
        <StyledPageTitle>{text}</StyledPageTitle>
      )}
      {kind === HEADING_KIND.SECTION_TITLE && (
        <StyledSectionTitle>{text}</StyledSectionTitle>
      )}
      {kind === HEADING_KIND.SUBTITLE && (
        <StyledSubTitle>{text}</StyledSubTitle>
      )}
    </>
  )
}

export default HeadingText

const StyledPageTitle = styled.h1`
  font-size: ${FONT_SIZE.XL};
  color: ${COLOR.TITLE};
`

const StyledSectionTitle = styled.h2`
  padding-left: 8px;
  border-left: 2px solid ${COLOR.TITLE};
  font-size: ${FONT_SIZE.L};
  color: ${COLOR.TITLE};
`

const StyledSubTitle = styled.h3`
  font-size: ${FONT_SIZE.M};
  color: ${COLOR.TITLE};
`
