/// <reference types="react" />
declare const LOADING_PARAMS: {
    readonly EAGER: "eager";
    readonly LAZY: "lazy";
    readonly NONE: undefined;
};
declare type LoadingParams = keyof typeof LOADING_PARAMS;
export declare type ImageProps = {
    className?: string;
    src: string;
    alt?: string;
    width?: number;
    height?: number;
    loading?: LoadingParams;
};
export declare const Image: ({ className, src, alt, width, height, loading, }: ImageProps) => JSX.Element;
export {};
