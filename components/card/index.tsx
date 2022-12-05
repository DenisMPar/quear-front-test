import { fontSize } from "@mui/system";
import { OutlinedButton, PrimaryButton } from "../../ui/buttons/styled";
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
          <p
            style={{
              margin: 0,
              fontWeight: "700",
              fontSize: "12px",
              color: `var(--dark-ligth)`,
            }}
          >
            Provincia <br /> Seguros
          </p>
        </CardCompany>
        <CardContainerMain>
          <CardContainerTitle>
            <p style={{ margin: 0, fontSize: "16px" }}>Pagas por mes:</p>
            <h2 style={{ margin: 0, fontSize: "40px", fontWeight: "700" }}>
              $2300
            </h2>
          </CardContainerTitle>
          <CardContainerSubtitle>
            <p style={{ margin: 0, fontSize: "14px" }}>
              Te lo aseguramos a <b>$1.186.000</b>
            </p>
          </CardContainerSubtitle>
        </CardContainerMain>
        <CardContainerButtons>
          <PrimaryButton variant="dark">Contratar Online</PrimaryButton>
          <OutlinedButton>Ver detalle</OutlinedButton>
        </CardContainerButtons>
      </CardBody>
    </CardRoot>
  );
}
