import {
  StyledCarDesktop,
  StyledCarMobile,
  StyledQuearBigLogo,
} from "../../../ui/icons";
import {
  HomeButton,
  HomeMain,
  HomeMainCarDesktopContainer,
  HomeMainCarMobileContainer,
  HomeMainLogoContainer,
  HomeMainQuearLogoContainer,
  HomeMainTextContainer,
  HomeSubTitle,
  HomeTitle,
} from "./styled";

export function HomeMainComponent() {
  return (
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
  );
}
