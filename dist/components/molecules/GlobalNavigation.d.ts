/// <reference types="react" />
declare type NavigationItem = {
    path: string;
    name: string;
    isExternal: boolean;
};
export declare type GlobalNavigationProps = {
    /** styled-components が wrap して style を適用するために存在する（利用側で明示的に指定する必要はない） */
    className?: string;
    /** path, name, isExternal の params を指定した配列 */
    navigationList: NavigationItem[];
    /** path, isExternal を利用側で受け取れる。そして UI 側で実行したい関数を渡す */
    handleLinkEvent: (path: string, isExternal: boolean) => void;
    /** 現在の path (e.g. /about/) を指定する。Library 側では URL に責任を持たない為 */
    currentPath: string;
};
export declare const GlobalNavigation: ({ className, navigationList, handleLinkEvent, currentPath, }: GlobalNavigationProps) => JSX.Element;
export {};
