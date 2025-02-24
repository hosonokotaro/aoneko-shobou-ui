import { ComponentProps, MouseEventHandler } from 'react'

import { Anchor } from '@/atoms/Anchor'
import { Rotate } from '@/const/common'
import * as Styles from '@/molecules/Button.css'
import { Icon } from '@/molecules/Icon'

type ButtonSize = 's' | 'm' | 'l' | 'xl' | 'xxl'
type ButtonColor = 'DEFAULT' | 'EXTERNAL' | 'DEFAULT_CURRENT'

export type ButtonProps = {
  dataStyleProps?: Partial<Styles.DataStyleProps>
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
  text?: string
  buttonSize: ButtonSize
  buttonColor: ButtonColor
  iconKind?: ComponentProps<typeof Icon>['iconKind']
  iconRotate?: Rotate
  /** Button 要素ではなく Anchor 要素として表現する場合 */
  isAnchor?: boolean
  href?: string
  target?: ComponentProps<typeof Anchor>['target']
}

export const Button = ({
  dataStyleProps,
  onClick,
  text,
  buttonSize,
  buttonColor,
  iconKind,
  iconRotate,
  isAnchor,
  href,
  target,
}: ButtonProps) => {
  return (
    <div className={Styles.buttonWrapper} {...dataStyleProps}>
      {isAnchor && (
        <Anchor
          dataStyleProps={{
            'data-parent-component': 'Button',
            'data-background-color': buttonColor,
            'data-size': buttonSize,
            ...dataStyleProps,
          }}
          href={href}
          target={target}
          onClick={onClick}
        >
          {iconKind && (
            <span
              className={text ? Styles.iconWrapper : Styles.iconWrapperNoText}
            >
              <Icon
                dataIconProps={{
                  'data-rotate': iconRotate,
                  'data-fill-color': 'white',
                  'data-size':
                    buttonSize === 'xxl' ||
                    buttonSize === 'xl' ||
                    buttonSize === 'l'
                      ? 'xxl'
                      : buttonSize === 'm'
                      ? 'xl'
                      : 'l',
                }}
                iconKind={iconKind}
              />
            </span>
          )}
          {text && (
            <span className={Styles.text} data-button-size={buttonSize}>
              {text}
            </span>
          )}
        </Anchor>
      )}
      {!isAnchor && (
        <button
          className={Styles.button}
          data-background-color={buttonColor}
          data-size={buttonSize}
          onClick={onClick}
        >
          {iconKind && (
            <span
              className={text ? Styles.iconWrapper : Styles.iconWrapperNoText}
            >
              <Icon
                dataIconProps={{
                  'data-rotate': iconRotate,
                  'data-fill-color': 'white',
                  'data-size':
                    buttonSize === 'xxl' ||
                    buttonSize === 'xl' ||
                    buttonSize === 'l'
                      ? 'xxl'
                      : buttonSize === 'm'
                      ? 'xl'
                      : 'l',
                }}
                iconKind={iconKind}
              />
            </span>
          )}
          {text && (
            <span className={Styles.text} data-button-size={buttonSize}>
              {text}
            </span>
          )}
        </button>
      )}
    </div>
  )
}
