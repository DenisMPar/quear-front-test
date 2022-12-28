import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { InputShadowed } from "../../../ui/input/styled";
import { SubtitlePrimary } from "../../../ui/text";
import { SelectComponent } from "../../select";
import { SelectButtonsComponent } from "../../select/buttons";
import {
  StepAgeInputError,
  StyledForm,
  StyledFormContainer,
  StyledFormSelectContainer,
  StyledInputContainer,
  StyledSubtitle,
} from "./styled";

export function AgeStepComponent({ handleSelect }: any) {
  const { handleSubmit, getValues, control, register, formState } = useForm();

  function onSubmit(submit: any) {
    const orderedSubmit = {
      Día: submit.dia,
      Mes: submit.mes,
      Año: submit.año,
      "Mayor de 25": submit.mayor,
    };

    handleSelect("nacimiento", orderedSubmit);
  }

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
      <SubtitlePrimary>Fecha de nacimiento</SubtitlePrimary>
      <StyledFormContainer>
        <StyledForm action="" onSubmit={handleSubmit(onSubmit)}>
          <StyledInputContainer>
            <InputShadowed
              {...register("dia", { required: true })}
              placeholder="Día"
            />
            {formState.errors.dia && (
              <StepAgeInputError> *completa este campo</StepAgeInputError>
            )}
          </StyledInputContainer>
          <StyledInputContainer>
            <InputShadowed
              {...register("mes", { required: true })}
              placeholder="Mes"
            />
            {formState.errors.mes && (
              <StepAgeInputError> *completa este campo</StepAgeInputError>
            )}
          </StyledInputContainer>
          <StyledInputContainer>
            <InputShadowed
              {...register("año", { required: true })}
              placeholder="Año"
            />
            {formState.errors.año && (
              <StepAgeInputError> *completa este campo</StepAgeInputError>
            )}
          </StyledInputContainer>
          <div>
            <StyledFormSelectContainer>
              <StyledSubtitle>¿El conductor es mayor a 25 años?</StyledSubtitle>
              <Controller
                render={({ field }: any) => (
                  <SelectButtonsComponent
                    horizontal
                    {...field}
                    selectKey="mayor"
                    ref={null}
                    values={[
                      {
                        value: "Si",
                        text: "Si",
                      },
                      {
                        value: "No",
                        text: "No",
                      },
                    ]}
                  />
                )}
                name="mayor"
                control={control}
              />
            </StyledFormSelectContainer>
          </div>
        </StyledForm>
      </StyledFormContainer>
    </div>
  );
}
