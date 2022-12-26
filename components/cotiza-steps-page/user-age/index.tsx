import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { InputShadowed } from "../../../ui/input/styled";
import { SubtitlePrimary } from "../../../ui/text";
import { SelectComponent } from "../../select";
import { SelectButtonsComponent } from "../../select/buttons";
import {
  StyledForm,
  StyledFormContainer,
  StyledFormSelectContainer,
  StyledSubtitle,
} from "./styled";

export function AgeStepComponent({ handleSelect }: any) {
  const { handleSubmit, reset, setValue, control, register } = useForm();

  function onSubmit(submit: any) {
    handleSelect("nacimiento", submit);
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
          <InputShadowed
            {...register("dia", { required: true })}
            placeholder="Día"
          />
          <InputShadowed
            {...register("mes", { required: true })}
            placeholder="Mes"
          />
          <InputShadowed
            {...register("año", { required: true })}
            placeholder="Año"
          />
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
