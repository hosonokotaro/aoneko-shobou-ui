/// <reference types="react" />
import { ImageProps } from "../atoms/Image";
export declare type PhotoProps = {
    className?: string;
    /** Atoms の Image component の props を受け取る */
    imageProps: ImageProps;
};
export declare const Photo: ({ className, imageProps }: PhotoProps) => JSX.Element;
