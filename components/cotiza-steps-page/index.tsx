import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { StepsDrawer } from "../steps-drawer";
import { BrandStepComponent } from "./car-brand";
import { DoorsStepComponent } from "./car-doors";
import { ModelStepComponent } from "./car-model";
import { Root } from "./styled";
import { YearStepComponent } from "./year";

interface CotizaInfo {
  año: string;
  marca: string;
  modelo: string;
  version: string;
  puertas: number;
  gnc: boolean;
  localizador: boolean;
  direccion: {
    provincia: string;
    ciudad: string;
    codigoPostal: string;
  };
  garage: boolean;
  nacimiento: {
    dia: number;
    mes: string;
    año: number;
  };
  mayor: boolean;
}

export function CotizaStepsPage() {
  const { handleSubmit, reset, setValue, control } = useForm();
  const [data, setData] = useState<any>({});
  const [activeStep, setActiveStep] = useState(0);
  const router = useRouter();
  const steps = ["Año", "Marca", "Modelo", "Puertas"];
  const [completed, setCompleted] = useState<{
    [key: number]: boolean;
  }>({});
  const stepToShow = [
    <YearStepComponent
      key="step1"
      control={control}
      handleSelect={handleSelect}
    />,
    <BrandStepComponent
      key="step2"
      control={control}
      handleSelect={handleSelect}
    />,
    <DoorsStepComponent
      key="step4"
      control={control}
      handleSelect={handleSelect}
    />,
    <ModelStepComponent
      key="step3"
      control={control}
      handleSelect={handleSelect}
    />,
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
    setActiveStep(step);
    if (completed[step]) {
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
      <p>{JSON.stringify(data)}</p>
      <div onClick={stepBack}>Volver al paso anterior</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {stepToShow[activeStep]}
        {isLastStep() && <button>Submit</button>}
      </form>
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
