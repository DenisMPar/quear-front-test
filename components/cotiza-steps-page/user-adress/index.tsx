import { useEffect, useState } from "react";
import { Controller, set, useForm } from "react-hook-form";
import { useGetDepartments, useGetProvincies } from "../../../lib/hooks";
import { ButtonPrimary } from "../../../ui/buttons/styled";
import { InputShadowed } from "../../../ui/input/styled";
import { SubtitlePrimary } from "../../../ui/text";
import { SelectComponent } from "../../select";
import {
  StepAddressContainerButton,
  StepAddressContainerInput,
  StepAddressInputError,
  StepAddressRoot,
  StyledForm,
} from "./styled";

export function AddressStepComponent({ handleSelect }: any) {
  const [provinceId, setProvinceId] = useState("");
  const { handleSubmit, watch, reset, setValue, control, register, formState } =
    useForm();
  const { provincesNames, provincesWithId } = useGetProvincies();
  const departments = useGetDepartments(provinceId);
  const watchShowAge = watch("provincia");

  useEffect(() => {
    if (watchShowAge) {
      const el = provincesWithId.find((el) => {
        return el.nombre == watchShowAge;
      });
      if (el) {
        setProvinceId(el.id);
      }
    }
  }, [watchShowAge, provincesWithId]);

  function onSubmit(submit: any) {
    const orderedSubmit = {
      Provincia: submit.provincia,
      Departamento: submit.departamento,
      "Código postal": submit.postal,
    };

    handleSelect("direccion", orderedSubmit);
  }
  // useEffect(() => {
  //   console.log(formState);
  // }, [formState]);
  return (
    <StepAddressRoot>
      <SubtitlePrimary>¿Donde vivis?</SubtitlePrimary>
      <div style={{ width: "100%", maxWidth: "600px" }}>
        <StyledForm action="" onSubmit={handleSubmit(onSubmit)}>
          <StepAddressContainerInput>
            <Controller
              rules={{ required: true }}
              render={({ field }: any) => (
                <SelectComponent
                  {...field}
                  selectKey="provincia"
                  ref={null}
                  values={provincesNames}
                  placeHolder={"Provincia"}
                />
              )}
              name="provincia"
              control={control}
            />
            {formState.errors.provincia && (
              <StepAddressInputError>
                {" "}
                *completa este campo
              </StepAddressInputError>
            )}
          </StepAddressContainerInput>
          <StepAddressContainerInput>
            <Controller
              rules={{ required: true }}
              render={({ field }: any) => (
                <SelectComponent
                  {...field}
                  selectKey="departamento"
                  ref={null}
                  values={departments}
                  placeHolder={"departamento"}
                />
              )}
              name="departamento"
              control={control}
            />
            {formState.errors.departamento && (
              <StepAddressInputError>
                {" "}
                *completa este campo
              </StepAddressInputError>
            )}
          </StepAddressContainerInput>
          <StepAddressContainerInput>
            <InputShadowed
              {...register("postal", {
                required: true,
                pattern: /^[0-9]+$/,
                maxLength: 4,
              })}
              placeholder="Código postal"
            />
            {formState.errors.postal &&
              (formState.errors.postal.type == "required" ? (
                <StepAddressInputError>
                  *completa este campo
                </StepAddressInputError>
              ) : (
                <StepAddressInputError>
                  *Ingresa un código de 4 números. Ej: 5600
                </StepAddressInputError>
              ))}
          </StepAddressContainerInput>
          <StepAddressContainerButton>
            <ButtonPrimary variant="dark">Siguiente paso</ButtonPrimary>
          </StepAddressContainerButton>
        </StyledForm>
      </div>
    </StepAddressRoot>
  );
}
