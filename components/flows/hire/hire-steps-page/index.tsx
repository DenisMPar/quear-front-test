import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { userHireData } from "../../../../lib/state";
import { StyledArrow } from "../../../../ui/icons";
import StepperComponent from "../../../stepper";
import { StepsDrawer } from "../../../steps-drawer";
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
} from "../../styled";
import { CarInfoStepComponent } from "./car-info-step";
import { CarPicturesStepComponent } from "./car-pictures-step";
import { CheckDataStepComponent } from "./check-data-step";
import { PaymentStepComponent } from "./payment-step";
import { UserDataStepComponent } from "./user-data-step";

export function HireStepsPage() {
  const [data, setData] = useState<any>({});
  const [hireData, setHireData] = useRecoilState(userHireData);
  const [activeStep, setActiveStep] = useState(0);
  const router = useRouter();
  const steps = ["Auto", "Fotos", "Datos personales", "Checkear", "Pagar"];
  const [completed, setCompleted] = useState<{
    [key: number]: boolean;
  }>({});
  const stepToShow = [
    <CarInfoStepComponent key="1" handleSelect={handleSelect} />,
    <CarPicturesStepComponent
      key="2"
      handleNext={setNextAndCompleted}
      handleSelect={handleSelect}
    />,
    <UserDataStepComponent key="3" handleSelect={handleSelect} />,
    <CheckDataStepComponent key="4" handleNext={setNextAndCompleted} />,
    <PaymentStepComponent
      key="5"
      handleSelect={handleSelect}
      submit={handleSubmit}
    />,
  ];

  function handleSubmit() {
    console.log("submit", { data, hireData });
    router.push("/hire/success");
  }

  function handleSelect(key: string, value: any) {
    const newData = { ...data, [key]: value };
    setData(newData);
    setStepCompleted();
    !isLastStep() && handleNext();
    isLastStep() && handleSubmit();
  }

  function setNextAndCompleted() {
    setStepCompleted();
    handleNext();
  }
  function handleNext() {
    const newActiveStep = !allStepsCompleted()
      ? steps.findIndex((step, i) => !(i in completed))
      : steps.length;
    setTimeout(() => {
      setActiveStep(
        newActiveStep > steps.length - 1 ? steps.length - 1 : newActiveStep
      );
    }, 600);
  }
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
      router.push("/hire");
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
      <StepContainer>{stepToShow[activeStep]}</StepContainer>
      <StepsDrawer
        title="Contrat?? online"
        steps={steps}
        completed={completed}
        goToStep={goToStep}
        stepsData={data}
        activeStep={activeStep}
      />
      <InfoDesktopContainer>
        <StepperDesktopBoxTitle shadow>
          <StepperDesktopTitle>Informaci??n</StepperDesktopTitle>
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
