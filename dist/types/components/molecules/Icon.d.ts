/// <reference types="react" />
import { IconKind } from "../const/common";
import { InlineSize } from "../const/size";
import * as Styles from "./Icon.css";
export type IconProps = {
    dataStyleProps?: Partial<Styles.DataStyleProps>;
    iconKind: IconKind;
    /** NOTE: SVG としての size を受け取る。適用後のサイズ単位は rem */
    size: InlineSize;
};
export declare const Icon: ({ dataStyleProps, iconKind, size }: IconProps) => JSX.Element;
//# sourceMappingURL=Icon.d.ts.map