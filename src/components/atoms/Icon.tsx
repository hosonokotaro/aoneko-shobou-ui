import styled from 'styled-components'

import Info from '@/atoms/IconSvg/SvgInfo'

export const ICON_NAME = {
  INFO: 'info',
} as const

type IconName = typeof ICON_NAME[keyof typeof ICON_NAME]

export const FILL_COLOR = {
  DEFAULT: 'default',
  LINK: 'link',
  ATTENTION: 'attention',
  ERROR: 'error',
} as const

type FillColor = typeof FILL_COLOR[keyof typeof FILL_COLOR]

type Props = {
  iconName: IconName
  fillColor: FillColor
}

const Icon = ({ iconName, fillColor }: Props) => {
  return (
    <StyledIcon>
      {iconName === ICON_NAME.INFO && <StyledInfo $fillColor={fillColor} />}
    </StyledIcon>
  )
}

export default Icon

const StyledIcon = styled.i`
  display: inline-block;
  line-height: 1;
`

/* NOTE: Property を追加する例として引数を残します */
export const StyledInfo = styled(Info)<{
  $fillColor: FillColor
}>`
  vertical-align: middle;

  ${({ $fillColor }) => {
    switch ($fillColor) {
      case FILL_COLOR.ATTENTION:
        return `fill: #a370d3;`
      default:
        return `fill: #000;`
    }
  }}
`
