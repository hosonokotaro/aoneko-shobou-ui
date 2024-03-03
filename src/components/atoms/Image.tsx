import * as Styles from '@/atoms/Image.css'

const LOADING_PARAMS = {
  EAGER: 'eager',
  LAZY: 'lazy',
  NONE: undefined,
} as const

type LoadingParams = typeof LOADING_PARAMS[keyof typeof LOADING_PARAMS]

export type ImageProps = {
  dataStyleProps?: Partial<Styles.DataStyleProps>
  src: string
  alt?: string
  width?: number
  height?: number
  /** img の loading param を受け取る */
  loading?: LoadingParams
}

export const Image = ({
  dataStyleProps,
  src,
  alt = '',
  width,
  height,
  loading,
}: ImageProps) => {
  const loadingParam =
    loading === 'eager'
      ? LOADING_PARAMS.EAGER
      : loading === 'lazy'
      ? LOADING_PARAMS.LAZY
      : undefined

  return (
    <img
      className={Styles.image}
      {...dataStyleProps}
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loadingParam}
    />
  )
}
