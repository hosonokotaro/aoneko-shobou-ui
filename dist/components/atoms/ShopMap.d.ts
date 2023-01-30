/// <reference types="react" />
import { LoaderOptions } from '@googlemaps/js-api-loader';
export declare type ShopMapProps = {
    /** see https://developers.google.com/maps/documentation/javascript/overview?hl=ja */
    loaderOptions: LoaderOptions;
    /** ShopMap の高さを明示的に指定する必要があるために受け取る */
    height: string;
};
export declare const ShopMap: ({ loaderOptions, height }: ShopMapProps) => JSX.Element;
