import { map } from 'lodash-es'
import { useState } from 'react'
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
  INLINE_SIZE,
  MARGIN,
} from '@/const/size'
import { useIsomorphicEffect } from '@/hooks/useIsomorphicEffect'
import { useMatchMedia } from '@/hooks/useMatchMedia'
import { Button } from '@/molecules/Button'

type NavigationItem = {
  path: string
  name: string
  isExternal: boolean
}

export type GlobalNavigationProps = {
  /** styled-components が wrap して style を適用するために存在する（利用側で明示的に指定する必要はない） */
  className?: string
  /** path, name, isExternal の配列を受け取る */
  navigationList: NavigationItem[]
  /** path, isExternal を利用側に渡す。実行したい関数を受け取る */
  handleLinkEvent: (path: string, isExternal: boolean) => void
  /** 現在の path (e.g. /about/) を受け取る。Library 側では URL に責任を持たない為 */
  currentPath: string
}

export const GlobalNavigation = ({
  className,
  navigationList,
  handleLinkEvent,
  currentPath,
}: GlobalNavigationProps) => {
  const [isOpenNavigation, setIsOpenNavigation] = useState(true)
  const { isTablet } = useMatchMedia()
  const isomorphicEffect = useIsomorphicEffect()

  // NOTE: 画面がちらつくため、isTablet が変更されるまで画面の更新を待つ
  isomorphicEffect(() => {
    setIsOpenNavigation(!isTablet)
  }, [isTablet])

  return (
    <StyledGlobalNavigationWrapper
      className={className}
      $isOpen={isOpenNavigation}
    >
      <StyledGlobalNavigation $isOpen={isOpenNavigation}>
        {map(navigationList, (navigationItem, index) => {
          return (
            <StyledButton
              key={index}
              anchorCallback={() => {
                handleLinkEvent(navigationItem.path, navigationItem.isExternal)
                isTablet && setIsOpenNavigation(false)
              }}
              text={navigationItem.name}
              buttonSize="M"
              buttonColor={
                navigationItem.isExternal
                  ? 'EXTERNAL'
                  : navigationItem.path === currentPath
                  ? 'DEFAULT_CURRENT'
                  : 'DEFAULT'
              }
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
          buttonCallback={() => setIsOpenNavigation(!isOpenNavigation)}
          buttonSize="M"
          buttonColor="DEFAULT"
          iconKind={isOpenNavigation ? 'MENU_OPEN' : 'MENU'}
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

    background: none;
    pointer-events: none;

    ${({ $isOpen }) =>
      $isOpen &&
      `
        background: ${BACKGROUND_COLOR.WHITE};
        pointer-events: auto;
      `}
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

    & > div {
      ${MEDIA_QUERY.OVER_PC} {
        font-size: ${INLINE_SIZE.L};
      }
    }
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
