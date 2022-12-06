import { StyledCarMobile } from "../../ui/icons";
import { HeaderComponent } from "../header";
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
      <HeaderComponent type="big" />
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
