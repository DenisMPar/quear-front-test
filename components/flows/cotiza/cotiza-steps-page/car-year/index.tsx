import { Controller, useForm } from "react-hook-form";
import { useGetYears } from "../../../../../lib/hooks";
import { SubtitlePrimary } from "../../../../../ui/text";
import { AutocompleteComponent } from "../../../../autocomplete-select";
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
            <AutocompleteComponent
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
