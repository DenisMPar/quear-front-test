import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { StepsDrawer } from "../steps-drawer";
import { BrandStepComponent } from "./car-brand";
import { DoorsStepComponent } from "./car-doors";
import { ModelStepComponent } from "./car-model";
import {
  Root,
  StepBackArrowContainer,
  StepBackRoot,
  StepBackText,
  StepContainer,
  StepsContainerLogo,
  StepsSubmitButton,
} from "./styled";
import { YearStepComponent } from "./car-year";
import { AddressStepComponent } from "./user-adress";
import { VersionStepComponent } from "./car-version";
import { FuelStepComponent } from "./car-fuel";
import { AgeStepComponent } from "./user-age";
import { TrackerStepComponent } from "./car-tracker";
import { GarageStepComponent } from "./car-garage";
import { StyledArrow, StyledQuearBigLogoBlue } from "../../ui/icons";
import { ButtonPrimary } from "../../ui/buttons/styled";

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

  function handleSubmit() {
    console.log("submit", { data });
  }

  function handleSelect(key: string, value: any) {
    const newData = { ...data, [key]: value };
    setData(newData);

    setStepCompleted();
    !isLastStep() && handleNext();
  }
  const handleNext = () => {
    const newActiveStep = !allStepsCompleted()
      ? steps.findIndex((step, i) => !(i in completed))
      : steps.length;

    setActiveStep(
      newActiveStep > steps.length - 1 ? steps.length - 1 : newActiveStep
    );
  };
  function setStepCompleted() {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
  }
  const allStepsCompleted = () => {
    const completedSteps = Object.keys(completed).length;
    return completedSteps === steps.length;
  };
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
      <StepBackRoot onClick={stepBack}>
        <StepBackArrowContainer>
          <StyledArrow color="dark-ligth" width="20px" height="20px" />
        </StepBackArrowContainer>
        <StepBackText>Volver al paso anterior</StepBackText>
      </StepBackRoot>
      <StepContainer>{stepToShow[activeStep]}</StepContainer>
      {isLastStep() && (
        <>
          <StepsSubmitButton onClick={handleSubmit} variant="dark">
            Ver planes disponibles
          </StepsSubmitButton>
          <StepsContainerLogo>
            <StyledQuearBigLogoBlue />
          </StepsContainerLogo>
        </>
      )}

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
