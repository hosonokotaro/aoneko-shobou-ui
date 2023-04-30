/// <reference types="react" />
import { ChipBackgroundColor } from "../const/color";
export declare type ChipProps = {
    className?: string;
    /** 利用したい状態を名前で受け取る */
    status: ChipBackgroundColor;
    text: string;
};
export declare const Chip: ({ className, status, text }: ChipProps) => JSX.Element;
