import { ButtonPrimary } from "../../../ui/buttons/styled";
import { InputShadowed, TextAreaShadowed } from "../../../ui/input/styled";
import {
  ContactPopUpSendMailContainer,
  ContactPopUpTextAreaContainer,
} from "./styled";

interface Props {
  toggleSendMail: () => void;
}
export function ContactPopUpSendMailComponent(props: Props) {
  return (
    <ContactPopUpSendMailContainer>
      <InputShadowed placeholder="Nombre"></InputShadowed>
      <InputShadowed placeholder="Mail"></InputShadowed>
      <ContactPopUpTextAreaContainer>
        <TextAreaShadowed placeholder="Consulta"></TextAreaShadowed>
      </ContactPopUpTextAreaContainer>
      <div>
        <ButtonPrimary variant="dark">Enviar</ButtonPrimary>
        <p
          style={{ margin: 0, textAlign: "center", marginTop: "16px" }}
          onClick={props.toggleSendMail}
        >
          Cancelar
        </p>
      </div>
    </ContactPopUpSendMailContainer>
  );
}
