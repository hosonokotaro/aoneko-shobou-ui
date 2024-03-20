import { ComponentProps } from 'react';
import { CSSProperties } from 'react';
import { Dispatch } from 'react';
import { LoaderOptions } from '@googlemaps/js-api-loader';
import { MouseEvent as MouseEvent_2 } from 'react';
import { MouseEventHandler } from 'react';
import { ReactNode } from 'react';
import { SetStateAction } from 'react';
import { useEffect } from 'react';

export declare const Anchor: ({ dataStyleProps, href, target, onClick, children, }: AnchorProps) => JSX.Element;

declare const anchor: string;

declare const ANCHOR_TARGET: {
    readonly SELF: "_self";
    readonly BLANK: "_blank";
};

declare const anchorHoverStyle: {
    readonly color: "red";
};

export declare type AnchorProps = {
    dataStyleProps?: Partial<Styles.DataStyleProps>;
    href?: string;
    target?: AnchorTarget;
    onClick?: MouseEventHandler<HTMLAnchorElement>;
    children: ReactNode;
};

declare const anchorSelectorHoverStyle: {
    readonly '&[data-background-color="DEFAULT"]:hover': {
        readonly background: "#417cb5";
    };
    readonly '&[data-background-color="EXTERNAL"]:hover': {
        readonly background: "#827f3c";
    };
};

