import { ComponentProps } from 'react';
export type SelectProps = {
    valueList: string[];
    selectElementProps: ComponentProps<'select'>;
    defaultSelectOption?: string;
};
export declare const Select: ({ valueList, selectElementProps, defaultSelectOption, }: SelectProps) => JSX.Element;
//# sourceMappingURL=Select.d.ts.map