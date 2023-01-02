import { Controller, useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { useGetCarBrand } from "../../../../../lib/hooks";
import { userCotizaData } from "../../../../../lib/state";
import { SubtitlePrimary } from "../../../../../ui/text";
import { AutocompleteGroupedComponent } from "../../../../autocomplete-select/grouped";
import { StepBrandInputContainer, StepBrandRoot } from "./styled";

export function BrandStepComponent({ handleSelect }: any) {
  const { handleSubmit, reset, setValue, control } = useForm();
  const { brandNames, brandWithId } = useGetCarBrand();
  const [cotizaData, setCotizaData] = useRecoilState(userCotizaData);
  function onSelect(key: string, value: any) {
    const element = brandWithId.find((el) => {
      return el.nombre == value;
    });

    element &&
      setCotizaData({ ...cotizaData, carBrandId: parseInt(element.id) });
    handleSelect(key, value);
  }
  return (
    <StepBrandRoot>
      <SubtitlePrimary>¿De qué marca es tu auto?</SubtitlePrimary>
      <StepBrandInputContainer>
        <Controller
          render={({ field }: any) => (
            <AutocompleteGroupedComponent
              {...field}
              handleSelect={onSelect}
              selectKey="marca"
              ref={null}
              placeHolder="Elegir marca"
              values={brandNames}
            />
          )}
          name="TextField"
          control={control}
        />
      </StepBrandInputContainer>
    </StepBrandRoot>
  );
}
