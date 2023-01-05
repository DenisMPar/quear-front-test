import { Controller, useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { userHireData } from "../../../../../lib/state";
import { ButtonPrimary } from "../../../../../ui/buttons/styled";
import { StyledInfo } from "../../../../../ui/icons";
import { InputShadowed } from "../../../../../ui/input/styled";
import { ModalComponent } from "../../../../../ui/modal";
import { SubtitlePrimary } from "../../../../../ui/text";
import { SelectButtonsComponent } from "../../../../autocomplete-select/buttons";
import {
  StepCarForm,
  StepCarInfoContainerForm,
  StepCarInfoContainerInfo,
  StepCarInfoContainerInputs,
  StepCarInfoContainerTitle,
  StepCarInfoError,
  StepCarInfoInputWrapper,
  StepCarInfoRoot,
  StepCarInfoText,
  StepCarSubtitle,
} from "./styled";

export function CarInfoStepComponent({ handleSelect }: any) {
  const { handleSubmit, reset, setValue, control, register, watch, formState } =
    useForm();

  const [hireData, setHireData] = useRecoilState(userHireData);
  const patente = watch("patente");

  function onSubmit(data: any) {
    handleSelect("carInfo", data);
  }
  return (
    <StepCarInfoRoot>
      <StepCarInfoContainerTitle>
        <SubtitlePrimary>Eso! Encontraste tu seguro!</SubtitlePrimary>
        <StepCarSubtitle>
          Para contratarlo, necesitamos algunos datos más...
        </StepCarSubtitle>
      </StepCarInfoContainerTitle>
      <StepCarInfoContainerForm>
        <SubtitlePrimary>¿Tu patente está en trámite?</SubtitlePrimary>
        <StepCarForm action="" onSubmit={handleSubmit(onSubmit)}>
          <Controller
            render={({ field }: any) => (
              <SelectButtonsComponent
                type="button"
                {...field}
                horizontal
                selectKey="marca"
                ref={null}
                placeHolder="Elegir marca"
                values={[
                  {
                    value: "Si",
                    text: "Si",
                    active: patente == "Si" ? true : false,
                  },
                  {
                    value: "No",
                    text: "No",
                    active: patente == "No" ? true : false,
                  },
                ]}
              />
            )}
            name="Patente en trámite"
            control={control}
          />
          <StepCarInfoContainerInputs>
            <StepCarInfoInputWrapper>
              <InputShadowed
                {...register("Número de chasis", { required: true })}
                placeholder="Número de chasis"
              />
              {formState.errors.chasis && (
                <StepCarInfoError>*Completa este campo</StepCarInfoError>
              )}
            </StepCarInfoInputWrapper>
            <StepCarInfoInputWrapper>
              <InputShadowed
                {...register("Número de motor", { required: true })}
                placeholder="Número de motor"
              />{" "}
              {formState.errors.motor && (
                <StepCarInfoError>*Completa este campo</StepCarInfoError>
              )}
            </StepCarInfoInputWrapper>
          </StepCarInfoContainerInputs>
          <ButtonPrimary variant="dark">Continuar</ButtonPrimary>
        </StepCarForm>
      </StepCarInfoContainerForm>
      <StepCarInfoContainerInfo>
        <StyledInfo />
        <ModalComponent
          text={
            "Podés encontrar estos datos en la cédula verde. Si estás cotizando un 0km y todavía no tenes tu cédula verde, podés intentar pedirle estos datos a la consecionaria."
          }
          title={"¿Dónde encuentro el número de chasis y de motor?"}
        >
          <StepCarInfoText>¿Dónde encuentro esta información?</StepCarInfoText>
        </ModalComponent>
      </StepCarInfoContainerInfo>
    </StepCarInfoRoot>
  );
}
