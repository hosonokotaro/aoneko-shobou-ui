/// <reference types="react" />
import { FontColor } from "../const/color";
import { IconKind, Rotate } from "../const/common";
import { InlineSize } from "../const/size";
export declare type IconProps = {
    /** styled-components が wrap して style を適用するために存在する（利用側で明示的に指定する必要はない） */
    className?: string;
    iconKind: IconKind;
    /** SVG の fill color */
    fillColor: FontColor;
    size: InlineSize;
    /** 左回りの角度を指定する */
    iconRotate: Rotate;
};
export declare const Icon: ({ className, iconKind, fillColor, size, iconRotate, }: IconProps) => JSX.Element;
