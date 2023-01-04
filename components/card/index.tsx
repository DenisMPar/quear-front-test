import { DatoPoliza, DatosSeguro } from "../../lib/mock-values";
import { ButtonOutlined, ButtonPrimary } from "../../ui/buttons/styled";
import { BodyPrimary, SubtitleTerciary } from "../../ui/text";
import {
  CardArrow,
  CardBody,
  CardCompany,
  CardCompanyLogo,
  CardContainer,
  CardContainerButtons,
  CardContainerMain,
  CardContainerSubtitle,
  CardContainerTitle,
  CardRoot,
  CardTop,
} from "./styled";

interface Props {
  index: number;
  data: DatoPoliza;
  active?: boolean;
  onDetail: (props?: any) => void;
}

export function CardComponent(props: Props) {
  const colors = {
    "Contra todo riesgo": "var(--primary-dark)",
    Totales: "var(--primary-ligth)",
    "Responsabilidad civil": "var(--terciary-dark)",
    "Terceros completo": "var(--primary)",
  };
  const key = Object.keys(colors).find((el) => el == props.data.type);
  const formatter = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  });

  return (
    <CardRoot>
      <CardContainer active={props.active}>
        <CardTop
          style={{ backgroundColor: key ? colors[key] : colors.Totales }}
        >
          {props.data.type}
        </CardTop>
        <CardBody>
          <CardCompany>
            <CardCompanyLogo />
            <BodyPrimary>
              {props.data.company} <br /> Seguros
            </BodyPrimary>
          </CardCompany>
          <CardContainerMain>
            <CardContainerTitle>
              <SubtitleTerciary as={"p"}>Pagas por mes:</SubtitleTerciary>
              <h2 style={{ margin: 0, fontSize: "40px", fontWeight: "700" }}>
                {formatter.format(props.data.fee)}
              </h2>
            </CardContainerTitle>
            <CardContainerSubtitle>
              <BodyPrimary>
                Te lo aseguramos a <b>{formatter.format(props.data.total)}</b>
              </BodyPrimary>
            </CardContainerSubtitle>
          </CardContainerMain>
          <CardContainerButtons>
            <ButtonPrimary variant="dark">Contratar Online</ButtonPrimary>
            <ButtonOutlined onClick={() => props.onDetail(props.index)}>
              Ver detalle
            </ButtonOutlined>
          </CardContainerButtons>
        </CardBody>
      </CardContainer>
      <CardArrow active={props.active} />
    </CardRoot>
  );
}
