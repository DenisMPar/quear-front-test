import { useState } from "react";
import { useTransition } from "react-spring";
import { StyledClose, StyledQuearBigLogoBlue } from "../../ui/icons";
import { ContactPopUpMainComponent } from "./main";
import { ContactPopUpSendMailComponent } from "./send-mail";
import {
  ContactPopUpCloseContainer,
  ContactPopUpContentContainer,
  ContactPopUpDrawer,
  ContactPopUpLogoContainer,
  ContactPopUpRoot,
  ContactPopUpTitle,
  ContactPopUpTitleContainer,
} from "./styled";

type props = {
  show: boolean;
  type: "big" | "small";
  toggle: () => any;
};

export const ContactPopUpComponent = (props: props) => {
  const [showSendMail, setShowSendMail] = useState(false);

  const toggleDrawer = () => {
    props.toggle();
  };
  function toggleSendMail() {
    setShowSendMail(!showSendMail);
  }

  return (
    <ContactPopUpDrawer
      sx={{ zIndex: "1300" }}
      anchor="bottom"
      open={props.show}
      onClose={toggleDrawer}
      ModalProps={{
        keepMounted: true,
      }}
    >
      <ContactPopUpRoot>
        <ContactPopUpContentContainer>
          <ContactPopUpTitleContainer>
            <ContactPopUpTitle>¿Necesitás ayuda con algo?</ContactPopUpTitle>
            <ContactPopUpCloseContainer onClick={props.toggle}>
              <StyledClose color="dark-ligth" height="24px" width="24px" />
            </ContactPopUpCloseContainer>
          </ContactPopUpTitleContainer>
          {showSendMail ? (
            <ContactPopUpSendMailComponent toggleSendMail={toggleSendMail} />
          ) : (
            <ContactPopUpMainComponent toggleSendMail={toggleSendMail} />
          )}
        </ContactPopUpContentContainer>
        <ContactPopUpLogoContainer>
          <StyledQuearBigLogoBlue />
        </ContactPopUpLogoContainer>
      </ContactPopUpRoot>
    </ContactPopUpDrawer>
  );
};
