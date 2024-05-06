import { ComponentProps, MouseEventHandler } from 'react'

import { Anchor } from '@/atoms/Anchor'
import { ButtonBackgroundColor } from '@/const/color'
import { Rotate } from '@/const/common'
import { InlineSize } from '@/const/size'
import * as Styles from '@/molecules/Button.css'
import { Icon } from '@/molecules/Icon'

export type ButtonProps = {
  dataStyleProps?: Partial<Styles.DataStyleProps>
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
  text?: string
  buttonSize: InlineSize
  buttonColor: ButtonBackgroundColor
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
                  'data-fill-color': 'WHITE',
                  'data-size':
                    buttonSize === 'XXL' ||
                    buttonSize === 'XL' ||
                    buttonSize === 'L'
                      ? 'XXL'
                      : buttonSize === 'M'
                      ? 'XL'
                      : 'L',
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
                  'data-fill-color': 'WHITE',
                  'data-size':
                    buttonSize === 'XXL' ||
                    buttonSize === 'XL' ||
                    buttonSize === 'L'
                      ? 'XXL'
                      : buttonSize === 'M'
                      ? 'XL'
                      : 'L',
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
