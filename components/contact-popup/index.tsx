import { useState } from "react";
import { useTransition } from "react-spring";
import { StyledClose, StyledQuearBigLogoBlue } from "../../ui/icons";
import { ContactPopUpMainComponent } from "./main";
import { ContactPopUpSendMailComponent } from "./send-mail";
import {
  ContactPopUpCloseContainer,
  ContactPopUpContentContainer,
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
  function toggleSendMail() {
    setShowSendMail(!showSendMail);
  }

  const menuTranstition = useTransition(props.show, {
    from: { opacity: 0, bottom: `-100%` },
    enter: { opacity: 1, bottom: `-0%` },
    leave: { opacity: 0, bottom: `-100%` },
  });

  return (
    <>
      {menuTranstition((style, item) =>
        item ? (
          <ContactPopUpRoot style={style}>
            <ContactPopUpContentContainer>
              <ContactPopUpTitleContainer>
                <ContactPopUpTitle>
                  ¿Necesitás ayuda con algo?
                </ContactPopUpTitle>
                <ContactPopUpCloseContainer onClick={props.toggle}>
                  <StyledClose color="dark-ligth" height="24px" width="24px" />
                </ContactPopUpCloseContainer>
              </ContactPopUpTitleContainer>
              {showSendMail ? (
                <ContactPopUpSendMailComponent
                  toggleSendMail={toggleSendMail}
                />
              ) : (
                <ContactPopUpMainComponent toggleSendMail={toggleSendMail} />
              )}
            </ContactPopUpContentContainer>
            <ContactPopUpLogoContainer>
              <StyledQuearBigLogoBlue />
            </ContactPopUpLogoContainer>
          </ContactPopUpRoot>
        ) : null
      )}
    </>
  );
};
