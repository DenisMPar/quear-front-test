import { Controller, useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { useGetCarModel } from "../../../lib/hooks";
import { userCotizaData } from "../../../lib/state";
import { SubtitlePrimary } from "../../../ui/text";
import { SelectComponent } from "../../select";
import { StepModelInputContainer, StepModelRoot } from "./styled";

export function ModelStepComponent({ handleSelect }: any) {
  const { handleSubmit, reset, setValue, control } = useForm();
  const [cotizaData, setCotizaData] = useRecoilState(userCotizaData);
  useGetCarModel(cotizaData.carBrandId);
  return (
    <StepModelRoot>
      <SubtitlePrimary>¿Y el modelo?</SubtitlePrimary>
      <StepModelInputContainer>
        <Controller
          render={({ field }: any) => (
            <SelectComponent
              {...field}
              handleSelect={handleSelect}
              selectKey="modelo"
              ref={null}
              values={["Camaro", "Cruze", "Equinox", "Onix"]}
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
