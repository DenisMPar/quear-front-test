import { Controller, useForm } from "react-hook-form";
import { SubtitlePrimary } from "../../../ui/text";
import { SelectButtonsComponent } from "../../select/buttons";
import {
  StepTrackerInputContainer,
  StepTrackerRoot,
  StyledSubtitle,
} from "./styled";

export function TrackerStepComponent({ handleSelect }: any) {
  const { handleSubmit, reset, setValue, control } = useForm();
  return (
    <StepTrackerRoot>
      <StyledSubtitle>¿Tiene localizador?</StyledSubtitle>
      <StepTrackerInputContainer>
        <Controller
          render={({ field }: any) => (
            <SelectButtonsComponent
              {...field}
              handleSelect={handleSelect}
              selectKey="tracker"
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
          name="TextField"
          control={control}
        />
      </StepTrackerInputContainer>
    </StepTrackerRoot>
  );
}
