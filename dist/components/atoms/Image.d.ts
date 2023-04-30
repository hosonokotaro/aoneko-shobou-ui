/// <reference types="react" />
declare const LOADING_PARAMS: {
    readonly EAGER: "eager";
    readonly LAZY: "lazy";
    readonly NONE: undefined;
};
declare type LoadingParams = typeof LOADING_PARAMS[keyof typeof LOADING_PARAMS];
export declare type ImageProps = {
    /** styled-components が wrap して style を適用するために存在する（利用側で明示的に指定する必要はない） */
    className?: string;
    src: string;
    alt?: string;
    width?: number;
    height?: number;
    /** img の loading param を受け取る */
    loading?: LoadingParams;
};
export declare const Image: ({ className, src, alt, width, height, loading, }: ImageProps) => JSX.Element;
export {};
