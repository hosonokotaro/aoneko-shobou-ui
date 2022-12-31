export declare const BREAK_POINTS: {
    readonly TABLET: "768px";
    readonly MOBILE: "540px";
};
export declare type BreakPoints = keyof typeof BREAK_POINTS;
export declare const MATCH_MEDIA: {
    readonly TABLET: "(max-width: 768px)";
    readonly MOBILE: "(max-width: 540px)";
};
export declare type MatchMedia = keyof typeof MATCH_MEDIA;
export declare const MEDIA_QUERY: {
    readonly TABLET: "@media screen and (max-width: 768px)";
    readonly MOBILE: "@media screen and (max-width: 540px)";
};
export declare type MediaQuery = keyof typeof MEDIA_QUERY;
