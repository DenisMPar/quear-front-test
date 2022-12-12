import { StyledCarMobile } from "../../ui/icons";
import { RusSVGIcon } from "../../ui/icons/svg/rio-uruguay-icon";
import { SanCristobalSVGIcon } from "../../ui/icons/svg/san-cristobal-icon";
import { SancorSVGIcon } from "../../ui/icons/svg/sancor-icon";
import { BodyPrimary } from "../../ui/text";
import { TextBox } from "../../ui/text-box/styled";
import { CarouselComponent } from "../carousel";
import { FaqComponent } from "../faq";
import { HeaderMobile } from "../header/headerMobile";
import {
  HomeAbout,
  HomeButton,
  HomeMain,
  HomeRoot,
  HomeSubTitle,
  HomeAboutTextBox,
  HomeTitle,
} from "./styled";

export function HomePage() {
  return (
    <HomeRoot>
      <HeaderMobile type="big" />
      <HomeMain>
        <StyledCarMobile />
        <HomeTitle>¡Hacé todo online!</HomeTitle>
        <HomeSubTitle>
          Cotizá y comprá el mejor <br /> seguro para tu auto
        </HomeSubTitle>
        <HomeButton variant="light">COTIZAR</HomeButton>
      </HomeMain>
      <HomeAbout>
        <HomeAboutTextBox>
          <BodyPrimary>
            <b>Quear</b> es el canal digital de Orange Asesores de Seguros S.A,
            broker conformado por un equipo de profesionales con{" "}
            <b>+ de 20 años de experiencia </b>en el mercado asegurador.
          </BodyPrimary>
        </HomeAboutTextBox>
        <CarouselComponent
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
        </CarouselComponent>
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
