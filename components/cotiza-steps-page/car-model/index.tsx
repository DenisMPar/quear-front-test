import { Controller, useForm } from "react-hook-form";
import { SubtitlePrimary } from "../../../ui/text";
import { SelectComponent } from "../../select";
import { StepModelInputContainer, StepModelRoot } from "./styled";

export function ModelStepComponent({ handleSelect }: any) {
  const { handleSubmit, reset, setValue, control } = useForm();
  return (
    <StepModelRoot>
      <SubtitlePrimary>¿Y el modelo?</SubtitlePrimary>
      <StepModelInputContainer>
        <Controller
          render={({ field }: any) => (
            <SelectComponent
              {...field}
              handleSelect={handleSelect}
              selectKey="modelo"
              ref={null}
              values={["Camaro", "Cruze", "Equinox", "Onix"]}
              placeHolder={"Elegir modelo"}
            />
          )}
          name="TextField"
          control={control}
        />
      </StepModelInputContainer>
    </StepModelRoot>
  );
}
