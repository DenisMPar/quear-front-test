import { useRouter } from "next/router";
import { ButtonPrimaryBig } from "../../ui/buttons/styled";
import { StyledQuearBigLogo } from "../../ui/icons";
import { InputPassword } from "../../ui/input";
import { InputOutlinedBig } from "../../ui/input/styled";
import { Controller, useForm } from "react-hook-form";

import {
  DashboardButtonContainer,
  DashboardContentContainer,
  DashboardError,
  DashboardHeader,
  DashboardInputsContainer,
  DashboardLabelContainer,
  DashboardLink,
  DashboardLoginContainer,
  DashboardRoot,
  DashboardSubtitles,
  DashboardTitle,
} from "./styled";
import { fetchDashboadLogin } from "../../services/back-office";
import { useState } from "react";
import { BodyPrimary, SubtitlePrimary, SubtitleTerciary } from "../../ui/text";
import { saveUserBO } from "../../lib/api";

export function DashboardLogin() {
  const router = useRouter();
  const [error, setError] = useState(false);
  const { handleSubmit, reset, setValue, control } = useForm();

  async function handleForm(data: any) {
    const auth = await fetchDashboadLogin(data);

    if (auth.success) {
      setError(false);
      saveUserBO(auth.success.result);
      router.push("/dashboard/polizas");
    } else {
      setError(auth.message);
    }
  }

  return (
    <DashboardRoot>
      <DashboardHeader>
        <StyledQuearBigLogo width="281px" height="108px" />
      </DashboardHeader>
      <DashboardContentContainer>
        <DashboardTitle>Inicio de sesión</DashboardTitle>
        <DashboardLoginContainer onSubmit={handleSubmit(handleForm)}>
          <DashboardInputsContainer>
            <Controller
              control={control}
              name="email"
              render={({ field }: any) => (
                <DashboardLabelContainer {...field}>
                  <DashboardSubtitles>Email</DashboardSubtitles>
                  <InputOutlinedBig
                    ref={null}
                    placeholder="fgomez@quear.com.ar"
                  />
                </DashboardLabelContainer>
              )}
            ></Controller>
            <Controller
              control={control}
              name="password"
              render={({ field }: any) => (
                <DashboardLabelContainer {...field}>
                  <DashboardSubtitles>Contraseña</DashboardSubtitles>
                  <InputPassword
                    ref={null}
                    name="password"
                    placeholder="*****"
                  />
                </DashboardLabelContainer>
              )}
            ></Controller>
            <DashboardLink>Olvidaste tu contraseña?</DashboardLink>
            <DashboardButtonContainer>
              <ButtonPrimaryBig variant="dark">Siguiente</ButtonPrimaryBig>
            </DashboardButtonContainer>
            {error && <DashboardError>{error}</DashboardError>}
          </DashboardInputsContainer>
        </DashboardLoginContainer>
      </DashboardContentContainer>
    </DashboardRoot>
  );
}
