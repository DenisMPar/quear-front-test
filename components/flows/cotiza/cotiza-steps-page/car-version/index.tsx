import { Controller, useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { useGetCarVersion } from "../../../../../lib/hooks";
import { userCotizaData } from "../../../../../lib/state";
import { SubtitlePrimary } from "../../../../../ui/text";
import { AutocompleteComponent } from "../../../../autocomplete-select";
import { StepVersionInputContainer, StepVersionRoot } from "./styled";

export function VersionStepComponent({ handleSelect }: any) {
  const { handleSubmit, reset, setValue, control } = useForm();
  const [cotizaData, setCotizaData] = useRecoilState(userCotizaData);
  const { carVersionNames, carVersionWithId } = useGetCarVersion(
    cotizaData.carBrandId,
    cotizaData.carModelId
  );
  function onSelect(key: string, value: any) {
    const element = carVersionWithId.find((el) => {
      return el.name == value;
    });

    element &&
      setCotizaData({ ...cotizaData, carVersionId: parseInt(element.id) });
    handleSelect(key, value);
  }

  return (
    <StepVersionRoot>
      <SubtitlePrimary>¿Y la versión?</SubtitlePrimary>
      <StepVersionInputContainer>
        <Controller
          render={({ field }: any) => (
            <AutocompleteComponent
              {...field}
              handleSelect={onSelect}
              selectKey="version"
              ref={null}
              values={carVersionNames}
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
