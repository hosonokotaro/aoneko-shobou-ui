/// <reference types="react" />
import { IconKind } from "../const/common";
import * as Styles from "./Icon.css";
export type IconProps = {
    dataIconProps: Partial<Styles.DataIconProps>;
    iconKind: IconKind;
};
export declare const Icon: ({ dataIconProps, iconKind }: IconProps) => JSX.Element;
//# sourceMappingURL=Icon.d.ts.map