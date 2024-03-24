/// <reference types="react" />
import * as Styles from "./Image.css";
declare const LOADING_PARAMS: {
    readonly EAGER: "eager";
    readonly LAZY: "lazy";
    readonly NONE: undefined;
};
type LoadingParams = typeof LOADING_PARAMS[keyof typeof LOADING_PARAMS];
export type ImageProps = {
    dataStyleProps?: Partial<Styles.DataStyleProps>;
    src: string;
    alt?: string;
    width?: number;
    height?: number;
    /** img の loading param を受け取る */
    loading?: LoadingParams;
};
export declare const Image: ({ dataStyleProps, src, alt, width, height, loading, }: ImageProps) => JSX.Element;
export {};
//# sourceMappingURL=Image.d.ts.map