import { Controller, useForm } from "react-hook-form";
import {
  StyledCarFiveDoors,
  StyledCarFourDoors,
  StyledCarThreeDoors,
} from "../../../ui/icons";
import { SubtitlePrimary } from "../../../ui/text";
import { SelectButtonsComponent } from "../../select/buttons";
import { StepFuelInputContainer, StepFuelRoot, StyledSubtitle } from "./styled";

export function FuelStepComponent({ handleSelect }: any) {
  const { handleSubmit, reset, setValue, control } = useForm();
  return (
    <StepFuelRoot>
      <StyledSubtitle>¿Usa GNC?</StyledSubtitle>
      <StepFuelInputContainer>
        <Controller
          render={({ field }: any) => (
            <SelectButtonsComponent
              {...field}
              handleSelect={handleSelect}
              selectKey="gnc"
              ref={null}
              values={[
                {
                  value: "Si",
                  text: "Si",
                },
                {
                  value: "No",
                  text: "Otro combustible",
                },
              ]}
            />
          )}
          name="TextField"
          control={control}
        />
      </StepFuelInputContainer>
    </StepFuelRoot>
  );
}
