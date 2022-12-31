/// <reference types="react" />
import { FontColor } from "../const/color";
import { IconKind, Rotate } from "../const/common";
import { InlineSize } from "../const/size";
export declare type IconProps = {
    className?: string;
    iconKind: IconKind;
    fillColor: FontColor;
    size: InlineSize;
    iconRotate: Rotate;
};
export declare const Icon: ({ className, iconKind, fillColor, size, iconRotate, }: IconProps) => JSX.Element;
