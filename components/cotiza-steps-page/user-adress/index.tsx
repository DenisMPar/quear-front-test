import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { ButtonPrimary } from "../../../ui/buttons/styled";
import { InputShadowed } from "../../../ui/input/styled";
import { SubtitlePrimary } from "../../../ui/text";
import { SelectComponent } from "../../select";
import {
  StepAddressContainerButton,
  StepAddressContainerInput,
  StepAddressInputError,
  StyledForm,
} from "./styled";

export function AddressStepComponent({ handleSelect }: any) {
  const { handleSubmit, reset, setValue, control, register, formState } =
    useForm();

  function onSubmit(submit: any) {
    handleSelect("direccion", submit);
  }

  useEffect(() => {
    console.log(formState.errors);
  }, [formState]);

  return (
    <div
      style={{
        color: "var(--primary)",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <SubtitlePrimary>¿Donde vivis?</SubtitlePrimary>
      <div style={{ width: "100%", maxWidth: "343px" }}>
        <StyledForm action="" onSubmit={handleSubmit(onSubmit)}>
          <StepAddressContainerInput>
            <Controller
              rules={{ required: true }}
              render={({ field }: any) => (
                <SelectComponent
                  {...field}
                  selectKey="provincia"
                  ref={null}
                  values={["Mendoza", "Bs as", "Cordoba"]}
                  placeHolder={"Provincia"}
                />
              )}
              name="provincia"
              control={control}
            />
            {formState.errors.provincia && (
              <StepAddressInputError>
                {" "}
                *completa este campo
              </StepAddressInputError>
            )}
          </StepAddressContainerInput>
          <StepAddressContainerInput>
            <Controller
              rules={{ required: true }}
              render={({ field }: any) => (
                <SelectComponent
                  {...field}
                  selectKey="departamento"
                  ref={null}
                  values={["mgue", "san rafael", "guaymallen"]}
                  placeHolder={"departamento"}
                />
              )}
              name="departamento"
              control={control}
            />
            {formState.errors.departamento && (
              <StepAddressInputError>
                {" "}
                *completa este campo
              </StepAddressInputError>
            )}
          </StepAddressContainerInput>
          <StepAddressContainerInput>
            <InputShadowed
              {...register("postal", { required: true })}
              placeholder="Código postal"
            />
            {formState.errors.postal && (
              <StepAddressInputError>
                *completa este campo
              </StepAddressInputError>
            )}
          </StepAddressContainerInput>
          <StepAddressContainerButton>
            <ButtonPrimary variant="dark">Siguiente paso</ButtonPrimary>
          </StepAddressContainerButton>
        </StyledForm>
      </div>
    </div>
  );
}
