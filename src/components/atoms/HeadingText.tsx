import styled from 'styled-components'

import { BORDER_COLOR, FONT_COLOR } from '@/const/color'
import { FONT_WEIGHT, INLINE_SIZE } from '@/const/size'

export const HEADING_KIND = {
  PAGE_TITLE: 'PAGE_TITLE',
  SECTION_TITLE: 'SECTION_TITLE',
  SUBTITLE: 'SUBTITLE',
} as const

type HeadingKind = typeof HEADING_KIND[keyof typeof HEADING_KIND]

type HeadingTextProps = {
  text: string
  kind: HeadingKind
}

export const HeadingText = ({ text, kind }: HeadingTextProps) => {
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

const StyledPageTitle = styled.h1`
  font-size: ${INLINE_SIZE.XXL};
  font-weight: ${FONT_WEIGHT.NORMAL};
  color: ${FONT_COLOR.TITLE};
`

const StyledSectionTitle = styled.h2`
  padding-left: 8px;
  border-left: 2px solid ${BORDER_COLOR.TITLE};
  font-size: ${INLINE_SIZE.XL};
  font-weight: ${FONT_WEIGHT.NORMAL};
  color: ${FONT_COLOR.TITLE};
`

const StyledSubTitle = styled.h3`
  font-size: ${INLINE_SIZE.L};
  font-weight: ${FONT_WEIGHT.NORMAL};
  color: ${FONT_COLOR.TITLE};
`
