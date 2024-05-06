import { ComponentProps, MouseEventHandler } from 'react';
import { Anchor } from "../atoms/Anchor";
import { ButtonBackgroundColor } from "../const/color";
import { Rotate } from "../const/common";
import { InlineSize } from "../const/size";
import * as Styles from "./Button.css";
import { Icon } from "./Icon";
export type ButtonProps = {
    dataStyleProps?: Partial<Styles.DataStyleProps>;
    onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
    text?: string;
    buttonSize: InlineSize;
    buttonColor: ButtonBackgroundColor;
    iconKind?: ComponentProps<typeof Icon>['iconKind'];
    iconRotate?: Rotate;
    /** Button 要素ではなく Anchor 要素として表現する場合 */
    isAnchor?: boolean;
    href?: string;
    target?: ComponentProps<typeof Anchor>['target'];
};
export declare const Button: ({ dataStyleProps, onClick, text, buttonSize, buttonColor, iconKind, iconRotate, isAnchor, href, target, }: ButtonProps) => JSX.Element;
//# sourceMappingURL=Button.d.ts.map