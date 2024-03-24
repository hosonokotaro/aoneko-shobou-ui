/// <reference types="react" />
import { ChipBackgroundColor } from "../const/color";
export type ChipProps = {
    /** 利用したい状態を名前で受け取る */
    status: ChipBackgroundColor;
    text: string;
};
export declare const Chip: ({ status, text }: ChipProps) => JSX.Element;
//# sourceMappingURL=Chip.d.ts.map