/// <reference types="react" />
declare const HEADING_KIND: {
    readonly PAGE_TITLE: "PAGE_TITLE";
    readonly SECTION_TITLE: "SECTION_TITLE";
    readonly SUBTITLE: "SUBTITLE";
};
declare type HeadingKind = typeof HEADING_KIND[keyof typeof HEADING_KIND];
export declare type HeadingTextProps = {
    className?: string;
    text: string;
    /** heading tag のレベルを用途名で受け取る */
    kind: HeadingKind;
};
export declare const HeadingText: ({ className, text, kind }: HeadingTextProps) => JSX.Element;
export {};
