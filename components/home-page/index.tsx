import {
  StyledCarDesktop,
  StyledCarMobile,
  StyledQuearBigLogo,
} from "../../ui/icons";
import { SancorSVGIcon } from "../../ui/icons/svg/sancor-icon";
import { CarouselComponent } from "../carousel";
import { FaqComponent } from "../faq";
import { Footer } from "../footer";
import { HeaderMobile } from "../header/headerMobile";
import {
  HomeAbout,
  HomeAboutBackground,
  HomeAboutCarouselContainer,
  HomeAboutCarouselSlide,
  HomeAboutText,
  HomeAboutTextBox,
  HomeButton,
  HomeMain,
  HomeMainBackground,
  HomeMainCarDesktopContainer,
  HomeMainCarMobileContainer,
  HomeMainLogoContainer,
  HomeMainQuearLogoContainer,
  HomeMainTextContainer,
  HomeRoot,
  HomeSancorIcon,
  HomeSubTitle,
  HomeTitle,
} from "./styled";

export function HomePage() {
  return (
    <HomeRoot>
      <HomeMainBackground>
        <HomeMain>
          <HomeMainLogoContainer>
            <HomeMainCarMobileContainer>
              <StyledCarMobile />
            </HomeMainCarMobileContainer>
            <HomeMainCarDesktopContainer>
              <StyledCarDesktop />
            </HomeMainCarDesktopContainer>
          </HomeMainLogoContainer>
          <HomeMainTextContainer>
            <HomeMainQuearLogoContainer>
              <StyledQuearBigLogo width="220px" height="85px" />
            </HomeMainQuearLogoContainer>
            <HomeTitle>¡Hacé todo online!</HomeTitle>
            <HomeSubTitle>
              Cotizá y comprá el mejor seguro para tu auto.
            </HomeSubTitle>
            <HomeButton variant="light">COTIZAR</HomeButton>
          </HomeMainTextContainer>
        </HomeMain>
      </HomeMainBackground>
      <HomeAboutBackground>
        <HomeAbout>
          <div>
            <HomeAboutTextBox>
              <HomeAboutText>
                <b>Quear</b> es el canal digital de Orange Asesores de Seguros
                S.A, broker conformado por un equipo de profesionales con{" "}
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
                <HomeAboutCarouselSlide>
                  <HomeSancorIcon />
                </HomeAboutCarouselSlide>
                <HomeAboutCarouselSlide>
                  <HomeSancorIcon />
                </HomeAboutCarouselSlide>
                <HomeAboutCarouselSlide>
                  <HomeSancorIcon />
                </HomeAboutCarouselSlide>
                <HomeAboutCarouselSlide>
                  <HomeSancorIcon />
                </HomeAboutCarouselSlide>
                <HomeAboutCarouselSlide>
                  <HomeSancorIcon />
                </HomeAboutCarouselSlide>
                <HomeAboutCarouselSlide>
                  <HomeSancorIcon />
                </HomeAboutCarouselSlide>
              </CarouselComponent>
            </HomeAboutCarouselContainer>

            <FaqComponent />
          </div>
        </HomeAbout>
      </HomeAboutBackground>
    </HomeRoot>
  );
}
