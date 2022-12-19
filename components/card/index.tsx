import { ButtonOutlined, ButtonPrimary } from "../../ui/buttons/styled";
import { BodyPrimary, SubtitleTerciary } from "../../ui/text";
import {
  CardArrow,
  CardBody,
  CardCompany,
  CardCompanyLogo,
  CardContainerButtons,
  CardContainerMain,
  CardContainerSubtitle,
  CardContainerTitle,
  CardRoot,
  CardTop,
} from "./styled";

interface Props {
  active?: boolean;
}

export function CardComponent(props: Props) {
  return (
    <CardRoot active={props.active}>
      <CardTop>Contra todo riesgo</CardTop>
      <CardBody>
        <CardCompany>
          <CardCompanyLogo />
          <BodyPrimary>
            Provincia <br /> Seguros
          </BodyPrimary>
        </CardCompany>
        <CardContainerMain>
          <CardContainerTitle>
            <SubtitleTerciary as={"p"}>Pagas por mes:</SubtitleTerciary>
            <h2 style={{ margin: 0, fontSize: "40px", fontWeight: "700" }}>
              $2300
            </h2>
          </CardContainerTitle>
          <CardContainerSubtitle>
            <BodyPrimary>
              Te lo aseguramos a <b>$1.186.000</b>
            </BodyPrimary>
          </CardContainerSubtitle>
        </CardContainerMain>
        <CardContainerButtons>
          <ButtonPrimary variant="dark">Contratar Online</ButtonPrimary>
          <ButtonOutlined>Ver detalle</ButtonOutlined>
        </CardContainerButtons>
      </CardBody>
      <CardArrow active={props.active} />
    </CardRoot>
  );
}
