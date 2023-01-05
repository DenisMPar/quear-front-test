import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { useGetCarBrand } from "../../../../../lib/hooks";
import { userHireData } from "../../../../../lib/state";
import { ButtonPrimary } from "../../../../../ui/buttons/styled";
import { InputShadowed } from "../../../../../ui/input/styled";
import {
  StepUserDataForm,
  StepUserDataRoot,
  StepUserDataTitle,
} from "./styled";

export function UserDataStepComponent({ handleSelect }: any) {
  const { handleSubmit, reset, setValue, control, register } = useForm();
  const { brandNames, brandWithId } = useGetCarBrand();
  const [hireData, setHireData] = useRecoilState(userHireData);
  function onSubmit(data: any) {
    handleSelect("userData", data);
  }
  return (
    <StepUserDataRoot>
      <StepUserDataTitle>
        Por favor ingrese los siguientes <b>datos personales</b>
      </StepUserDataTitle>
      <StepUserDataForm onSubmit={handleSubmit(onSubmit)} action="">
        <InputShadowed
          {...register("Nombre y apellido", { required: true })}
          placeholder="Nombre y apellido"
        />
        <InputShadowed
          {...register("Dni", { required: true })}
          placeholder="Dni"
        />
        <InputShadowed
          {...register("Dirección", { required: true })}
          placeholder="Dirección"
        />
        <InputShadowed
          {...register("Código postal", { required: true })}
          placeholder="Código postal"
        />
        <InputShadowed
          {...register("Email", { required: true })}
          placeholder="Email"
        />
        <InputShadowed
          {...register("Confirmar email", { required: true })}
          placeholder="Confirmar email"
        />
        <InputShadowed
          {...register("Teléfono", { required: true })}
          placeholder="Teléfono"
        />
        <InputShadowed
          {...register("Situación ante IVA", { required: true })}
          placeholder="Situación ante IVA"
        />
        <ButtonPrimary variant="dark">Continuar</ButtonPrimary>
      </StepUserDataForm>
    </StepUserDataRoot>
  );
}
