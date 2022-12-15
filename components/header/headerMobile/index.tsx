import { useState } from "react";
import {
  StyledHamburguer,
  StyledPhone,
  StyledQuearBigLogo,
  StyledQuearSmallLogo,
} from "../../../ui/icons";
import { ContactPopUpComponent } from "../../contact-popup";
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
  const [showContact, setShowContact] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }
  function toggleContact() {
    console.log("toggle");

    setShowContact(!showContact);
  }
  return props.type == "small" ? (
    <>
      <SmallHeaderMobile>
        <SideBarComponent
          toggleContact={toggleContact}
          show={showMenu}
          toggle={toggleMenu}
        />
        <StyledQuearSmallLogo></StyledQuearSmallLogo>
        <PhoneContainerSmall onClick={toggleContact}>
          <StyledPhone color="bg" width="19px" height="19px" />
        </PhoneContainerSmall>
        <ContactPopUpComponent
          show={showContact}
          toggle={toggleContact}
          type="small"
        />
      </SmallHeaderMobile>
      <HeaderDestkop />
    </>
  ) : (
    <>
      <BigHeaderMobile>
        <HamburguerContainer>
          <SideBarComponent
            toggleContact={toggleContact}
            show={showMenu}
            toggle={toggleMenu}
          />
        </HamburguerContainer>
        <StyledQuearBigLogo width="117px" height="45px" />
        <PhoneContainerBig onClick={toggleContact}>
          <StyledPhone color="bg" width="25px" height="25px" />
        </PhoneContainerBig>
        <ContactPopUpComponent
          show={showContact}
          toggle={toggleContact}
          type="big"
        />
      </BigHeaderMobile>
      <HeaderDestkop />
    </>
  );
}
