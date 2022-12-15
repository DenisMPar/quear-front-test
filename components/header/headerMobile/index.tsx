import { useState } from "react";
import {
  StyledHamburguer,
  StyledPhone,
  StyledQuearBigLogo,
  StyledQuearSmallLogo,
} from "../../../ui/icons";
import { SideBarComponent } from "../../sidebar";
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

export function HeaderMobile(props: Props) {
  const [showMenu, setShowMenu] = useState(false);
  function toggleMenu() {
    console.log("toggle");

    setShowMenu(!showMenu);
  }
  return props.type == "small" ? (
    <>
      <SmallHeaderMobile>
        <SideBarComponent show={showMenu} toggle={toggleMenu} />
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
          <SideBarComponent show={showMenu} toggle={toggleMenu} />
        </HamburguerContainer>
        <StyledQuearBigLogo width="117px" height="45px" />
        <PhoneContainerBig>
          <StyledPhone color="bg" width="25px" height="25px" />
        </PhoneContainerBig>
      </BigHeaderMobile>
      <HeaderDestkop />
    </>
  );
}
