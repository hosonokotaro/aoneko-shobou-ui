import { ComponentProps } from 'react';
export declare type SelectProps = {
    className?: string;
    selectElementProps: ComponentProps<'select'>;
    valueList: string[];
};
export declare const Select: ({ className, selectElementProps, valueList, }: SelectProps) => JSX.Element;
