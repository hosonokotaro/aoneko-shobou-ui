import * as Styles from '@/atoms/HeadingText.css'

type HeadingKind = 'PAGE_TITLE' | 'SECTION_TITLE' | 'SUBTITLE'

export type HeadingTextProps = {
  text: string
  /** heading tag のレベルを用途名で受け取る */
  kind: HeadingKind
}

export const HeadingText = ({ text, kind }: HeadingTextProps) => {
  return (
    <>
      {kind === 'PAGE_TITLE' && <h1 className={Styles.pageTitle}>{text}</h1>}
      {kind === 'SECTION_TITLE' && (
        <h2 className={Styles.sectionTitle}>{text}</h2>
      )}
      {kind === 'SUBTITLE' && <h3 className={Styles.subTitle}>{text}</h3>}
    </>
  )
}
