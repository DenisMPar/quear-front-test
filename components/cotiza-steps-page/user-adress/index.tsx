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
  StepAddressRoot,
  StyledForm,
} from "./styled";

export function AddressStepComponent({ handleSelect }: any) {
  const { handleSubmit, reset, setValue, control, register, formState } =
    useForm();

  function onSubmit(submit: any) {
    const orderedSubmit = {
      Provincia: submit.provincia,
      Departamento: submit.departamento,
      "Código postal": submit.postal,
    };

    handleSelect("direccion", orderedSubmit);
  }
  useEffect(() => {
    console.log(formState.errors);
  }, [formState]);
  return (
    <StepAddressRoot>
      <SubtitlePrimary>¿Donde vivis?</SubtitlePrimary>
      <div style={{ width: "100%", maxWidth: "600px" }}>
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
                  values={["Mendoza", "San rafael", "Guaymallen"]}
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
              {...register("postal", {
                required: true,
                pattern: /^[0-9]+$/,
                maxLength: 4,
              })}
              placeholder="Código postal"
            />
            {formState.errors.postal &&
              (formState.errors.postal.type == "required" ? (
                <StepAddressInputError>
                  *completa este campo
                </StepAddressInputError>
              ) : (
                <StepAddressInputError>
                  *Ingresa un código de 4 números. Ej: 5600
                </StepAddressInputError>
              ))}
          </StepAddressContainerInput>
          <StepAddressContainerButton>
            <ButtonPrimary variant="dark">Siguiente paso</ButtonPrimary>
          </StepAddressContainerButton>
        </StyledForm>
      </div>
    </StepAddressRoot>
  );
}
