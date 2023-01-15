/// <reference types="react" />
declare type NavigationItem = {
    path: string;
    name: string;
    isExternal: boolean;
};
export declare type GlobalNavigationProps = {
    className?: string;
    navigationList: NavigationItem[];
    handleLinkEvent: (path: string, isExternal: boolean) => void;
    currentPath: string;
};
export declare const GlobalNavigation: ({ className, navigationList, handleLinkEvent, currentPath, }: GlobalNavigationProps) => JSX.Element;
export {};
