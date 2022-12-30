import { Controller, useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { userCotizaData } from "../../../../../lib/state";
import {
  StyledCarFiveDoors,
  StyledCarFourDoors,
  StyledCarThreeDoors,
} from "../../../../../ui/icons";
import { SubtitlePrimary } from "../../../../../ui/text";
import { SelectButtonsComponent } from "../../../../select/buttons";
import { StepDoorsInputContainer, StepRoot } from "./styled";

export function DoorsStepComponent({ handleSelect }: any) {
  const { handleSubmit, reset, setValue, control } = useForm();
  const [cotizaData, setCotizaData] = useRecoilState(userCotizaData);
  function onSelect(key: string, value: any) {
    setCotizaData({ ...cotizaData, doors: value });
    handleSelect(key, value);
  }
  return (
    <StepRoot>
      <SubtitlePrimary>¿Cuantas puertas tiene?</SubtitlePrimary>
      <StepDoorsInputContainer>
        <Controller
          render={({ field }: any) => (
            <SelectButtonsComponent
              {...field}
              handleSelect={onSelect}
              selectKey="puertas"
              ref={null}
              values={[
                {
                  icon: <StyledCarThreeDoors />,
                  value: 3,
                  text: "Tres puertas",
                },
                {
                  icon: <StyledCarFourDoors />,
                  value: "4",
                  text: "Cuatro puertas",
                },
                {
                  icon: <StyledCarFiveDoors />,
                  value: "5",
                  text: "Cinco puertas",
                },
              ]}
            />
          )}
          name="TextField"
          control={control}
        />
      </StepDoorsInputContainer>
    </StepRoot>
  );
}
