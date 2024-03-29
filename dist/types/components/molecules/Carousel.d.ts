/// <reference types="react" />
import 'swiper/css';
import 'swiper/css/pagination';
import { ImageProps } from "../atoms/Image";
export type CarouselProps = {
    /** Atoms の Image component の props の配列を受け取る */
    imageList: ImageProps[];
};
export declare const Carousel: ({ imageList }: CarouselProps) => JSX.Element;
//# sourceMappingURL=Carousel.d.ts.map