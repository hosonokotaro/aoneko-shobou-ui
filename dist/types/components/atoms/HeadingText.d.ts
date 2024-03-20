declare type HeadingKind = 'PAGE_TITLE' | 'SECTION_TITLE' | 'SUBTITLE';
export declare type HeadingTextProps = {
    text: string;
    /** heading tag のレベルを用途名で受け取る */
    kind: HeadingKind;
};
export declare const HeadingText: ({ text, kind }: HeadingTextProps) => JSX.Element;
export {};
//# sourceMappingURL=HeadingText.d.ts.map