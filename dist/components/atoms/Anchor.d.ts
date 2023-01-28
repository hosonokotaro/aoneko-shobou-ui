import { MouseEventHandler, ReactNode } from 'react';
declare const ANCHOR_TARGET: {
    readonly SELF: "_self";
    readonly BLANK: "_blank";
};
declare type AnchorTarget = keyof typeof ANCHOR_TARGET;
export declare type AnchorProps = {
    className?: string;
    href?: string;
    target?: AnchorTarget;
    onClick?: MouseEventHandler<HTMLAnchorElement>;
    children: ReactNode;
};
export declare const Anchor: ({ className, href, target, onClick, children, }: AnchorProps) => JSX.Element;
export {};
