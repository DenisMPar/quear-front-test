import { Controller, useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { userCotizaData } from "../../../../../lib/state";
import {
  StyledCarFiveDoors,
  StyledCarFourDoors,
  StyledCarThreeDoors,
} from "../../../../../ui/icons";
import { SubtitlePrimary } from "../../../../../ui/text";
import { SelectButtonsComponent } from "../../../../autocomplete-select/buttons";
import { StepFuelInputContainer, StepFuelRoot, StyledSubtitle } from "./styled";

export function FuelStepComponent({ handleSelect }: any) {
  const { handleSubmit, reset, setValue, control } = useForm();
  const [cotizaData, setCotizaData] = useRecoilState(userCotizaData);
  function onSelect(key: string, value: any) {
    setCotizaData({ ...cotizaData, gnc: value == "Si" });
    handleSelect(key, value);
  }
  return (
    <StepFuelRoot>
      <StyledSubtitle>¿Usa GNC?</StyledSubtitle>
      <StepFuelInputContainer>
        <Controller
          render={({ field }: any) => (
            <SelectButtonsComponent
              type="submit"
              {...field}
              handleSelect={onSelect}
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
