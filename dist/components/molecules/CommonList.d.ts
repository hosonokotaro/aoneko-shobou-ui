/// <reference types="react" />
declare type CommonItem = {
    title: string;
    description: string;
};
export declare type CommonListProps = {
    className?: string;
    /** title, description の配列を受け取る */
    commonList: CommonItem[];
};
export declare const CommonList: ({ className, commonList }: CommonListProps) => JSX.Element;
export {};
