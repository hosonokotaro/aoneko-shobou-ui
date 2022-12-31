/// <reference types="react" />
import 'swiper/css';
import 'swiper/css/pagination';
import { ImageProps } from "../atoms/Image";
export declare type CarouselProps = {
    imageList: ImageProps[];
};
export declare const Carousel: ({ imageList }: CarouselProps) => JSX.Element;
