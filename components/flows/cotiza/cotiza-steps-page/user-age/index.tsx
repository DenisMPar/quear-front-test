import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import {
  useGetDays,
  useGetMonths,
  useGetYears,
} from "../../../../../lib/hooks";
import { userCotizaData } from "../../../../../lib/state";
import { InputShadowed } from "../../../../../ui/input/styled";
import { SubtitlePrimary } from "../../../../../ui/text";
import { AutocompleteComponent } from "../../../../autocomplete-select";
import { SelectButtonsComponent } from "../../../../autocomplete-select/buttons";
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
  const [cotizaData, setCotizaData] = useRecoilState(userCotizaData);
  const years = useGetYears();
  const months = useGetMonths();
  const days = useGetDays();

  function onSubmit(submit: any) {
    const orderedSubmit = {
      Día: submit.dia,
      Mes: submit.mes,
      Año: submit.año,
      "Mayor de 25": submit.mayor,
    };
    setCotizaData({ ...cotizaData, userAge: submit });
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
            <Controller
              rules={{ required: true }}
              render={({ field }: any) => (
                <AutocompleteComponent
                  {...field}
                  selectKey="dia"
                  ref={null}
                  values={days}
                  placeHolder={"Día"}
                />
              )}
              name="dia"
              control={control}
            />
            {formState.errors.dia && (
              <StepAgeInputError> *completa este campo</StepAgeInputError>
            )}
          </StyledInputContainer>
          <StyledInputContainer>
            <Controller
              rules={{ required: true }}
              render={({ field }: any) => (
                <AutocompleteComponent
                  {...field}
                  selectKey="mes"
                  ref={null}
                  values={months}
                  placeHolder={"Mes"}
                />
              )}
              name="mes"
              control={control}
            />
            {formState.errors.mes && (
              <StepAgeInputError> *completa este campo</StepAgeInputError>
            )}
          </StyledInputContainer>
          <StyledInputContainer>
            <Controller
              rules={{ required: true }}
              render={({ field }: any) => (
                <AutocompleteComponent
                  {...field}
                  selectKey="año"
                  ref={null}
                  values={years}
                  placeHolder={"Año"}
                />
              )}
              name="año"
              control={control}
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
