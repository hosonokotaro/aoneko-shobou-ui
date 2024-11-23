import { Meta } from '@storybook/react'

import { AnnotationText } from '@/atoms/AnnotationText'

export default {
  title: 'atoms/AnnotationText',
  component: AnnotationText,
} as Meta<typeof AnnotationText>

export const Caption = {
  args: {
    text: '店舗の外観です',
    color: 'CAPTION',
  },
}

export const Caution = {
  args: {
    text: '※書店・カフェ共に販売はいたしません',
    color: 'CAUTION',
  },
}
