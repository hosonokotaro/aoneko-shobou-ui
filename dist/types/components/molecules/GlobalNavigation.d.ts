import { SetStateAction } from 'react';
import { Dispatch, MouseEvent } from 'react';
type NavigationItem = {
    path: string;
    name: string;
    isExternal: boolean;
};
export type GlobalNavigationProps = {
    /** path, name, isExternal の配列を受け取る */
    navigationList: NavigationItem[];
    /** event, path, isExternal を利用側に渡す。実行したい関数を受け取る */
    handleLinkEvent: (event: MouseEvent<HTMLAnchorElement>, path: string, isExternal: boolean) => void;
    /** 現在の path (e.g. /about/) を受け取る。Library 側では URL に責任を持たない為 */
    currentPath: string;
    /** Tablet size 以下の時のナビゲーションの開閉状態を受け取る */
    isOpenNavigation: boolean;
    /** Tablet size 以下の時のナビゲーションの開閉状態を更新する関数を受け取る */
    handleSetIsOpenNavigation: Dispatch<SetStateAction<boolean>>;
};
export declare const GlobalNavigation: ({ navigationList, handleLinkEvent, currentPath, isOpenNavigation, handleSetIsOpenNavigation, }: GlobalNavigationProps) => JSX.Element;
export {};
//# sourceMappingURL=GlobalNavigation.d.ts.map