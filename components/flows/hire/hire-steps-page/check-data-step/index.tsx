import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { useGetCarBrand } from "../../../../../lib/hooks";
import { dataUser } from "../../../../../lib/mock-values";
import { userCotizaData } from "../../../../../lib/state";
import { ButtonPrimary } from "../../../../../ui/buttons/styled";
import { DropDownGroupedComponent } from "../../../../dropdown/grouped";
import { StepCheckDataRoot, StepCheckDataTitle } from "./styled";

export function CheckDataStepComponent({ handleSelect }: any) {
  const [checkedTerms, setCheckedTerms] = useState(false);
  const { handleSubmit, reset, setValue, control } = useForm();
  const [cotizaData, setCotizaData] = useRecoilState(userCotizaData);

  function toggleTerms() {
    setCheckedTerms(!checkedTerms);
  }
  return (
    <StepCheckDataRoot>
      <StepCheckDataTitle>
        Por favor <b>revisá tus datos</b> antes de continuar
      </StepCheckDataTitle>
      <DropDownGroupedComponent
        buttonValue="Elegir otro seguro"
        title="Póliza elegida"
        content={dataUser}
      />
      <DropDownGroupedComponent
        buttonValue="Cambiar datos del automotor"
        title="Datos del automotor"
        content={dataUser}
      />
      <DropDownGroupedComponent
        buttonValue="Cambiar datos del personales"
        title="Datos personales"
        content={dataUser}
      />
      <div style={{ margin: "6px 0" }}>
        <ButtonPrimary variant="dark">Ir a pagar</ButtonPrimary>
      </div>
    </StepCheckDataRoot>
  );
}
