import { CSSProperties } from 'react';
import { ButtonBackgroundColor } from '@/const/color';
import { IconButtonSize } from '@/const/size';
export declare type DataStyleProps = {
    'data-parent-component': 'AnchorText' | 'Button' | 'GlobalNavigation';
    'data-background-color': ButtonBackgroundColor;
    'data-size': IconButtonSize;
};
export declare const buttonLikeStyle: CSSProperties;
export declare const anchorSelectorStyle: {
    readonly '&[data-background-color="DEFAULT"]': {
        readonly background: "#4a90d6";
    };
    readonly '&[data-background-color="EXTERNAL"]': {
        readonly background: "#a4a368";
    };
    readonly '&[data-background-color="DEFAULT_CURRENT"]': {
        readonly background: "#34628f";
        readonly cursor: "pointer";
        readonly pointerEvents: "none";
    };
    readonly '&[data-size="S"]': {
        readonly minWidth: "20px";
        readonly minHeight: "20px";
    };
    readonly '&[data-size="M"]': {
        readonly minWidth: "40px";
        readonly minHeight: "40px";
    };
    readonly '&[data-size="L"]': {
        readonly minWidth: "60px";
        readonly minHeight: "60px";
    };
};
export declare const anchorSelectorHoverStyle: {
    readonly '&[data-background-color="DEFAULT"]:hover': {
        readonly background: "#417cb5";
    };
    readonly '&[data-background-color="EXTERNAL"]:hover': {
        readonly background: "#827f3c";
    };
};
export declare const anchorStyle: {
    readonly color: "#4a90d6";
    readonly transition: "color 0.25s ease";
};
export declare const anchorHoverStyle: {
    readonly color: "red";
};
export declare const anchor: string;
//# sourceMappingURL=Anchor.css.d.ts.map