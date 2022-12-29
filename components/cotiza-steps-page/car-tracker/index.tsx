import { Controller, useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { userCotizaData } from "../../../lib/state";
import { SubtitlePrimary } from "../../../ui/text";
import { SelectButtonsComponent } from "../../select/buttons";
import {
  StepTrackerInputContainer,
  StepTrackerRoot,
  StyledSubtitle,
} from "./styled";

export function TrackerStepComponent({ handleSelect }: any) {
  const { handleSubmit, reset, setValue, control } = useForm();
  const [cotizaData, setCotizaData] = useRecoilState(userCotizaData);
  function onSelect(key: string, value: any) {
    setCotizaData({ ...cotizaData, locator: value == "Si" });
    handleSelect(key, value);
  }
  return (
    <StepTrackerRoot>
      <StyledSubtitle>¿Tiene localizador?</StyledSubtitle>
      <StepTrackerInputContainer>
        <Controller
          render={({ field }: any) => (
            <SelectButtonsComponent
              {...field}
              handleSelect={onSelect}
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
