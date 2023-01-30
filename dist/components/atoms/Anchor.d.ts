import { MouseEventHandler, ReactNode } from 'react';
declare const ANCHOR_TARGET: {
    readonly SELF: "_self";
    readonly BLANK: "_blank";
};
declare type AnchorTarget = keyof typeof ANCHOR_TARGET;
export declare type AnchorProps = {
    /** styled-components が wrap して style を適用するために存在する（利用側で明示的に指定する必要はない） */
    className?: string;
    href?: string;
    target?: AnchorTarget;
    onClick?: MouseEventHandler<HTMLAnchorElement>;
    children: ReactNode;
};
export declare const Anchor: ({ className, href, target, onClick, children, }: AnchorProps) => JSX.Element;
export {};
