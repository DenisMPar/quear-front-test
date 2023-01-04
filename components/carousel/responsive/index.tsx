import { ReactNode } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "./styled";

interface Props {
  children: ReactNode[];
}
export function CarouselResponsiveComponent(props: Props) {
  return (
    <Carousel
      responsive={responsive}
      swipeable={true}
      draggable={true}
      showDots={false}
      ssr={false} // means to render carousel on server-side.
      infinite={false}
      autoPlay={false}
      keyBoardControl={true}
      arrows={false}
    >
      {props.children}
    </Carousel>
  );
}
