import Link from "next/link";
import { ButtonOutlined, ButtonPrimary } from "../../ui/buttons/styled";
import { StyledQuearBigLogoBlue } from "../../ui/icons";
import { InputOutlined } from "../../ui/input/styled";
import { StepBackComponent } from "./step-back";
import {
  CotizaBackground,
  CotizaContainerInputs,
  CotizaContainerLogo,
  CotizaContainerMain,
  CotizaContainerTitle,
  CotizaRoot,
  CotizaTitle,
} from "./styled";

export function CotizaPage() {
  return (
    <CotizaBackground>
      <CotizaRoot>
        <StepBackComponent href="/" />
        <CotizaContainerMain>
          <CotizaContainerTitle>
            <CotizaTitle>
              Ingresá la patente de tu auto para comenzar la cotización
            </CotizaTitle>
          </CotizaContainerTitle>
          <CotizaContainerInputs>
            <InputOutlined placeholder="Ingresar patente" />
            <ButtonPrimary variant="dark">Continuar</ButtonPrimary>
            <Link href={"/cotiza/steps"}>
              <ButtonOutlined>Cotizar sin patente</ButtonOutlined>
            </Link>
          </CotizaContainerInputs>
        </CotizaContainerMain>
        <CotizaContainerLogo>
          <StyledQuearBigLogoBlue />
        </CotizaContainerLogo>
      </CotizaRoot>
    </CotizaBackground>
  );
}
