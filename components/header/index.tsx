import {
  StyledHamburguer,
  StyledPhone,
  StyledQuearBigLogo,
  StyledQuearSmallLogo,
} from "../../ui/icons";
import {
  BigHeader,
  HamburguerContainer,
  PhoneContainerBig,
  PhoneContainerSmall,
  SmallHeader,
} from "./styled";

interface Props {
  type: "small" | "big";
}

export function HeaderComponent(props: Props) {
  return props.type == "small" ? (
    <SmallHeader>
      <StyledHamburguer />
      <StyledQuearSmallLogo></StyledQuearSmallLogo>
      <PhoneContainerSmall>
        <StyledPhone color="bg" width="19px" height="19px" />
      </PhoneContainerSmall>
    </SmallHeader>
  ) : (
    <BigHeader>
      <HamburguerContainer>
        <StyledHamburguer />
      </HamburguerContainer>
      <StyledQuearBigLogo></StyledQuearBigLogo>
      <PhoneContainerBig>
        <StyledPhone color="bg" width="25px" height="25px" />
      </PhoneContainerBig>
    </BigHeader>
  );
}
