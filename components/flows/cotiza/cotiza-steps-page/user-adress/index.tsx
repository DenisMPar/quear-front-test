import { useEffect, useState } from "react";
import { Controller, set, useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import {
  useGetCities,
  useGetDepartments,
  useGetProvincies,
} from "../../../../../lib/hooks";
import { userCotizaData } from "../../../../../lib/state";
import { ButtonPrimary } from "../../../../../ui/buttons/styled";
import { InputShadowed } from "../../../../../ui/input/styled";
import { SubtitlePrimary } from "../../../../../ui/text";
import { AutocompleteComponent } from "../../../../autocomplete-select";
import {
  StepAddressContainerButton,
  StepAddressContainerInput,
  StepAddressInputError,
  StepAddressRoot,
  StyledForm,
} from "./styled";

export function AddressStepComponent({ handleSelect }: any) {
  const [provinceId, setProvinceId] = useState("");
  const [departmentId, setDepartmentId] = useState("");
  const [cotizaData, setCotizaData] = useRecoilState(userCotizaData);
  const { handleSubmit, watch, reset, setValue, control, register, formState } =
    useForm();
  const { provincesNames, provincesWithId } = useGetProvincies();
  const { departmentNames, departmentWithId } = useGetDepartments(provinceId);
  const watchProvince = watch("province");

  useEffect(() => {
    if (watchProvince) {
      const el = provincesWithId.find((el) => {
        return el.nombre == watchProvince;
      });
      if (el) {
        setProvinceId(el.id);
      }
    }
  }, [watchProvince, provincesWithId]);

  function onSubmit(submit: any) {
    const orderedSubmit = {
      Provincia: submit.province,
      Localidad: submit.location,
    };
    setCotizaData({ ...cotizaData, userAddress: submit });
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
                <AutocompleteComponent
                  {...field}
                  selectKey="provincia"
                  ref={null}
                  values={provincesNames}
                  placeHolder={"Provincia"}
                />
              )}
              name="province"
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
                <AutocompleteComponent
                  {...field}
                  selectKey="localidad"
                  ref={null}
                  values={departmentNames}
                  placeHolder={"Localidad"}
                />
              )}
              name="location"
              control={control}
            />
            {formState.errors.departamento && (
              <StepAddressInputError>
                {" "}
                *completa este campo
              </StepAddressInputError>
            )}
          </StepAddressContainerInput>
          <StepAddressContainerButton>
            <ButtonPrimary variant="dark">Siguiente paso</ButtonPrimary>
          </StepAddressContainerButton>
        </StyledForm>
      </div>
    </StepAddressRoot>
  );
}
