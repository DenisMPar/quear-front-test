import { Controller, useForm } from "react-hook-form";
import { SubtitlePrimary } from "../../../ui/text";
import { SelectButtonsComponent } from "../../select/buttons";
import {
  StepGarageInputContainer,
  StepGarageRoot,
  StyledSubtitle,
} from "./styled";

export function GarageStepComponent({ handleSelect }: any) {
  const { handleSubmit, reset, setValue, control } = useForm();
  return (
    <StepGarageRoot>
      <StyledSubtitle>¿Dónde duerme?</StyledSubtitle>
      <StepGarageInputContainer>
        <Controller
          render={({ field }: any) => (
            <SelectButtonsComponent
              {...field}
              handleSelect={handleSelect}
              selectKey="garage"
              ref={null}
              values={[
                {
                  value: "En garage",
                  text: "En garage",
                },
                {
                  value: "En la calle",
                  text: "En la calle",
                },
              ]}
            />
          )}
          name="TextField"
          control={control}
        />
      </StepGarageInputContainer>
    </StepGarageRoot>
  );
}
