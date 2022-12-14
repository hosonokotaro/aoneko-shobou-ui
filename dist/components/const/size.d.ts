export declare const BLOCK_WIDTH: {
    readonly AUTO: "auto";
    readonly FULL: "100%";
    readonly HALF: "50%";
    readonly ONE_THIRD: "calc(100% / 3)";
};
export declare type BlockWidth = keyof typeof BLOCK_WIDTH;
export declare const INLINE_SIZE: {
    readonly XXL: "2rem";
    readonly XL: "1.6rem";
    readonly L: "1.2rem";
    readonly M: "1rem";
    readonly S: "0.9rem";
};
export declare type InlineSize = keyof typeof INLINE_SIZE;
export declare const FONT_WEIGHT: {
    readonly BOLD: "600";
    readonly NORMAL: "300";
};
export declare type FontWeight = keyof typeof FONT_WEIGHT;
export declare const ICON_BUTTON_SIZE: {
    readonly M: {
        readonly WIDTH: "40px";
        readonly HEIGHT: "40px";
    };
    readonly S: {
        readonly WIDTH: "20px";
        readonly HEIGHT: "20px";
    };
};
export declare type IconButtonSize = keyof typeof ICON_BUTTON_SIZE;
export declare const MARGIN: {
    readonly AUTO: "auto";
    readonly XL: "20px";
    readonly L: "16px";
    readonly M: "12px";
    readonly S: "8px";
    readonly XS: "4px";
    readonly NONE: "0";
};
export declare type Margin = keyof typeof MARGIN;
export declare const BORDER_RADIUS: {
    readonly M: "6px";
    readonly S: "3px";
    readonly NONE: "0";
};
export declare type BorderRadius = keyof typeof BORDER_RADIUS;
