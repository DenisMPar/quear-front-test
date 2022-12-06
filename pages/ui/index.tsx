import styled from "@emotion/styled";
import { NextPage } from "next";
import { CardComponent } from "../../components/card";
import { HeaderComponent } from "../../components/header";
import { OutlinedButton, PrimaryButton } from "../../ui/buttons/styled";
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
  StyledQuearBigLogo,
  StyledQuearSmallLogo,
  StyledUncheckedBox,
  StyledUser,
} from "../../ui/icons";
import { SubtitleSecondary } from "../../ui/text";
import { TextBox } from "../../ui/text-box/styled";

const StyledTextBox = styled(TextBox)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Ui: NextPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "0 auto",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <HeaderComponent type="big" />
      <h1>UI page</h1>
      <HeaderComponent type="small" />
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
          width: "100%",
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
          width: "100%",
          maxWidth: "400px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          padding: "16px",
        }}
      >
        <CardComponent></CardComponent>
      </div>
      <div
        style={{
          backgroundColor: "var(--bg-secondary)",
          width: "100%",
          height: "200px",
          maxWidth: "400px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          padding: "16px",
        }}
      >
        <StyledTextBox>
          <SubtitleSecondary>Textbox</SubtitleSecondary>
        </StyledTextBox>
        <StyledTextBox shadow>
          <SubtitleSecondary>Textbox shadow</SubtitleSecondary>
        </StyledTextBox>
      </div>
    </div>
  );
};
export default Ui;
