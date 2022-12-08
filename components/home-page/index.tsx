import { StyledCarMobile } from "../../ui/icons";
import { HeaderMobile } from "../header/headerMobile";
import {
  HomeButton,
  HomeMain,
  HomeRoot,
  HomeSubTitle,
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
    </HomeRoot>
  );
}
