import Image from "next/image";
import { CarouselComponent } from "../../carousel";
import { FaqComponent } from "../../faq";
import { HomeSancorIcon } from "../styled";
import {
  CarouselDesktop,
  CarouselMobile,
  HomeAbout,
  HomeAboutCarouselContainer,
  HomeAboutCarouselSlide,
  HomeAboutText,
  HomeAboutTextBox,
} from "./styled";

const carouselIconsMobile = [
  <HomeSancorIcon key="1" />,
  <Image
    width={71}
    height={21}
    src={"/rus-logo-mobile.png"}
    key="2"
    alt="rus-logo-mobile"
  />,
  <Image
    width={100}
    height={25}
    src={"/san-cristobal-logo-mobile.png"}
    alt="san-cristobal-logo-mobile"
    key="3"
  />,
  <HomeSancorIcon key="4" />,
  <Image
    width={71}
    height={21}
    src={"/rus-logo-mobile.png"}
    key="5"
    alt="rus-logo-mobile"
  />,
  <Image
    width={100}
    height={25}
    src={"/san-cristobal-logo-mobile.png"}
    alt="san-cristobal-logo-mobile"
    key="6"
  />,
];
const carouselIconsDesktop = [
  <HomeSancorIcon key="1" />,
  <Image
    width={184}
    height={54}
    src={"/rus-logo.png"}
    key="2"
    alt="rus-logo"
  />,
  <Image
    width={280}
    height={60}
    src={"/san-cristobal-logo.png"}
    alt="san-cristobal-logo"
    key="3"
  />,
  <HomeSancorIcon key="4" />,
  <Image
    width={184}
    height={54}
    src={"/rus-logo.png"}
    key="5"
    alt="rus-logo"
  />,
  <Image
    width={280}
    height={60}
    src={"/san-cristobal-logo.png"}
    alt="san-cristobal-logo"
    key="6"
  />,
];

export function HomeAboutComponent() {
  return (
    <HomeAbout>
      <div>
        <HomeAboutTextBox id="about">
          <HomeAboutText>
            <b>Quear</b> es el canal digital de Orange Asesores de Seguros S.A,
            broker conformado por un equipo de profesionales con{" "}
            <b>+ de 20 años de experiencia </b>en el mercado asegurador.
          </HomeAboutText>
        </HomeAboutTextBox>
        <HomeAboutCarouselContainer>
          <CarouselMobile>
            <CarouselComponent autoplay={true} infinite={true} slidesToShow={3}>
              {carouselIconsMobile.map((icon, index) => {
                return (
                  <HomeAboutCarouselSlide key={index}>
                    {icon}
                  </HomeAboutCarouselSlide>
                );
              })}
            </CarouselComponent>
          </CarouselMobile>
          <CarouselDesktop>
            <CarouselComponent
              slidesToSlide={1}
              autoplay={true}
              infinite={true}
              slidesToShow={3}
            >
              {carouselIconsDesktop.map((icon, index) => {
                return (
                  <HomeAboutCarouselSlide key={index}>
                    {icon}
                  </HomeAboutCarouselSlide>
                );
              })}
            </CarouselComponent>
          </CarouselDesktop>
        </HomeAboutCarouselContainer>
        <FaqComponent id="faq" />
      </div>
    </HomeAbout>
  );
}
