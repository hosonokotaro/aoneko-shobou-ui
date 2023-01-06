import { ComponentProps, MouseEventHandler } from 'react';
import { Anchor } from "../atoms/Anchor";
import { Icon } from "../atoms/Icon";
import { ButtonBackgroundColor } from "../const/color";
import { Rotate } from "../const/common";
declare const BUTTON_SIZE: {
    readonly M: "M";
    readonly S: "S";
};
declare type ButtonSize = typeof BUTTON_SIZE[keyof typeof BUTTON_SIZE];
export declare type ButtonProps = {
    className?: string;
    buttonCallback?: MouseEventHandler<HTMLButtonElement>;
    anchorCallback?: () => void;
    text?: string;
    buttonSize: ButtonSize;
    buttonColor: ButtonBackgroundColor;
    iconKind?: ComponentProps<typeof Icon>['iconKind'];
    iconRotate?: Rotate;
    isBorderRadius: boolean;
    isAnchor?: boolean;
    href?: string;
    target?: ComponentProps<typeof Anchor>['target'];
};
export declare const Button: ({ className, buttonCallback, anchorCallback, text, buttonSize, buttonColor, iconKind, isBorderRadius, iconRotate, isAnchor, href, target, }: ButtonProps) => JSX.Element;
export {};
