import { ReactNode } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
interface Props {
  slidesToShow: number;
  children: ReactNode[];
  autoplay: boolean;
  autoplayInterval?: number;
  infinite: boolean;
  style?: any;
}

export function CarouselComponent(props: Props) {
  return (
    <Carousel
      responsive={{
        allScreens: {
          breakpoint: { max: 4000, min: 0 },
          items: 3,
        },
      }}
      swipeable={false}
      draggable={false}
      showDots={false}
      ssr={true} // means to render carousel on server-side.
      infinite={props.infinite}
      autoPlay={props.autoplay}
      autoPlaySpeed={props.autoplayInterval}
      arrows={false}
    >
      {props.children}
    </Carousel>
  );
}
