import { StyledInfo } from "../../../../../ui/icons";
import { BodyTerciary, SubtitleSecondary } from "../../../../../ui/text";
import {
  PolicyInfoContainer,
  PolicyInfoIconContainer,
  PolicyInfoTextContainer,
  PolicyRoot,
  PolicyTitle,
} from "./styled";

interface Props {
  pictures: boolean;
}
export function PolicyComponent(props: Props) {
  return (
    <PolicyRoot>
      {props.pictures ? (
        <PolicyInfoTextContainer>
          <PolicyTitle
            style={{ textAlign: "center", maxWidth: "256px", margin: "0 auto" }}
          >
            Dentro de 72 horas te vamos a enviar tú póliza lista para usar a tu
            email.
          </PolicyTitle>
        </PolicyInfoTextContainer>
      ) : (
        <PolicyInfoContainer>
          <PolicyInfoIconContainer style={{ color: "white" }}>
            <StyledInfo width={"30px"} height={"30px"} />
          </PolicyInfoIconContainer>
          <PolicyInfoTextContainer>
            <PolicyTitle>
              Recordá que para poder generar tu póliza necesitamos las fotos de
              tu auto.
            </PolicyTitle>
            <BodyTerciary>
              Podés subirlas en la sección “Código de seguimiento” de la página.
              Una vez que completes este paso, en 72 horas te entregaremos tu
              póliza.
            </BodyTerciary>
          </PolicyInfoTextContainer>
        </PolicyInfoContainer>
      )}
      <SubtitleSecondary style={{ textAlign: "center" }}>
        <b>¡Gracias por confiar en nosotros!</b>
      </SubtitleSecondary>
    </PolicyRoot>
  );
}
