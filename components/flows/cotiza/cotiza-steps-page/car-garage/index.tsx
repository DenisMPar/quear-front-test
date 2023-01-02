import { Controller, useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { userCotizaData } from "../../../../../lib/state";
import { SubtitlePrimary } from "../../../../../ui/text";
import { SelectButtonsComponent } from "../../../../select/buttons";
import {
  StepGarageInputContainer,
  StepGarageRoot,
  StyledSubtitle,
} from "./styled";

export function GarageStepComponent({ handleSelect }: any) {
  const { handleSubmit, reset, setValue, control } = useForm();
  const [cotizaData, setCotizaData] = useRecoilState(userCotizaData);
  function onSelect(key: string, value: any) {
    setCotizaData({ ...cotizaData, sleep: value });
    handleSelect(key, value);
  }
  return (
    <StepGarageRoot>
      <StyledSubtitle>¿Dónde duerme?</StyledSubtitle>
      <StepGarageInputContainer>
        <Controller
          render={({ field }: any) => (
            <SelectButtonsComponent
              {...field}
              handleSelect={onSelect}
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
