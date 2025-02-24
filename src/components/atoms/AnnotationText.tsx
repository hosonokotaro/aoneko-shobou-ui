import * as Styles from '@/atoms/AnnotationText.css'
import { Colors } from '~/styles/theme'

export type AnnotationTextProps = {
  text: string
  color: keyof Colors['text'] | keyof Colors['link']
}

export const AnnotationText = ({ text, color }: AnnotationTextProps) => {
  return (
    <span className={Styles.annotationText} data-color={color}>
      {text}
    </span>
  )
}
