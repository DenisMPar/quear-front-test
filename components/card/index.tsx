import { fontSize } from "@mui/system";
import { ButtonOutlined, ButtonPrimary } from "../../ui/buttons/styled";
import { BodyPrimary, SubtitleTerciary } from "../../ui/text";
import {
  CardTop,
  CardRoot,
  CardCompany,
  CardBody,
  CardContainerButtons,
  CardContainerMain,
  CardContainerTitle,
  CardContainerSubtitle,
  CardCompanyLogo,
} from "./styled";

export function CardComponent() {
  return (
    <CardRoot>
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
    </CardRoot>
  );
}
