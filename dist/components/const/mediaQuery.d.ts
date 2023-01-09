export declare const BREAK_POINTS: {
    readonly OVER_PC: "1025px";
    readonly TABLET: "768px";
    readonly MOBILE: "540px";
};
export declare type BreakPoints = keyof typeof BREAK_POINTS;
export declare const MATCH_MEDIA: {
    readonly OVER_PC: "(min-width: 1025px)";
    readonly TABLET: "(max-width: 768px)";
    readonly MOBILE: "(max-width: 540px)";
};
export declare type MatchMedia = keyof typeof MATCH_MEDIA;
export declare const MEDIA_QUERY: {
    readonly OVER_PC: "@media screen and (min-width: 1025px)";
    readonly TABLET: "@media screen and (max-width: 768px)";
    readonly MOBILE: "@media screen and (max-width: 540px)";
};
export declare type MediaQuery = keyof typeof MEDIA_QUERY;
