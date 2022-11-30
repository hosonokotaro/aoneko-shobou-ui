import { map } from 'lodash-es'
import styled from 'styled-components'

import {
  BORDER_RADIUS,
  BUTTON_BACKGROUND_COLOR,
  FONT_COLOR,
} from '@/const/style'
import Button from '@/molecules/Button'

export type NavigationItem = {
  path: string
  name: string
  isExternal: boolean
}

type Props = {
  navigationList: NavigationItem[]
  handleClick: (path: string, isExternal: boolean) => void
}

const GlobalNavigation = ({ navigationList, handleClick }: Props) => {
  return (
    <StyledGlobalNavigation>
      {map(navigationList, (navigationItem, index) => {
        return (
          <StyledButton
            key={index}
            text={navigationItem.name}
            buttonColor="DEFAULT"
            isSeeMore={false}
            isBorderRadius={false}
            onClick={() =>
              handleClick(navigationItem.path, navigationItem.isExternal)
            }
          />
        )
      })}
    </StyledGlobalNavigation>
  )
}

export default GlobalNavigation

// isClose: true,
// isPC: false

const StyledButton = styled(Button)`
  justify-content: center;
  flex-grow: 1;
`

const StyledGlobalNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  border-radius: ${BORDER_RADIUS.M};
  background: ${BUTTON_BACKGROUND_COLOR.DEFAULT};

  /* TODO: Media query を設定する */
  /* @media screen and (max-width: 768px) {
    background: #f66;
  } */

  & > ${StyledButton} {
    border-left: 1px solid ${FONT_COLOR.WHITE};
  }
`
