import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { StepsDrawer } from "../../../steps-drawer";
import { BrandStepComponent } from "./car-brand";
import { DoorsStepComponent } from "./car-doors";
import { ModelStepComponent } from "./car-model";
import {
  InfoDesktopContainer,
  Root,
  StepBackArrowContainer,
  StepBackRoot,
  StepBackText,
  StepContainer,
  StepperDesktopBoxTitle,
  StepperDesktopContainer,
  StepperDesktopTitle,
  StepsContainerLogo,
  StepsContainerSubmit,
  StepsSubmitButton,
} from "./styled";
import { YearStepComponent } from "./car-year";
import { AddressStepComponent } from "./user-adress";
import { VersionStepComponent } from "./car-version";
import { FuelStepComponent } from "./car-fuel";
import { AgeStepComponent } from "./user-age";
import { TrackerStepComponent } from "./car-tracker";
import { GarageStepComponent } from "./car-garage";
import { StyledArrow, StyledQuearBigLogoBlue } from "../../../../ui/icons";
import { ButtonPrimary } from "../../../../ui/buttons/styled";
import StepperComponent from "../../../stepper";
import { TextBox } from "../../../../ui/text-box/styled";
import { useRecoilState } from "recoil";
import { userCotizaData } from "../../../../lib/state";

export function CotizaStepsPage() {
  const [data, setData] = useState<any>({});
  const [cotizaData, setCotizaData] = useRecoilState(userCotizaData);
  const [activeStep, setActiveStep] = useState(0);
  const router = useRouter();
  const steps = [
    "Año",
    "Marca",
    "Modelo",
    "Versión",
    "Puertas",
    "GNC",
    "Localizador",
    "Dirección",
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
    console.log("submit", { data, cotizaData });
  }

  function handleSelect(key: string, value: any) {
    const newData = { ...data, [key]: value };
    setData(newData);
    setStepCompleted();
    !isLastStep() && handleNext();
  }
  const handleNext = () => {
    // if brand or model changes you need to modified next steps
    if (activeStep > 0 && activeStep < 3) {
      //added time out so the user can see de value before change to next step
      setTimeout(() => {
        setActiveStep(activeStep + 1);
      }, 600);
    } else {
      //all other steps can jump to next step incompleted
      const newActiveStep = !allStepsCompleted()
        ? steps.findIndex((step, i) => !(i in completed))
        : steps.length;
      setTimeout(() => {
        setActiveStep(
          newActiveStep > steps.length - 1 ? steps.length - 1 : newActiveStep
        );
      }, 600);
    }
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
      //if the previous step is completed, remove it from array.
      if (completed[activeStep - 1]) {
        const newCompleted = completed;
        delete newCompleted[activeStep - 1];
        setCompleted(newCompleted);
      }
      setActiveStep(activeStep - 1);
    }
  }
  function goToStep(step: number) {
    //you can manually move only to a completed step
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
      <StepContainer>
        {stepToShow[activeStep]}
        {isLastStep() && (
          <StepsContainerSubmit>
            <StepsSubmitButton
              disabled={!allStepsCompleted()}
              onClick={handleSubmit}
              variant="dark"
            >
              Ver planes disponibles
            </StepsSubmitButton>
            <StepsContainerLogo>
              <StyledQuearBigLogoBlue />
            </StepsContainerLogo>
          </StepsContainerSubmit>
        )}
      </StepContainer>

      <StepsDrawer
        title="Cotizá"
        steps={steps}
        completed={completed}
        goToStep={goToStep}
        stepsData={data}
        activeStep={activeStep}
      />
      <InfoDesktopContainer>
        <StepperDesktopBoxTitle shadow>
          <StepperDesktopTitle>Información</StepperDesktopTitle>
        </StepperDesktopBoxTitle>
        <StepperDesktopContainer>
          <StepperComponent
            steps={steps}
            completed={completed}
            goToStep={goToStep}
            stepsData={data}
            activeStep={activeStep}
          />
        </StepperDesktopContainer>
      </InfoDesktopContainer>
    </Root>
  );
}
