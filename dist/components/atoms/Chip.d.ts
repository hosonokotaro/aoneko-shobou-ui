/// <reference types="react" />
import { ChipBackgroundColor } from "../const/color";
export declare type ChipProps = {
    status: ChipBackgroundColor;
    text: string;
};
export declare const Chip: ({ status, text }: ChipProps) => JSX.Element;
