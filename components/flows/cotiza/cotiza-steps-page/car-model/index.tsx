import { Controller, useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { useGetCarModel } from "../../../../../lib/hooks";
import { userCotizaData } from "../../../../../lib/state";
import { SubtitlePrimary } from "../../../../../ui/text";
import { SelectComponent } from "../../../../select";
import { StepModelInputContainer, StepModelRoot } from "./styled";

export function ModelStepComponent({ handleSelect }: any) {
  const { handleSubmit, reset, setValue, control } = useForm();
  const [cotizaData, setCotizaData] = useRecoilState(userCotizaData);
  const { carModelNames, carModelWithId } = useGetCarModel(
    cotizaData.carBrandId
  );

  function onSelect(key: string, value: any) {
    const element = carModelWithId.find((el) => {
      return el.name == value;
    });

    element &&
      setCotizaData({ ...cotizaData, carModelId: parseInt(element.id) });
    handleSelect(key, value);
  }
  return (
    <StepModelRoot>
      <SubtitlePrimary>¿Y el modelo?</SubtitlePrimary>
      <StepModelInputContainer>
        <Controller
          render={({ field }: any) => (
            <SelectComponent
              {...field}
              handleSelect={onSelect}
              selectKey="modelo"
              ref={null}
              values={carModelNames}
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
