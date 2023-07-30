import { ComponentProps } from 'react';
export declare type InputTextProps = {
    className?: string;
    elementProps?: ComponentProps<'input'>;
    placeholder: string;
};
export declare const InputText: ({ className, elementProps, placeholder, }: InputTextProps) => JSX.Element;
