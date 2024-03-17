import { ComponentProps, MouseEventHandler } from 'react';
import { Anchor } from "../atoms/Anchor";
import { ButtonBackgroundColor } from "../const/color";
import { Rotate } from "../const/common";
import * as Styles from "./Button.css";
import { Icon } from "./Icon";
declare const BUTTON_SIZE: {
    readonly L: "L";
    readonly M: "M";
    readonly S: "S";
};
declare type ButtonSize = typeof BUTTON_SIZE[keyof typeof BUTTON_SIZE];
export declare type ButtonProps = {
    dataStyleProps?: Partial<Styles.DataStyleProps>;
    onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
    text?: string;
    buttonSize: ButtonSize;
    buttonColor: ButtonBackgroundColor;
    iconKind?: ComponentProps<typeof Icon>['iconKind'];
    iconRotate?: Rotate;
    /** Button 要素ではなく Anchor 要素として表現する場合 */
    isAnchor?: boolean;
    href?: string;
    target?: ComponentProps<typeof Anchor>['target'];
};
export declare const Button: ({ dataStyleProps, onClick, text, buttonSize, buttonColor, iconKind, iconRotate, isAnchor, href, target, }: ButtonProps) => JSX.Element;
export {};
