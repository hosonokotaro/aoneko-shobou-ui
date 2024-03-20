import { map } from 'lodash-es'
import { SetStateAction } from 'react'
import { Dispatch, MouseEvent } from 'react'

import { useIsomorphicEffect } from '@/hooks/useIsomorphicEffect'
import { useMatchMedia } from '@/hooks/useMatchMedia'
import { Button } from '@/molecules/Button'
import * as Styles from '@/molecules/GlobalNavigation.css'

type NavigationItem = {
  path: string
  name: string
  isExternal: boolean
}

export type GlobalNavigationProps = {
  /** path, name, isExternal の配列を受け取る */
  navigationList: NavigationItem[]
  /** event, path, isExternal を利用側に渡す。実行したい関数を受け取る */
  handleLinkEvent: (
    event: MouseEvent<HTMLAnchorElement>,
    path: string,
    isExternal: boolean
  ) => void
  /** 現在の path (e.g. /about/) を受け取る。Library 側では URL に責任を持たない為 */
  currentPath: string
  /** Tablet size 以下の時のナビゲーションの開閉状態を受け取る */
  isOpenNavigation: boolean
  /** Tablet size 以下の時のナビゲーションの開閉状態を更新する関数を受け取る */
  handleSetIsOpenNavigation: Dispatch<SetStateAction<boolean>>
}

export const GlobalNavigation = ({
  navigationList,
  handleLinkEvent,
  currentPath,
  isOpenNavigation = true,
  handleSetIsOpenNavigation,
}: GlobalNavigationProps) => {
  const { isTablet } = useMatchMedia()
  const isomorphicEffect = useIsomorphicEffect()

  // NOTE: 画面がちらつくため、isTablet が変更されるまで画面の更新を待つ
  isomorphicEffect(() => {
    handleSetIsOpenNavigation(!isTablet)
  }, [isTablet])

  return (
    <div
      className={Styles.globalNavigationWrapper}
      data-open-navigation={Number(isOpenNavigation)}
    >
      <nav className={Styles.globalNavigation}>
        {map(navigationList, (navigationItem, index) => {
          return (
            <Button
              key={index}
              dataStyleProps={{ 'data-parent-component': 'GlobalNavigation' }}
              onClick={(event: MouseEvent<HTMLAnchorElement>) => {
                handleLinkEvent(
                  event,
                  navigationItem.path,
                  navigationItem.isExternal
                )
                isTablet && handleSetIsOpenNavigation(false)
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
              target={navigationItem.isExternal ? '_blank' : '_self'}
            />
          )
        })}
      </nav>
      <div className={Styles.toggleButtonWrapper}>
        <Button
          onClick={() => handleSetIsOpenNavigation(!isOpenNavigation)}
          buttonSize="M"
          buttonColor="DEFAULT"
          iconKind={isOpenNavigation ? 'MENU_OPEN' : 'MENU'}
        />
      </div>
    </div>
  )
}
