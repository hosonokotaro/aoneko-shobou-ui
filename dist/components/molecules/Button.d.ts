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
    /** styled-components が wrap して style を適用するために存在する（利用側で明示的に指定する必要はない） */
    className?: string;
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
export declare const Button: ({ className, onClick, text, buttonSize, buttonColor, iconKind, iconRotate, isAnchor, href, target, }: ButtonProps) => JSX.Element;
export {};
