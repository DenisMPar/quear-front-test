import { NextPage } from "next";
import { CardComponent } from "../components/card";
import { OutlinedButton, PrimaryButton } from "../ui/buttons/styled";
import {
  StyledCalendar,
  StyledCamera,
  StyledCameraSwitch,
  StyledCheckedBox,
  StyledCheckRounded,
  StyledClose,
  StyledCreditCard,
  StyledInfo,
  StyledLock,
  StyledOpenCamera,
  StyledUncheckedBox,
  StyledUser,
} from "../ui/icons";
const Ui: NextPage = () => {
  return (
    <div>
      <h1>UI page</h1>
      <div>
        <StyledInfo color="primary" />
        <StyledCameraSwitch color="primary" />
        <StyledOpenCamera color="primary" />
        <StyledCamera color="primary" />
        <StyledCreditCard color="primary" />
        <StyledUser color="primary" />
        <StyledCalendar color="primary" />
        <StyledLock color="primary" />
        <StyledCheckRounded color="primary" />
        <StyledClose color="primary" />
        <StyledUncheckedBox color="primary" />
        <StyledCheckedBox color="primary" />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          maxWidth: "400px",
          padding: "16px",
          backgroundColor: "#F7F7F7",
        }}
      >
        <PrimaryButton variant="dark">Continuar</PrimaryButton>
        <PrimaryButton variant="light">COTIZAR</PrimaryButton>
        <OutlinedButton>Cotizar sin patente</OutlinedButton>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          padding: "16px",
        }}
      >
        <CardComponent></CardComponent>
      </div>
    </div>
  );
};
export default Ui;
