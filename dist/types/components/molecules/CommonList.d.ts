/// <reference types="react" />
type CommonItem = {
    title: string;
    description: string;
};
export type CommonListProps = {
    /** title, description の配列を受け取る */
    commonList: CommonItem[];
};
export declare const CommonList: ({ commonList }: CommonListProps) => JSX.Element;
export {};
//# sourceMappingURL=CommonList.d.ts.map