export declare const BREAK_POINTS: {
    readonly XGA: "1025px";
    readonly PC: "769px";
    readonly TABLET: "768px";
    readonly MOBILE: "540px";
};
export declare type BreakPoints = keyof typeof BREAK_POINTS;
export declare const MATCH_MEDIA: {
    readonly XGA: "(min-width: 1025px)";
    readonly PC: "(min-width: 769px)";
    readonly TABLET: "(max-width: 768px)";
    readonly MOBILE: "(max-width: 540px)";
};
export declare type MatchMedia = keyof typeof MATCH_MEDIA;
export declare const MEDIA_QUERY: {
    readonly XGA: "screen and (min-width: 1025px)";
    readonly PC: "screen and (min-width: 769px)";
    readonly TABLET: "screen and (max-width: 768px)";
    readonly MOBILE: "screen and (max-width: 540px)";
};
export declare type MediaQuery = keyof typeof MEDIA_QUERY;
