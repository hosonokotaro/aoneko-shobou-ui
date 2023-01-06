import { map } from 'lodash-es'
import { useLayoutEffect, useState } from 'react'
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
import { useMatchMedia } from '@/hooks/useMatchMedia'
import { Button } from '@/molecules/Button'

type NavigationItem = {
  path: string
  name: string
  isExternal: boolean
}

export type GlobalNavigationProps = {
  navigationList: NavigationItem[]
  handleLinkEvent: (path: string, isExternal: boolean) => void
  currentPath: string
}

export const GlobalNavigation = ({
  navigationList,
  handleLinkEvent,
  currentPath,
}: GlobalNavigationProps) => {
  const [isOpenNavigation, setIsOpenNavigation] = useState(false)
  const { isTablet } = useMatchMedia()

  // NOTE: 画面がちらつくため、isTablet が変更されるまで画面の更新を待つ
  useLayoutEffect(() => {
    setIsOpenNavigation(!isTablet)
  }, [isTablet])

  return (
    <StyledGlobalNavigationWrapper $isOpen={isOpenNavigation}>
      <StyledGlobalNavigation $isOpen={isOpenNavigation}>
        {map(navigationList, (navigationItem, index) => {
          return (
            <StyledButton
              key={index}
              callback={() =>
                handleLinkEvent(navigationItem.path, navigationItem.isExternal)
              }
              text={navigationItem.name}
              buttonSize="M"
              buttonColor={
                navigationItem.isExternal
                  ? 'EXTERNAL'
                  : navigationItem.path === currentPath
                  ? 'DEFAULT_CURRENT'
                  : 'DEFAULT'
              }
              isBorderRadius={isTablet}
              // NOTE: SEO のため、全て a tag にする
              isAnchor={true}
              href={navigationItem.path}
              target={navigationItem.isExternal ? 'BLANK' : 'SELF'}
            />
          )
        })}
      </StyledGlobalNavigation>
      <StyledToggleButtonWrapper $isOpen={isOpenNavigation}>
        <Button
          callback={() => setIsOpenNavigation(!isOpenNavigation)}
          buttonSize="M"
          buttonColor="DEFAULT"
          iconKind={isOpenNavigation ? 'MENU_OPEN' : 'MENU'}
          isBorderRadius
        />
      </StyledToggleButtonWrapper>
    </StyledGlobalNavigationWrapper>
  )
}

const StyledGlobalNavigationWrapper = styled.div<{ $isOpen: boolean }>`
  overflow-y: auto;
  transition: background 0.25s ease;

  ${MEDIA_QUERY.TABLET} {
    position: fixed;
    top: 0;
    right: 0;
    width: ${BLOCK_WIDTH.HALF};

    /* NOTE: iOS Safari の address bar 対策のため */
    height: 100vh;
    height: 100dvh;

    background: ${({ $isOpen }) => ($isOpen ? BACKGROUND_COLOR.WHITE : 'none')};
  }

  ${MEDIA_QUERY.MOBILE} {
    width: ${BLOCK_WIDTH.FULL};
  }
`

const StyledButton = styled(Button)`
  justify-content: center;
  flex-grow: 1;
  margin: ${MARGIN.NONE};

  ${MEDIA_QUERY.TABLET} {
    flex-grow: 0;
  }

  /* HACK: 子要素が別のタグの為 */
  & > button,
  & > a {
    width: 100%;
  }
`

const StyledGlobalNavigation = styled.nav<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => (!$isOpen ? 'none' : 'flex')};
  justify-content: space-between;
  overflow: hidden;
  border-radius: ${BORDER_RADIUS.M};
  background: ${BUTTON_BACKGROUND_COLOR.DEFAULT};

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

  ${MEDIA_QUERY.TABLET} {
    flex-direction: column;
    align-items: flex-end;
    height: calc((${ICON_BUTTON_SIZE.M.HEIGHT} * 6) + (${MARGIN.L} * 5));
    margin-bottom: ${MARGIN.L};
    border-radius: ${BORDER_RADIUS.NONE};
    background: none;
  }
`

// NOTE: ここでしか利用しないのでハードコードで対応する
const MOBILE_NAVIGATION_HEIGHT = '336px'

const StyledToggleButtonWrapper = styled.div<{ $isOpen: boolean }>`
  display: none;

  ${MEDIA_QUERY.TABLET} {
    display: flex;
    justify-content: flex-end;

    margin-top: ${({ $isOpen }) => (!$isOpen ? MOBILE_NAVIGATION_HEIGHT : '0')};
  }
`
