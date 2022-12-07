import {
  StyledHamburguer,
  StyledPhone,
  StyledQuearBigLogo,
  StyledQuearSmallLogo,
} from "../../../ui/icons";
import { HeaderDestkop } from "../header-desktop";
import {
  BigHeaderMobile,
  HamburguerContainer,
  PhoneContainerBig,
  PhoneContainerSmall,
  SmallHeaderMobile,
} from "./styled";

interface Props {
  type: "small" | "big";
}

export function HeaderComponent(props: Props) {
  return props.type == "small" ? (
    <>
      <SmallHeaderMobile>
        <StyledHamburguer />
        <StyledQuearSmallLogo></StyledQuearSmallLogo>
        <PhoneContainerSmall>
          <StyledPhone color="bg" width="19px" height="19px" />
        </PhoneContainerSmall>
      </SmallHeaderMobile>
      <HeaderDestkop />
    </>
  ) : (
    <>
      <BigHeaderMobile>
        <HamburguerContainer>
          <StyledHamburguer />
        </HamburguerContainer>
        <StyledQuearBigLogo></StyledQuearBigLogo>
        <PhoneContainerBig>
          <StyledPhone color="bg" width="25px" height="25px" />
        </PhoneContainerBig>
      </BigHeaderMobile>
      <HeaderDestkop />
    </>
  );
}
