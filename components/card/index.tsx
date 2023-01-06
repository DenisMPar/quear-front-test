import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { formatMoney } from "../../lib/functions";
import { DatoPoliza, DatosSeguro } from "../../lib/mock-values";
import { userHireData } from "../../lib/state";
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
interface Colors {
  [key: string]: any;
}

export function CardComponent(props: Props) {
  const router = useRouter();
  const [hireData, setHireData] = useRecoilState(userHireData);
  const colors: Colors = {
    "Contra todo riesgo": "var(--primary-dark)",
    Totales: "var(--primary-ligth)",
    "Responsabilidad civil": "var(--terciary-dark)",
    "Terceros completo": "var(--primary)",
  };
  const key = Object.keys(colors).find((el) => el == props.data.type);

  function handleHire() {
    setHireData({ ...hireData, policy: props.data });
    router.push("/hire/steps");
  }
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
                {formatMoney(props.data.fee)}
              </h2>
            </CardContainerTitle>
            <CardContainerSubtitle>
              <BodyPrimary>
                Te lo aseguramos a <b>{formatMoney(props.data.total)}</b>
              </BodyPrimary>
            </CardContainerSubtitle>
          </CardContainerMain>
          <CardContainerButtons>
            <ButtonPrimary onClick={handleHire} variant="dark">
              Contratar Online
            </ButtonPrimary>
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
