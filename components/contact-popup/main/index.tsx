import { ButtonPrimaryBig } from "../../../ui/buttons/styled";
import { StyledMail, StyledPhone, StyledWhatsApp } from "../../../ui/icons";
import { BodyTerciary } from "../../../ui/text";
import {
  ContactPopUpButtonText,
  ContactPopUpSubTitle,
  ContactPopUpTextContainer,
} from "./styled";
interface Props {
  toggleSendMail: () => void;
}
export function ContactPopUpMainComponent(props: Props) {
  return (
    <>
      <ContactPopUpTextContainer>
        <ContactPopUpSubTitle>Atención telefónica</ContactPopUpSubTitle>
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
          <ContactPopUpButtonText>¡Chateá con nosotros!</ContactPopUpButtonText>
        </ButtonPrimaryBig>
      </ContactPopUpTextContainer>
      <ContactPopUpTextContainer>
        <ContactPopUpSubTitle>Mail</ContactPopUpSubTitle>
        <ButtonPrimaryBig variant="dark" onClick={props.toggleSendMail}>
          <StyledMail color="bg" />
          <ContactPopUpButtonText>contacto@seguros.com</ContactPopUpButtonText>
        </ButtonPrimaryBig>
      </ContactPopUpTextContainer>
    </>
  );
}
