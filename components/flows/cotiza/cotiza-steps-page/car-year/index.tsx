import { Controller, useForm } from "react-hook-form";
import { useGetYears } from "../../../../../lib/hooks";
import { SubtitlePrimary } from "../../../../../ui/text";
import { SelectComponent } from "../../../../select";
import { StepYearInputContainer, StepYearRoot } from "./styled";

export function YearStepComponent({ handleSelect }: any) {
  const { handleSubmit, reset, setValue, control } = useForm();
  const years = useGetYears();
  return (
    <StepYearRoot>
      <SubtitlePrimary>¿De qué año es tu auto?</SubtitlePrimary>
      <StepYearInputContainer>
        <Controller
          render={({ field }: any) => (
            <SelectComponent
              {...field}
              handleSelect={handleSelect}
              selectKey="año"
              ref={null}
              values={years}
              placeHolder={"Elegir año"}
            />
          )}
          name="TextField"
          control={control}
        />
      </StepYearInputContainer>
    </StepYearRoot>
  );
}
