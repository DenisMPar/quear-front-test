import { useRouter } from "next/router";
import { ButtonPrimaryBig } from "../../ui/buttons/styled";
import { StyledQuearBigLogo } from "../../ui/icons";
import { InputPassword } from "../../ui/input";
import { InputOutlinedBig } from "../../ui/input/styled";
import {
  DashboardButtonContainer,
  DashboardContentContainer,
  DashboardHeader,
  DashboardInputsContainer,
  DashboardLabelContainer,
  DashboardLink,
  DashboardLoginContainer,
  DashboardRoot,
  DashboardSubtitles,
  DashboardTitle,
} from "./styled";

export function DashboardLoginPage() {
  const router = useRouter();
  function handleOnClick() {
    router.push("/dashboard/home");
  }

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
              <ButtonPrimaryBig variant="dark" onClick={handleOnClick}>
                Siguiente
              </ButtonPrimaryBig>
            </DashboardButtonContainer>
          </DashboardInputsContainer>
        </DashboardLoginContainer>
      </DashboardContentContainer>
    </DashboardRoot>
  );
}
