/// <reference types="react" />
declare type NavigationItem = {
    path: string;
    name: string;
    isExternal: boolean;
};
export declare type GlobalNavigationProps = {
    navigationList: NavigationItem[];
    handleLinkEvent: (path: string, isExternal: boolean) => void;
    currentPath: string;
};
export declare const GlobalNavigation: ({ navigationList, handleLinkEvent, currentPath, }: GlobalNavigationProps) => JSX.Element;
export {};
