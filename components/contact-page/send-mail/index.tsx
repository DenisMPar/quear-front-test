import { ButtonPrimary } from "../../../ui/buttons/styled";
import { InputShadowed, TextAreaShadowed } from "../../../ui/input/styled";
import {
  ContactPageSendButtonContainer,
  ContactPageSendMailContainer,
  ContactPageTextAreaContainer,
} from "./styled";

export function ContactSendMailComponent() {
  return (
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
  );
}
