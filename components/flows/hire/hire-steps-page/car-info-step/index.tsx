import { Controller, useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { useGetCarBrand } from "../../../../../lib/hooks";
import { userCotizaData } from "../../../../../lib/state";
import { StyledInfo } from "../../../../../ui/icons";
import { InputShadowed } from "../../../../../ui/input/styled";
import { SubtitlePrimary } from "../../../../../ui/text";
import { SelectButtonsComponent } from "../../../../autocomplete-select/buttons";
import { ModalComponent } from "../../../../../ui/modal";
import {
  StepCarForm,
  StepCarInfoContainerForm,
  StepCarInfoContainerInfo,
  StepCarInfoContainerInputs,
  StepCarInfoContainerTitle,
  StepCarInfoRoot,
  StepCarInfoText,
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
      <StepCarInfoContainerInfo>
        <StyledInfo />
        <ModalComponent
          text={
            "Podés encontrar estos datos en la cédula verde. Si estás cotizando un 0km y todavía no tenes tu cédula verde, podés intentar pedirle estos datos a la consecionaria."
          }
          title={"¿Dónde encuentro el número de chasis y de motor?"}
        >
          <StepCarInfoText>¿Dónde encuentro esta información?</StepCarInfoText>
        </ModalComponent>
      </StepCarInfoContainerInfo>
    </StepCarInfoRoot>
  );
}
