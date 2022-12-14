import Carousel, { CellAlign } from "nuka-carousel";
import { ReactNode } from "react";
import {
  CarouselContainerExtraLarge,
  CarouselContainerLarge,
  CarouselContainerMedium,
  CarouselContainerSmall,
} from "./styled";
interface Props {
  slidesToShow?: number;
  children: ReactNode[];
  autoplay: boolean;
  autoplayInterval?: number;
  wrapAround: boolean;
  cellAlign: CellAlign;
  style?: any;
}

export function CarouselResponsiveComponent(props: Props) {
  return (
    <>
      {/* 390px */}
      <CarouselContainerSmall>
        <Carousel
          withoutControls={true}
          autoplay={props.autoplay}
          autoplayInterval={props.autoplayInterval}
          wrapAround={props.wrapAround}
          slidesToShow={1.5}
          cellSpacing={200}
          cellAlign={props.cellAlign}
          style={props.style}
        >
          {props.children}
        </Carousel>
      </CarouselContainerSmall>
      {/* 690px */}
      <CarouselContainerMedium>
        <Carousel
          withoutControls={true}
          autoplay={props.autoplay}
          autoplayInterval={props.autoplayInterval}
          wrapAround={props.wrapAround}
          slidesToShow={2.5}
          cellSpacing={16}
          cellAlign={props.cellAlign}
          style={props.style}
        >
          {props.children}
        </Carousel>
      </CarouselContainerMedium>
      {/* 890px */}
      <CarouselContainerLarge>
        <Carousel
          withoutControls={true}
          autoplay={props.autoplay}
          autoplayInterval={props.autoplayInterval}
          wrapAround={props.wrapAround}
          slidesToShow={3.5}
          cellSpacing={16}
          cellAlign={props.cellAlign}
          style={props.style}
        >
          {props.children}
        </Carousel>
      </CarouselContainerLarge>
      {/* 1190px */}
      <CarouselContainerExtraLarge>
        <Carousel
          withoutControls={true}
          autoplay={props.autoplay}
          autoplayInterval={props.autoplayInterval}
          wrapAround={props.wrapAround}
          slidesToShow={4.5}
          cellSpacing={16}
          cellAlign={props.cellAlign}
          style={props.style}
        >
          {props.children}
        </Carousel>
      </CarouselContainerExtraLarge>
    </>
  );
}