declare const anchorSelectorStyle: {
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

declare const anchorStyle: {
    readonly color: "#4a90d6";
    readonly transition: "color 0.25s ease";
};

declare type AnchorTarget = typeof ANCHOR_TARGET[keyof typeof ANCHOR_TARGET];

export declare const AnchorText: ({ text, href, target }: AnchorTextProps) => JSX.Element;

export declare type AnchorTextProps = {
    text: string;
    href?: string;
    target?: ComponentProps<typeof Anchor>['target'];
};

export declare const AnnotationText: ({ text, color }: AnnotationTextProps) => JSX.Element;

export declare type AnnotationTextProps = {
    text: string;
    color: FontColor;
};

export declare const BACKGROUND_COLOR: {
    WHITE: "#fcfcfc";
};

export declare const BASE_COLOR: {
    readonly ATTENTION: "#a370d3";
    readonly CAUTION: "#ff8897";
    readonly CAPTION: "#999";
    readonly INFORMATION: "#5d7fb3";
    readonly LINK: "#4a90d6";
    readonly LINK_HOVER: "#417cb5";
    readonly LINK_CURRENT: "#34628f";
    readonly LINK_EXTERNAL: "#a4a368";
    readonly LINK_EXTERNAL_HOVER: "#827f3c";
    readonly TITLE: "#a370d3";
    readonly BLACK: "#111";
    readonly LIGHT_GRAY: "#eee";
    readonly WHITE: "#fcfcfc";
};

export declare const BLOCK_WIDTH: {
    readonly AUTO: "auto";
    readonly FULL: "100%";
    readonly HALF: "50%";
    readonly ONE_THIRD: "calc(100% / 3)";
};

export declare const BORDER_COLOR: {
    readonly LIGHT_GRAY: "#eee";
    readonly GRAY: "#999";
    readonly BLACK: "#111";
    readonly TITLE: "#a370d3";
    readonly WHITE: "#fcfcfc";
};

export declare const BORDER_RADIUS: {
    readonly M: "6px";
    readonly S: "3px";
    readonly NONE: "0";
};

export declare const BREAK_POINTS: {
    readonly XGA: "1025px";
    readonly PC: "769px";
    readonly TABLET: "768px";
    readonly MOBILE: "540px";
};

export declare const Button: ({ dataStyleProps, onClick, text, buttonSize, buttonColor, iconKind, iconRotate, isAnchor, href, target, }: ButtonProps) => JSX.Element;

declare const button: string;

export declare const BUTTON_BACKGROUND_COLOR: {
    readonly DEFAULT: "#4a90d6";
    readonly DEFAULT_HOVER: "#417cb5";
    readonly DEFAULT_CURRENT: "#34628f";
    readonly EXTERNAL: "#a4a368";
    readonly EXTERNAL_HOVER: "#827f3c";
};

declare const BUTTON_SIZE: {
    readonly L: "L";
    readonly M: "M";
    readonly S: "S";
};

declare type ButtonBackgroundColor = keyof typeof BUTTON_BACKGROUND_COLOR;

declare const buttonLikeStyle: CSSProperties;

export declare type ButtonProps = {
    dataStyleProps?: Partial<Styles_3.DataStyleProps>;
    onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
    text?: string;
    buttonSize: ButtonSize;
    buttonColor: ButtonBackgroundColor;
    iconKind?: ComponentProps<typeof Icon>['iconKind'];
    iconRotate?: Rotate;
    /** Button 要素ではなく Anchor 要素として表現する場合 */
    isAnchor?: boolean;
    href?: string;
    target?: ComponentProps<typeof Anchor>['target'];
};

declare type ButtonSize = typeof BUTTON_SIZE[keyof typeof BUTTON_SIZE];

declare const buttonWrapper: string;

export declare const Carousel: ({ imageList }: CarouselProps) => JSX.Element;

export declare type CarouselProps = {
    /** Atoms の Image component の props の配列を受け取る */
    imageList: ImageProps[];
};

export declare const Chip: ({ status, text }: ChipProps) => JSX.Element;

export declare const CHIP_BACKGROUND_COLOR: {
    readonly DEFAULT: "#5d7fb3";
    readonly CAUTION: "#ff8897";
};

declare type ChipBackgroundColor = keyof typeof CHIP_BACKGROUND_COLOR;

export declare type ChipProps = {
    /** 利用したい状態を名前で受け取る */
    status: ChipBackgroundColor;
    text: string;
};

declare type CommonItem = {
    title: string;
    description: string;
};

export declare const CommonList: ({ commonList }: CommonListProps) => JSX.Element;

export declare type CommonListProps = {
    /** title, description の配列を受け取る */
    commonList: CommonItem[];
};

declare type DataStyleProps = {
    'data-parent-component': 'AnchorText' | 'Button' | 'GlobalNavigation';
    'data-background-color': ButtonBackgroundColor;
    'data-size': IconButtonSize;
};

declare type DataStyleProps_2 = {
    'data-parent-component': 'Carousel';
    'data-photo-style': '0' | '1';
};

declare type DataStyleProps_3 = {
    'data-parent-component': 'GlobalNavigation';
};

declare type DataStyleProps_4 = {
    'data-parent-component': 'Button';
    'data-icon-rotate': Rotate;
    'data-fill-color': FontColor;
    'data-size': IconButtonSize;
};

export declare const FONT_COLOR: {
    readonly CAPTION: "#999";
    readonly CAUTION: "#ff8897";
    readonly LINK: "#4a90d6";
    readonly LINK_HOVER: "#417cb5";
    readonly TITLE: "#a370d3";
    readonly WHITE: "#fcfcfc";
    readonly BLACK: "#111";
};

export declare const FONT_WEIGHT: {
    readonly BOLD: "600";
    readonly NORMAL: "300";
};

declare type FontColor = keyof typeof FONT_COLOR;

export declare const GlobalNavigation: ({ navigationList, handleLinkEvent, currentPath, isOpenNavigation, handleSetIsOpenNavigation, }: GlobalNavigationProps) => JSX.Element;

export declare type GlobalNavigationProps = {
    /** path, name, isExternal の配列を受け取る */
    navigationList: NavigationItem[];
    /** event, path, isExternal を利用側に渡す。実行したい関数を受け取る */
    handleLinkEvent: (event: MouseEvent_2<HTMLAnchorElement>, path: string, isExternal: boolean) => void;
    /** 現在の path (e.g. /about/) を受け取る。Library 側では URL に責任を持たない為 */
    currentPath: string;
    /** Tablet size 以下の時のナビゲーションの開閉状態を受け取る */
    isOpenNavigation: boolean;
    /** Tablet size 以下の時のナビゲーションの開閉状態を更新する関数を受け取る */
    handleSetIsOpenNavigation: Dispatch<SetStateAction<boolean>>;
};

declare type HeadingKind = 'PAGE_TITLE' | 'SECTION_TITLE' | 'SUBTITLE';

export declare const HeadingText: ({ text, kind }: HeadingTextProps) => JSX.Element;

export declare type HeadingTextProps = {
    text: string;
    /** heading tag のレベルを用途名で受け取る */
    kind: HeadingKind;
};

export declare const Icon: ({ dataStyleProps, iconKind, size }: IconProps) => JSX.Element;

declare const icon: string;

export declare const ICON_BUTTON_SIZE: {
    readonly L: {
        readonly WIDTH: "60px";
        readonly HEIGHT: "60px";
    };
    readonly M: {
        readonly WIDTH: "40px";
        readonly HEIGHT: "40px";
    };
    readonly S: {
        readonly WIDTH: "20px";
        readonly HEIGHT: "20px";
    };
};

export declare const ICON_KIND: {
    readonly INFO: "INFO";
    readonly OPEN_IN_NEW: "OPEN_IN_NEW";
    readonly NAVIGATE_NEXT: "NAVIGATE_NEXT";
    readonly MENU: "MENU";
    readonly MENU_OPEN: "MENU_OPEN";
};

declare type IconButtonSize = keyof typeof ICON_BUTTON_SIZE;

declare type IconKind = typeof ICON_KIND[keyof typeof ICON_KIND];

export declare type IconProps = {
    dataStyleProps?: Partial<Styles_4.DataStyleProps>;
    iconKind: IconKind;
    /** SVG の fill color を受け取る */
    size: InlineSize;
};

declare const image: string;

declare const Image_2: ({ dataStyleProps, src, alt, width, height, loading, }: ImageProps) => JSX.Element;
export { Image_2 as Image }

export declare type ImageProps = {
    dataStyleProps?: Partial<Styles_2.DataStyleProps>;
    src: string;
    alt?: string;
    width?: number;
    height?: number;
    /** img の loading param を受け取る */
    loading?: LoadingParams;
};

declare const info: string;

export declare const INLINE_SIZE: {
    readonly XXL: "2rem";
    readonly XL: "1.6rem";
    readonly L: "1.2rem";
    readonly M: "1rem";
    readonly S: "0.9rem";
};

declare type InlineSize = keyof typeof INLINE_SIZE;

export declare const InputText: ({ placeholder }: InputTextProps) => JSX.Element;

export declare type InputTextProps = {
    placeholder?: string;
};

declare const LOADING_PARAMS: {
    readonly EAGER: "eager";
    readonly LAZY: "lazy";
    readonly NONE: undefined;
};

declare type LoadingParams = typeof LOADING_PARAMS[keyof typeof LOADING_PARAMS];

export declare const MATCH_MEDIA: {
    readonly XGA: "(min-width: 1025px)";
    readonly PC: "(min-width: 769px)";
    readonly TABLET: "(max-width: 768px)";
    readonly MOBILE: "(max-width: 540px)";
};

export declare const MEDIA_QUERY: {
    readonly XGA: "screen and (min-width: 1025px)";
    readonly PC: "screen and (min-width: 769px)";
    readonly TABLET: "screen and (max-width: 768px)";
    readonly MOBILE: "screen and (max-width: 540px)";
};

declare const menu: string;

declare const menuOpen: string;

declare const navigateNext: string;

declare type NavigationItem = {
    path: string;
    name: string;
    isExternal: boolean;
};

declare const openInNew: string;

export declare const ParagraphText: ({ text }: ParagraphTextProps) => JSX.Element;

export declare type ParagraphTextProps = {
    text: string;
};

declare const ROTATE: {
    readonly DEFAULT: "0deg";
    readonly DEG90: "90deg";
    readonly DEG180: "180deg";
    readonly DEG270: "270deg";
};

declare type Rotate = typeof ROTATE[keyof typeof ROTATE];

declare type ScheduleItem = {
    startDate: string;
    endDate: string;
    timeFrame: string;
    description: string;
};

export declare const ScheduleList: ({ scheduleList, isSummary, }: ScheduleListProps) => JSX.Element;

export declare type ScheduleListProps = {
    className?: string;
    /** 予定の開始日、終了日、時間帯、内容を記載した配列を受け取る */
    scheduleList: ScheduleItem[];
    /** 要約して表示する */
    isSummary?: boolean;
};

export declare const Select: ({ valueList }: SelectProps) => JSX.Element;

export declare type SelectProps = {
    valueList: string[];
};

export declare const ShopMap: ({ loaderOptions, height }: ShopMapProps) => JSX.Element;

export declare type ShopMapProps = {
    /** see https://developers.google.com/maps/documentation/javascript/overview?hl=ja */
    loaderOptions: LoaderOptions;
    /** ShopMap の高さを明示的に指定する必要があるために受け取る */
    height: string;
};

export declare const SPACE: {
    readonly AUTO: "auto";
    readonly XL: "20px";
    readonly L: "16px";
    readonly M: "12px";
    readonly S: "8px";
    readonly XS: "4px";
    readonly NONE: "0";
};

declare namespace Styles {
    export {
        DataStyleProps,
        buttonLikeStyle,
        anchorSelectorStyle,
        anchorSelectorHoverStyle,
        anchorStyle,
        anchorHoverStyle,
        anchor
    }
}

declare namespace Styles_2 {
    export {
        DataStyleProps_2 as DataStyleProps,
        image
    }
}

declare namespace Styles_3 {
    export {
        DataStyleProps_3 as DataStyleProps,
        buttonWrapper,
        button,
        text
    }
}

declare namespace Styles_4 {
    export {
        DataStyleProps_4 as DataStyleProps,
        icon,
        info,
        openInNew,
        navigateNext,
        menu,
        menuOpen
    }
}

export declare const TABLE_TWO_COLUMN: {
    readonly WIDTH_ODD: "68%";
    readonly WIDTH_EVEN: "32%";
    readonly PADDING_TOP_BOTTOM: "4px";
    readonly PADDING_LEFT_RIGHT: "12px";
};

declare const text: string;

export declare const TextArea: ({ placeholder }: TextAreaProps) => JSX.Element;

export declare type TextAreaProps = {
    placeholder?: string;
};

export declare const TRANSITION_TIME = "0.25s ease";

export declare const useIsomorphicEffect: () => typeof useEffect;

export declare const useMatchMedia: () => {
    isTablet: boolean;
};

export { }
