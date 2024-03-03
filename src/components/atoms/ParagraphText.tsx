import * as Styles from '@/atoms/ParagraphText.css'

export type ParagraphTextProps = {
  text: string
}

export const ParagraphText = ({ text }: ParagraphTextProps) => {
  return <p className={Styles.paragraphText}>{text}</p>
}
