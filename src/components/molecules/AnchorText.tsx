import { ComponentProps } from 'react'

import { Anchor } from '@/atoms/Anchor'
import * as Styles from '@/molecules/AnchorText.css'
import { Icon } from '@/molecules/Icon'

export type AnchorTextProps = {
  text: string
  href?: string
  target?: ComponentProps<typeof Anchor>['target']
}

export const AnchorText = ({ text, href, target }: AnchorTextProps) => {
  return (
    <Anchor
      dataStyleProps={{ 'data-parent-component': 'AnchorText' }}
      href={href}
      target={target}
    >
      <span className={Styles.text}>{text}</span>
      {target === '_blank' && (
        <Icon
          dataStyleProps={{ 'data-fill-color': 'LINK' }}
          iconKind="OPEN_IN_NEW"
          size="M"
        />
      )}
    </Anchor>
  )
}
