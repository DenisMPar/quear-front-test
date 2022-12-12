import { StyledCarMobile } from "../../ui/icons";
import { BodyPrimary } from "../../ui/text";
import { TextBox } from "../../ui/text-box/styled";
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
        <FaqComponent />
      </HomeAbout>
    </HomeRoot>
  );
}
