import { CarouselComponent } from "../../carousel";
import { FaqComponent } from "../../faq";
import { HomeSancorIcon } from "../styled";
import {
  HomeAbout,
  HomeAboutCarouselContainer,
  HomeAboutCarouselSlide,
  HomeAboutText,
  HomeAboutTextBox,
} from "./styled";

const carouselIcons = [
  <HomeSancorIcon key="1" />,
  <HomeSancorIcon key="2" />,
  <HomeSancorIcon key="3" />,
  <HomeSancorIcon key="4" />,
  <HomeSancorIcon key="5" />,
  <HomeSancorIcon key="6" />,
];

export function HomeAboutComponent() {
  return (
    <HomeAbout>
      <div>
        <HomeAboutTextBox>
          <HomeAboutText>
            <b>Quear</b> es el canal digital de Orange Asesores de Seguros S.A,
            broker conformado por un equipo de profesionales con{" "}
            <b>+ de 20 años de experiencia </b>en el mercado asegurador.
          </HomeAboutText>
        </HomeAboutTextBox>
        <HomeAboutCarouselContainer>
          <CarouselComponent
            cellAlign="center"
            autoplay={true}
            wrapAround={true}
            slidesToShow={3}
          >
            {carouselIcons.map((icon, index) => {
              return (
                <HomeAboutCarouselSlide key={index}>
                  {icon}
                </HomeAboutCarouselSlide>
              );
            })}
          </CarouselComponent>
        </HomeAboutCarouselContainer>
        <FaqComponent />
      </div>
    </HomeAbout>
  );
}
