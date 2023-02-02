import { MouseEvent } from 'react';
declare type NavigationItem = {
    path: string;
    name: string;
    isExternal: boolean;
};
export declare type GlobalNavigationProps = {
    /** styled-components が wrap して style を適用するために存在する（利用側で明示的に指定する必要はない） */
    className?: string;
    /** path, name, isExternal の配列を受け取る */
    navigationList: NavigationItem[];
    /** event, path, isExternal を利用側に渡す。実行したい関数を受け取る */
    handleLinkEvent: (event: MouseEvent<HTMLAnchorElement>, path: string, isExternal: boolean) => void;
    /** 現在の path (e.g. /about/) を受け取る。Library 側では URL に責任を持たない為 */
    currentPath: string;
};
export declare const GlobalNavigation: ({ className, navigationList, handleLinkEvent, currentPath, }: GlobalNavigationProps) => JSX.Element;
export {};
