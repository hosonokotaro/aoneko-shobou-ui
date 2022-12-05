import { map } from 'lodash-es'
import { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components'

import {
  BACKGROUND_COLOR,
  BORDER_COLOR,
  BUTTON_BACKGROUND_COLOR,
} from '@/const/color'
import { MEDIA_QUERY } from '@/const/mediaQuery'
import {
  BLOCK_WIDTH,
  BORDER_RADIUS,
  ICON_BUTTON_SIZE,
  MARGIN,
} from '@/const/size'
import useMatchMedia from '@/hooks/useMatchMedia'
import Button from '@/molecules/Button'

export type NavigationItem = {
  path: string
  name: string
  isExternal: boolean
}

type Props = {
  navigationList: NavigationItem[]
  handleLinkEvent: (path: string, isExternal: boolean) => void
}

const GlobalNavigation = ({ navigationList, handleLinkEvent }: Props) => {
  const { isTablet } = useMatchMedia()
  const checkboxRef = useRef<HTMLInputElement>(null)

  // NOTE: 画面がちらつくため、isTablet が変更されるまで画面の更新を待つ
  useLayoutEffect(() => {
    if (checkboxRef.current === null) return
    checkboxRef.current.checked = !isTablet
  }, [isTablet])

  return (
    <StyledGlobalNavigationWrapper>
      <StyledToggleButton
        ref={checkboxRef}
        type="checkbox"
        defaultChecked={!isTablet}
      />
      <StyledGlobalNavigation>
        {map(navigationList, (navigationItem, index) => {
          return (
            <StyledButton
              key={index}
              text={navigationItem.name}
              buttonColor={navigationItem.isExternal ? 'EXTERNAL' : 'DEFAULT'}
              isBorderRadius={isTablet}
              callback={() =>
                handleLinkEvent(navigationItem.path, navigationItem.isExternal)
              }
            />
          )
        })}
      </StyledGlobalNavigation>
    </StyledGlobalNavigationWrapper>
  )
}

export default GlobalNavigation

const StyledButton = styled(Button)`
  justify-content: center;
  flex-grow: 1;
  margin: ${MARGIN.NONE};

  ${MEDIA_QUERY.TABLET} {
    flex-grow: 0;
  }
`

// TODO: nav 要素になるか確認すること
const StyledGlobalNavigation = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  border-radius: ${BORDER_RADIUS.M};
  background: ${BUTTON_BACKGROUND_COLOR.DEFAULT};

  ${MEDIA_QUERY.TABLET} {
    position: absolute;
    bottom: 0;
    right: 0;
    flex-direction: column;
    align-items: flex-end;
    height: calc((${ICON_BUTTON_SIZE.HEIGHT} * 6) + (${MARGIN.S} * 6));
    margin-left: ${MARGIN.AUTO};
    margin-bottom: 80px;
    margin-right: ${MARGIN.XL};
    border-radius: ${BORDER_RADIUS.NONE};
    background: none;
  }

  & > ${StyledButton} {
    &:not(:nth-last-of-type(1)) {
      border-right: 1px solid ${BORDER_COLOR.WHITE};
    }

    ${MEDIA_QUERY.TABLET} {
      &:not(:nth-last-of-type(1)) {
        border-right: none;
      }
    }
  }
`

// HACK: input tag は子要素が許可されていないため
const ICON_SVG_STRING = {
  MENU_OPEN:
    'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="24px" width="24px" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M3 18h13v-2H3v2zm0-5h10v-2H3v2zm0-7v2h13V6H3zm18 9.59L17.42 12 21 8.41 19.59 7l-5 5 5 5L21 15.59z" fill="white" /></svg>',
  MENU_CLOSE:
    'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="24px" width="24px" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" fill="white" /></svg>',
}

const StyledToggleButton = styled.input`
  position: absolute;
  bottom: 0;
  right: 0;
  display: none;
  width: ${ICON_BUTTON_SIZE.WIDTH};
  height: ${ICON_BUTTON_SIZE.HEIGHT};
  margin-right: ${MARGIN.XL};
  margin-bottom: ${MARGIN.XL};
  border-radius: ${BORDER_RADIUS.S};
  background: url('${ICON_SVG_STRING.MENU_CLOSE}') center center no-repeat
    ${BUTTON_BACKGROUND_COLOR.DEFAULT};
  cursor: pointer;
  appearance: none;

  &:checked {
    background: url('${ICON_SVG_STRING.MENU_OPEN}') center center no-repeat
      ${BUTTON_BACKGROUND_COLOR.DEFAULT};
  }

  ${MEDIA_QUERY.TABLET} {
    display: block;
  }

  &:not(:checked) + ${StyledGlobalNavigation} {
    display: none;
  }
`

const StyledGlobalNavigationWrapper = styled.div`
  ${MEDIA_QUERY.TABLET} {
    position: fixed;
    top: 0;
    right: 0;
    width: ${BLOCK_WIDTH.HALF};

    /* NOTE: iOS Safari の address bar 対策のため */
    height: 100vh;
    height: 100dvh;

    &:has(${StyledToggleButton}:checked) {
      background: ${BACKGROUND_COLOR.WHITE};
    }
  }

  ${MEDIA_QUERY.MOBILE} {
    width: ${BLOCK_WIDTH.FULL};
  }
`
