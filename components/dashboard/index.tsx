import { ButtonPrimary, ButtonPrimaryBig } from "../../ui/buttons/styled";
import { StyledQuearBigLogo } from "../../ui/icons";
import { InputPassword } from "../../ui/input";
import { InputOutlined, InputOutlinedBig } from "../../ui/input/styled";
import {
  DashboardButtonContainer,
  DashboardContentContainer,
  DashboardHeader,
  DashboardInputsContainer,
  DashboardLabelContainer,
  DashboardLink,
  DashboardLinkColored,
  DashboardLoginContainer,
  DashboardRoot,
  DashboardSubtitles,
  DashboardTitle,
} from "./styled";

export function DashboardHomePage() {
  return (
    <DashboardRoot>
      <DashboardHeader>
        <StyledQuearBigLogo width="281px" height="108px" />
      </DashboardHeader>
      <DashboardContentContainer>
        <DashboardTitle>Inicio de sesión</DashboardTitle>
        <DashboardLoginContainer>
          <DashboardInputsContainer>
            <DashboardLabelContainer>
              <DashboardSubtitles>Email</DashboardSubtitles>
              <InputOutlinedBig placeholder="fgomez@quear.com.ar" />
            </DashboardLabelContainer>
            <DashboardLabelContainer>
              <DashboardSubtitles>Contraseña</DashboardSubtitles>
              <InputPassword name="password" placeholder="*****" />
            </DashboardLabelContainer>
            <DashboardLink>Olvidaste tu contraseña?</DashboardLink>
            <DashboardButtonContainer>
              <ButtonPrimaryBig variant="dark">Siguiente</ButtonPrimaryBig>
              <DashboardLinkColored>
                Crear una cuenta nueva
              </DashboardLinkColored>
            </DashboardButtonContainer>
          </DashboardInputsContainer>
        </DashboardLoginContainer>
      </DashboardContentContainer>
    </DashboardRoot>
  );
}
