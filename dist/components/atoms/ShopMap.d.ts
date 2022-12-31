/// <reference types="react" />
import { LoaderOptions } from '@googlemaps/js-api-loader';
export declare type ShopMapProps = {
    loaderOptions: LoaderOptions;
    height: string;
};
export declare const ShopMap: ({ loaderOptions, height }: ShopMapProps) => JSX.Element;
