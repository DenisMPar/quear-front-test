import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { StepsDrawer } from "../steps-drawer";
import { BrandStepComponent } from "./car-brand";
import { DoorsStepComponent } from "./car-doors";
import { ModelStepComponent } from "./car-model";
import { Root } from "./styled";
import { YearStepComponent } from "./car-year";
import { AddressStepComponent } from "./user-adress";
import { VersionStepComponent } from "./car-version";
import { FuelStepComponent } from "./car-fuel";
import { AgeStepComponent } from "./user-age";
import { TrackerStepComponent } from "./car-tracker";
import { GarageStepComponent } from "./car-garage";

export function CotizaStepsPage() {
  const [data, setData] = useState<any>({});
  const [activeStep, setActiveStep] = useState(0);
  const router = useRouter();
  const steps = [
    "Año",
    "Marca",
    "Modelo",
    "Version",
    "Puertas",
    "GNC",
    "Localizador",
    "Direccion",
    "Donde duerme",
    "Fecha de nacimiento",
  ];
  const [completed, setCompleted] = useState<{
    [key: number]: boolean;
  }>({});
  const stepToShow = [
    <YearStepComponent key="step1" handleSelect={handleSelect} />,
    <BrandStepComponent key="step2" handleSelect={handleSelect} />,
    <ModelStepComponent key="step3" handleSelect={handleSelect} />,
    <VersionStepComponent key="step4" handleSelect={handleSelect} />,
    <DoorsStepComponent key="step5" handleSelect={handleSelect} />,
    <FuelStepComponent key="step6" handleSelect={handleSelect} />,
    <TrackerStepComponent key="step7" handleSelect={handleSelect} />,
    <AddressStepComponent key="step8" handleSelect={handleSelect} />,
    <GarageStepComponent key="step8" handleSelect={handleSelect} />,
    <AgeStepComponent key="step910" handleSelect={handleSelect} />,
  ];

  function handleSelect(key: string, value: any) {
    const newData = { ...data, [key]: value };
    setData(newData);
    console.log({ data: newData });

    setStepCompleted();
    !isLastStep() && handleNext();
  }
  const handleNext = () => {
    const newActiveStep = steps.findIndex((step, i) => !(i in completed));
    setActiveStep(newActiveStep);
  };
  function setStepCompleted() {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
  }
  function stepBack() {
    if (activeStep == 0) {
      router.push("/cotiza");
    } else {
      if (completed[activeStep - 1]) {
        const newCompleted = completed;
        newCompleted[activeStep - 1] = false;
        setCompleted(newCompleted);
      }
      setActiveStep(activeStep - 1);
    }
  }
  function goToStep(step: number) {
    if (completed[step]) {
      setActiveStep(step);
      const newCompleted = completed;
      newCompleted[step] = false;
      setCompleted(newCompleted);
    }
  }
  const isLastStep = () => {
    return activeStep === steps.length - 1;
  };
  const onSubmit = () => console.log(data);

  return (
    <Root>
      <div onClick={stepBack}>Volver al paso anterior</div>

      {stepToShow[activeStep]}
      {isLastStep() && <button>Submit</button>}

      <StepsDrawer
        steps={steps}
        completed={completed}
        goToStep={goToStep}
        stepsData={data}
        activeStep={activeStep}
      />
    </Root>
  );
}
