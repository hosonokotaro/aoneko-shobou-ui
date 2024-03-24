import { MouseEventHandler, ReactNode } from 'react';
import * as Styles from "./Anchor.css";
declare const ANCHOR_TARGET: {
    readonly SELF: "_self";
    readonly BLANK: "_blank";
};
type AnchorTarget = typeof ANCHOR_TARGET[keyof typeof ANCHOR_TARGET];
export type AnchorProps = {
    dataStyleProps?: Partial<Styles.DataStyleProps>;
    href?: string;
    target?: AnchorTarget;
    onClick?: MouseEventHandler<HTMLAnchorElement>;
    children: ReactNode;
};
export declare const Anchor: ({ dataStyleProps, href, target, onClick, children, }: AnchorProps) => JSX.Element;
export {};
//# sourceMappingURL=Anchor.d.ts.map