import { useState } from "react";
import { useRecoilState } from "recoil";
import { formatMoney } from "../../../../../lib/functions";
import { userHireData } from "../../../../../lib/state";
import { ButtonPrimary } from "../../../../../ui/buttons/styled";
import { DropDownGroupedComponent } from "../../../../dropdown/grouped";
import { StepCheckDataRoot, StepCheckDataTitle } from "./styled";

export function CheckDataStepComponent({ handleNext }: any) {
  const [checkedTerms, setCheckedTerms] = useState(false);
  const [hireData, setHireData] = useRecoilState(userHireData);

  const formattedPolicy = [
    { title: "Aseguradora", value: hireData.policy.company + " Seguros" },
    { title: "Tipo de seguro", value: hireData.policy.type },
    { title: "Precio por mes", value: formatMoney(hireData.policy.fee) },
    {
      title: "Vehiculo asegurado por",
      value: formatMoney(hireData.policy.total),
    },
  ];
  const formattedCarInfo = [
    {
      title: "Número de chasis",
      value: hireData.carInfo.chasisNumber.toString(),
    },
    {
      title: "Número de motor",
      value: hireData.carInfo.engineNumber.toString(),
    },
    {
      title: "Patente en trámite",
      value: hireData.carInfo.patentPending ? "Si" : "No",
    },
  ];
  const formattedUserInfo = [
    {
      title: "Nombre y apellido",
      value: hireData.userData.userFullName,
    },
    { title: "Dni", value: hireData.userData.dni.toString() },
    { title: "Dirección", value: hireData.userData.address },
    {
      title: "Código postal",
      value: hireData.userData.zipCode.toString(),
    },
    {
      title: "Email",
      value: hireData.userData.email,
    },
    {
      title: "Teléfono",
      value: hireData.userData.phone.toString(),
    },
    {
      title: "Situación ante IVA",
      value: hireData.userData.iva,
    },
  ];
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
        content={formattedPolicy}
      />
      <DropDownGroupedComponent
        buttonValue="Cambiar datos del automotor"
        title="Datos del automotor"
        content={formattedCarInfo}
      />
      <DropDownGroupedComponent
        buttonValue="Cambiar datos del personales"
        title="Datos personales"
        content={formattedUserInfo}
      />
      <div style={{ margin: "6px 0" }}>
        <ButtonPrimary onClick={handleNext} variant="dark">
          Ir a pagar
        </ButtonPrimary>
      </div>
    </StepCheckDataRoot>
  );
}
