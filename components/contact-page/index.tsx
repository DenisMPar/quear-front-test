import { ButtonOutlinedBig, ButtonPrimary } from "../../ui/buttons/styled";
import { StyledPhone, StyledWhatsApp } from "../../ui/icons";
import { InputShadowed, TextAreaShadowed } from "../../ui/input/styled";
import { BodyTerciary } from "../../ui/text";
import {
  ContactPageButtonText,
  ContactPageContentContainer,
  ContactPageRoot,
  ContactPageSendButtonContainer,
  ContactPageSendMailContainer,
  ContactPageSubTitle,
  ContactPageTextAreaContainer,
  ContactPageTextContainer,
  ContactPageTitle,
  ContactPageTitleContainer,
} from "./styled";

export function ContactPage() {
  return (
    <ContactPageRoot>
      <ContactPageContentContainer>
        <ContactPageTitleContainer>
          <ContactPageTitle>¿Necesitás ayuda con algo?</ContactPageTitle>
        </ContactPageTitleContainer>
        <ContactPageTextContainer>
          <ContactPageSubTitle>Atención telefónica</ContactPageSubTitle>
          <BodyTerciary>
            Lunes a viernes de 9am a 6pm. <br /> Sábados de 9am a 2pm.
          </BodyTerciary>
          <ButtonOutlinedBig>
            <StyledPhone color="primary" />
            <ContactPageButtonText>4793-4566</ContactPageButtonText>
          </ButtonOutlinedBig>
        </ContactPageTextContainer>
        <ContactPageTextContainer>
          <ContactPageSubTitle>Whatsapp</ContactPageSubTitle>
          <BodyTerciary>
            Lunes a viernes de 9am a 6pm. <br /> Sábados de 9am a 2pm.
          </BodyTerciary>
          <ButtonOutlinedBig>
            <StyledWhatsApp color="primary" />
            <ContactPageButtonText>¡Chateá con nosotros!</ContactPageButtonText>
          </ButtonOutlinedBig>
        </ContactPageTextContainer>
        <ContactPageTextContainer>
          <ContactPageSubTitle>Mail</ContactPageSubTitle>
          <ButtonOutlinedBig>
            <StyledPhone color="primary" />
            <ContactPageButtonText>contacto@seguros.com</ContactPageButtonText>
          </ButtonOutlinedBig>
        </ContactPageTextContainer>
      </ContactPageContentContainer>
      <ContactPageSendMailContainer>
        <InputShadowed placeholder="Nombre"></InputShadowed>
        <InputShadowed type="email" placeholder="Mail"></InputShadowed>
        <ContactPageTextAreaContainer>
          <TextAreaShadowed placeholder="Consulta"></TextAreaShadowed>
        </ContactPageTextAreaContainer>
        <ContactPageSendButtonContainer>
          <ButtonPrimary variant="dark">Enviar</ButtonPrimary>
        </ContactPageSendButtonContainer>
      </ContactPageSendMailContainer>
    </ContactPageRoot>
  );
}
