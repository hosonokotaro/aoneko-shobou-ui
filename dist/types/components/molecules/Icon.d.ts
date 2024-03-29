/// <reference types="react" />
import { IconKind } from "../const/common";
import { InlineSize } from "../const/size";
import * as Styles from "./Icon.css";
export type IconProps = {
    dataStyleProps?: Partial<Styles.DataStyleProps>;
    iconKind: IconKind;
    /** SVG の fill color を受け取る */
    size: InlineSize;
};
export declare const Icon: ({ dataStyleProps, iconKind, size }: IconProps) => JSX.Element;
//# sourceMappingURL=Icon.d.ts.map