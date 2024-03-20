import { ComponentProps } from 'react';
import { Anchor } from '@/atoms/Anchor';
export declare type AnchorTextProps = {
    text: string;
    href?: string;
    target?: ComponentProps<typeof Anchor>['target'];
};
export declare const AnchorText: ({ text, href, target }: AnchorTextProps) => JSX.Element;
//# sourceMappingURL=AnchorText.d.ts.map