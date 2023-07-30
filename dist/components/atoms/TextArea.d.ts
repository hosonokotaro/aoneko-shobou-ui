import { ComponentProps } from 'react';
export declare type TextAreaProps = {
    className?: string;
    elementProps?: ComponentProps<'textarea'>;
    placeholder: string;
};
export declare const TextArea: ({ className, elementProps, placeholder, }: TextAreaProps) => JSX.Element;
