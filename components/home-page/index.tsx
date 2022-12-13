import {
  StyledCarDesktop,
  StyledCarMobile,
  StyledQuearBigLogo,
} from "../../ui/icons";
import { RusSVGIcon } from "../../ui/icons/svg/rio-uruguay-icon";
import { SanCristobalSVGIcon } from "../../ui/icons/svg/san-cristobal-icon";
import { SancorSVGIcon } from "../../ui/icons/svg/sancor-icon";
import { FaqComponent } from "../faq";
import { HeaderMobile } from "../header/headerMobile";
import {
  HomeAbout,
  HomeAboutCarousel,
  HomeAboutText,
  HomeAboutTextBox,
  HomeButton,
  HomeMain,
  HomeMainCarDesktopContainer,
  HomeMainCarMobileContainer,
  HomeMainLogoContainer,
  HomeMainQuearLogoContainer,
  HomeMainTextContainer,
  HomeRoot,
  HomeSubTitle,
  HomeTitle,
} from "./styled";

export function HomePage() {
  return (
    <HomeRoot>
      <HeaderMobile type="big" />
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
            Cotizá y comprá el mejor seguro para tu auto
          </HomeSubTitle>
          <HomeButton variant="light">COTIZAR</HomeButton>
        </HomeMainTextContainer>
      </HomeMain>
      <HomeAbout>
        <HomeAboutTextBox>
          <HomeAboutText>
            <b>Quear</b> es el canal digital de Orange Asesores de Seguros S.A,
            broker conformado por un equipo de profesionales con{" "}
            <b>+ de 20 años de experiencia </b>en el mercado asegurador.
          </HomeAboutText>
        </HomeAboutTextBox>

        <HomeAboutCarousel
          cellAlign="center"
          autoplay={true}
          wrapAround={true}
          slidesToShow={3}
        >
          <SancorSVGIcon />
          <SanCristobalSVGIcon />
          <RusSVGIcon />
          <SancorSVGIcon />
          <SanCristobalSVGIcon />
          <RusSVGIcon />
        </HomeAboutCarousel>

        <FaqComponent />
      </HomeAbout>
      <div
        style={{
          height: "467px",
          backgroundColor: "var(--bg-secondary)",
          border: "none",
        }}
      >
        Footer
      </div>
    </HomeRoot>
  );
}
