import { Controller, useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { useGetCarBrand } from "../../../../../lib/hooks";
import { userCotizaData } from "../../../../../lib/state";
import { InputShadowed } from "../../../../../ui/input/styled";
import { SubtitlePrimary } from "../../../../../ui/text";
import { SelectButtonsComponent } from "../../../../autocomplete-select/buttons";
import {
  StepCarForm,
  StepCarInfoContainerForm,
  StepCarInfoContainerInputs,
  StepCarInfoContainerTitle,
  StepCarInfoRoot,
  StepCarSubtitle,
} from "./styled";

export function CarInfoStepComponent({ handleSelect }: any) {
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
    <StepCarInfoRoot>
      <StepCarInfoContainerTitle>
        <SubtitlePrimary>Eso! Encontraste tu seguro!</SubtitlePrimary>
        <StepCarSubtitle>
          Para contratarlo, necesitamos algunos datos más...
        </StepCarSubtitle>
      </StepCarInfoContainerTitle>
      <StepCarInfoContainerForm>
        <SubtitlePrimary>¿Tu patente está en trámite?</SubtitlePrimary>
        <StepCarForm action="">
          <Controller
            render={({ field }: any) => (
              <SelectButtonsComponent
                {...field}
                horizontal
                handleSelect={onSelect}
                selectKey="marca"
                ref={null}
                placeHolder="Elegir marca"
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
          <StepCarInfoContainerInputs>
            <InputShadowed placeholder="Numero de chasis" />
            <InputShadowed placeholder="Numero de motor" />
          </StepCarInfoContainerInputs>
        </StepCarForm>
      </StepCarInfoContainerForm>
    </StepCarInfoRoot>
  );
}
