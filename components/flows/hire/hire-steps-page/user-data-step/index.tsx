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
  const { handleSubmit, reset, setValue, control, register, watch } = useForm();
  const [hireData, setHireData] = useRecoilState(userHireData);
  const email = watch("Email");
  function onSubmit(data: any) {
    console.log(data);
    const formattedData = {
      userFullName: data["Nombre y apellido"],
      dni: data.Dni,
      address: data["Dirección"],
      zipCode: data["Código postal"],
      email: data.Email,
      phone: data["Teléfono"],
      iva: data["Situación ante IVA"],
    };
    setHireData({ ...hireData, userData: formattedData });
    handleSelect("userData", data);
  }
  return (
    <StepUserDataRoot>
      <StepUserDataTitle>
        Por favor ingrese los siguientes <b>datos personales</b>
      </StepUserDataTitle>
      <StepUserDataForm onSubmit={handleSubmit(onSubmit)} action="">
        <InputShadowed
          type="text"
          {...register("Nombre y apellido", { required: true })}
          placeholder="Nombre y apellido"
        />
        <InputShadowed
          type="number"
          {...register("Dni", { required: true })}
          placeholder="Dni"
        />
        <InputShadowed
          {...register("Dirección", { required: true })}
          placeholder="Dirección"
        />
        <InputShadowed
          type="number"
          {...register("Código postal", { required: true })}
          placeholder="Código postal"
        />
        <InputShadowed
          type="email"
          {...register("Email", { required: true })}
          placeholder="Email"
        />
        <InputShadowed
          type="email"
          {...register("Confirmar email", {
            required: true,
            validate: (value) => {
              return email === value;
            },
          })}
          placeholder="Confirmar email"
        />
        <InputShadowed
          type={"number"}
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
