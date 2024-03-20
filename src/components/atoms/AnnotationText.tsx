import * as Styles from '@/atoms/AnnotationText.css'
import { FontColor } from '@/const/color'

export type AnnotationTextProps = {
  text: string
  color: FontColor
}

export const AnnotationText = ({ text, color }: AnnotationTextProps) => {
  return (
    <span className={Styles.annotationText} data-color={color}>
      {text}
    </span>
  )
}
