/// <reference types="react" />
declare type CommonItem = {
    title: string;
    description: string;
};
export declare type CommonListProps = {
    commonList: CommonItem[];
};
export declare const CommonList: ({ commonList }: CommonListProps) => JSX.Element;
export {};
