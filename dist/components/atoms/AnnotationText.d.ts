/// <reference types="react" />
import { FontColor } from "../const/color";
export declare type AnnotationTextProps = {
    className?: string;
    text: string;
    color: FontColor;
};
export declare const AnnotationText: ({ className, text, color, }: AnnotationTextProps) => JSX.Element;
