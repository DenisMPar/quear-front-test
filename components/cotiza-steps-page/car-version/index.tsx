import { Controller, useForm } from "react-hook-form";
import { SubtitlePrimary } from "../../../ui/text";
import { SelectComponent } from "../../select";
import { StepVersionInputContainer, StepVersionRoot } from "./styled";

export function VersionStepComponent({ handleSelect }: any) {
  const { handleSubmit, reset, setValue, control } = useForm();
  return (
    <StepVersionRoot>
      <SubtitlePrimary>¿Y la versión?</SubtitlePrimary>
      <StepVersionInputContainer>
        <Controller
          render={({ field }: any) => (
            <SelectComponent
              {...field}
              handleSelect={handleSelect}
              selectKey="version"
              ref={null}
              values={[
                "1.0 Ltz At L/21",
                "1.0 Ltz L/21",
                "1.0 Plus Ltz L/21",
                "1.0 Plus Premier I L/19",
              ]}
              placeHolder={"Elegir versión"}
            />
          )}
          name="TextField"
          control={control}
        />
      </StepVersionInputContainer>
    </StepVersionRoot>
  );
}
