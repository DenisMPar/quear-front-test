import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { useGetCarBrand } from "../../../../../lib/hooks";
import { userCotizaData } from "../../../../../lib/state";
import { ButtonPrimary } from "../../../../../ui/buttons/styled";
import { InputShadowed } from "../../../../../ui/input/styled";
import {
  StepUserDataForm,
  StepUserDataRoot,
  StepUserDataTitle,
} from "./styled";

export function UserDataStepComponent({ handleSelect }: any) {
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
    <StepUserDataRoot>
      <StepUserDataTitle>
        Por favor ingrese los siguientes <b>datos personales</b>
      </StepUserDataTitle>
      <StepUserDataForm action="">
        <InputShadowed placeholder="Nombre y apellido" />
        <InputShadowed placeholder="Dni" />
        <InputShadowed placeholder="Dirección" />
        <InputShadowed placeholder="Código postal" />
        <InputShadowed placeholder="Email" />
        <InputShadowed placeholder="Confirmar email" />
        <InputShadowed placeholder="Teléfono" />
        <InputShadowed placeholder="Situación ante IVA" />
        <ButtonPrimary variant="dark">Continuar</ButtonPrimary>
      </StepUserDataForm>
    </StepUserDataRoot>
  );
}
