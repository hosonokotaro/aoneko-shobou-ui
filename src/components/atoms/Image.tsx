const LOADING_PARAMS = {
  EAGER: 'eager',
  LAZY: 'lazy',
  NONE: undefined,
} as const

type LoadingParams = keyof typeof LOADING_PARAMS

export type ImageProps = {
  className?: string
  src: string
  alt?: string
  width?: number
  height?: number
  loading?: LoadingParams
}

export const Image = ({
  className,
  src,
  alt = '',
  width,
  height,
  loading,
}: ImageProps) => {
  const loadingParam =
    loading === 'EAGER'
      ? LOADING_PARAMS.EAGER
      : loading === 'LAZY'
      ? LOADING_PARAMS.LAZY
      : undefined

  return (
    <img
      className={className}
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loadingParam}
    />
  )
}
