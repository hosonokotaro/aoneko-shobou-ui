/// <reference types="react" />
import { FontColor } from "../const/color";
export declare type AnnotationTextProps = {
    text: string;
    color: FontColor;
};
export declare const AnnotationText: ({ text, color }: AnnotationTextProps) => JSX.Element;
