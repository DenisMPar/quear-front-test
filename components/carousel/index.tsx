import Carousel, { CellAlign } from "nuka-carousel";
import { ReactNode } from "react";
interface Props {
  slidesToShow?: number;
  children: ReactNode[];
  autoplay: boolean;
  autoplayInterval?: number;
  wrapAround: boolean;
  cellAlign: CellAlign;
  style?: any;
}

export function CarouselComponent(props: Props) {
  return (
    <Carousel
      withoutControls={true}
      autoplay={props.autoplay}
      autoplayInterval={props.autoplayInterval}
      wrapAround={props.wrapAround}
      slidesToShow={props.slidesToShow}
      cellSpacing={16}
      cellAlign={props.cellAlign}
      style={props.style}
    >
      {props.children.map((el, index) => {
        return (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            key={index.toString()}
          >
            {el}
          </div>
        );
      })}
    </Carousel>
  );
}
