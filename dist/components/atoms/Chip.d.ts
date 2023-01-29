/// <reference types="react" />
import { ChipBackgroundColor } from "../const/color";
export declare type ChipProps = {
    /** 利用したい状態を名前で指定する */
    status: ChipBackgroundColor;
    text: string;
};
export declare const Chip: ({ status, text }: ChipProps) => JSX.Element;
