import { Controller, useForm } from "react-hook-form";
import { SubtitlePrimary } from "../../../ui/text";
import { SelectGroupedComponent } from "../../select/grouped";
import { StepBrandInputContainer, StepBrandRoot } from "./styled";

export function BrandStepComponent({ handleSelect }: any) {
  const { handleSubmit, reset, setValue, control } = useForm();
  return (
    <StepBrandRoot>
      <SubtitlePrimary>¿De qué marca es tu auto?</SubtitlePrimary>
      <StepBrandInputContainer>
        <Controller
          render={({ field }: any) => (
            <SelectGroupedComponent
              {...field}
              handleSelect={handleSelect}
              selectKey="marca"
              ref={null}
              placeHolder="Elegir marca"
              values={[
                {
                  title: "Más buscadas:",
                  options: ["Chevrolet", "Ford", "Renault"],
                },
                {
                  title: "Todas las marcas:",
                  options: ["Audi", "BMW"],
                },
              ]}
            />
          )}
          name="TextField"
          control={control}
        />
      </StepBrandInputContainer>
    </StepBrandRoot>
  );
}
