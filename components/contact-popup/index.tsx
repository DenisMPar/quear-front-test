import { useState } from "react";
import { useTransition } from "react-spring";
import { getPath } from "../../lib";
import { ButtonPrimary, ButtonPrimaryBig } from "../../ui/buttons/styled";
import {
  StyledClose,
  StyledPhone,
  StyledQuearBigLogoBlue,
  StyledWhatsApp,
} from "../../ui/icons";
import { InputShadowed, TextAreaShadowed } from "../../ui/input/styled";
import { BodyTerciary } from "../../ui/text";
import {
  ContactPopUpButtonText,
  ContactPopUpCloseContainer,
  ContactPopUpContentContainer,
  ContactPopUpLogoContainer,
  ContactPopUpRoot,
  ContactPopUpSendMailContainer,
  ContactPopUpSubTitle,
  ContactPopUpTextAreaContainer,
  ContactPopUpTextContainer,
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
  const path = getPath();
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
                <ContactPopUpSendMailContainer>
                  <InputShadowed placeholder="Nombre"></InputShadowed>
                  <InputShadowed placeholder="Mail"></InputShadowed>
                  <ContactPopUpTextAreaContainer>
                    <TextAreaShadowed placeholder="Consulta"></TextAreaShadowed>
                  </ContactPopUpTextAreaContainer>
                  <div>
                    <ButtonPrimary variant="dark">Enviar</ButtonPrimary>
                    <p
                      style={{ margin: 0, textAlign: "center" }}
                      onClick={toggleSendMail}
                    >
                      atras
                    </p>
                  </div>
                </ContactPopUpSendMailContainer>
              ) : (
                <>
                  <ContactPopUpTextContainer>
                    <ContactPopUpSubTitle>
                      Atención telefónica
                    </ContactPopUpSubTitle>
                    <BodyTerciary>
                      Lunes a viernes de 9am a 6pm. <br /> Sábados de 9am a 2pm.
                    </BodyTerciary>
                    <ButtonPrimaryBig variant="dark">
                      <StyledPhone color="bg" />
                      <ContactPopUpButtonText>4793-4566</ContactPopUpButtonText>
                    </ButtonPrimaryBig>
                  </ContactPopUpTextContainer>
                  <ContactPopUpTextContainer>
                    <ContactPopUpSubTitle>Whatsapp</ContactPopUpSubTitle>
                    <BodyTerciary>
                      Lunes a viernes de 9am a 6pm. <br /> Sábados de 9am a 2pm.
                    </BodyTerciary>
                    <ButtonPrimaryBig variant="dark">
                      <StyledWhatsApp color="bg" />
                      <ContactPopUpButtonText>
                        ¡Chateá con nosotros!
                      </ContactPopUpButtonText>
                    </ButtonPrimaryBig>
                  </ContactPopUpTextContainer>
                  <ContactPopUpTextContainer>
                    <ContactPopUpSubTitle>Mail</ContactPopUpSubTitle>
                    <ButtonPrimaryBig variant="dark" onClick={toggleSendMail}>
                      <StyledPhone color="bg" />
                      <ContactPopUpButtonText>
                        contacto@seguros.com
                      </ContactPopUpButtonText>
                    </ButtonPrimaryBig>
                  </ContactPopUpTextContainer>
                </>
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
