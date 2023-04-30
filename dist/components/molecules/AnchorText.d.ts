import { ComponentProps } from 'react';
import { Anchor } from "../atoms/Anchor";
export declare type AnchorTextProps = {
    className?: string;
    text: string;
    href?: string;
    target?: ComponentProps<typeof Anchor>['target'];
};
export declare const AnchorText: ({ className, text, href, target, }: AnchorTextProps) => JSX.Element;
