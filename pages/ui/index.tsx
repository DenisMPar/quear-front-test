import styled from "@emotion/styled";
import { NextPage } from "next";
import { CardComponent } from "../../components/card";
import { HeaderMobile } from "../../components/header/headerMobile";
import { HeaderDestkop } from "../../components/header/header-desktop";
import {
  ButtonBig,
  ButtonOutlined,
  ButtonPrimary,
} from "../../ui/buttons/styled";
import {
  StyledAlert,
  StyledCalendar,
  StyledCamera,
  StyledCameraSwitch,
  StyledCarFiveDoors,
  StyledCarFourDoors,
  StyledCarThreeDoors,
  StyledCheckedBig,
  StyledCheckedBox,
  StyledCheckRounded,
  StyledClose,
  StyledCloseRounded,
  StyledCreditCard,
  StyledEdit,
  StyledEyeColored,
  StyledEyeUnColored,
  StyledHomeColored,
  StyledHomeUnColored,
  StyledInfo,
  StyledInstagram,
  StyledLinkedin,
  StyledLock,
  StyledMoneyColored,
  StyledMoneyUnColored,
  StyledOpenCamera,
  StyledQuearBigLogo,
  StyledQuearBigLogoBlue,
  StyledQuearSmallLogo,
  StyledSearchBig,
  StyledTwitter,
  StyledUncheckedBox,
  StyledUser,
  StyledWhatsApp,
} from "../../ui/icons";
import { BodySecondary, SubtitleSecondary } from "../../ui/text";
import { TextBox } from "../../ui/text-box/styled";
import {
  InputOutlined,
  InputShadowed,
  TextAreaShadowed,
} from "../../ui/input/styled";
import { InputWithIcon } from "../../ui/input";

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
      <h1>UI page</h1>
      <h2>Headers</h2>
      <HeaderMobile type="big" />
      <HeaderMobile type="small" />
      <HeaderDestkop />
      <h2>Icons</h2>
      <div>
        <StyledInfo color="primary" />
        <StyledCameraSwitch color="primary" />
        <StyledOpenCamera color="primary" />
        <StyledCamera color="primary" />
        <StyledCreditCard color="dark-ligth" width="24px" height="24px" />
        <StyledUser color="primary" />
        <StyledCalendar color="primary" />
        <StyledLock color="primary" />
        <StyledCheckRounded color="primary" />
        <StyledCloseRounded color="primary" />
        <StyledUncheckedBox color="primary" />
        <StyledCheckedBox color="primary" />
        <StyledWhatsApp color="primary" width="24px" height="24px" />
        <StyledAlert color="primary" />
        <StyledTwitter color="primary" />
        <StyledLinkedin color="primary" />
        <StyledInstagram color="primary" />
        <StyledEdit color="primary" />
      </div>
      <div
        style={{
          display: "flex",
          gap: "10px",
          maxWidth: "400px",
          width: "100%",
          padding: "16px",
          backgroundColor: "var(--primary)",
        }}
      >
        <StyledCheckedBig />
        <StyledSearchBig />
        <StyledHomeColored color="bg" />
        <StyledHomeUnColored />
        <StyledMoneyUnColored />
        <StyledMoneyColored color="bg" />
        <StyledEyeUnColored />
        <StyledEyeColored color="bg" />
        <StyledClose color="bg" />
      </div>
      <div
        style={{
          display: "flex",
          gap: "10px",
          maxWidth: "400px",
          width: "100%",
          padding: "16px",
          backgroundColor: "var(--bg-secondary)",
        }}
      >
        <StyledHomeColored />
        <StyledMoneyColored />
        <StyledEyeColored />
        <StyledQuearBigLogoBlue />
      </div>
      <h2>Buttons</h2>
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
        <ButtonPrimary variant="dark">Continuar</ButtonPrimary>
        <ButtonPrimary variant="light">COTIZAR</ButtonPrimary>
        <ButtonOutlined>Cotizar sin patente</ButtonOutlined>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          maxWidth: "400px",
          width: "100%",
          padding: "16px",
        }}
      >
        <ButtonBig>
          <StyledCarThreeDoors />3 puertas
        </ButtonBig>
        <ButtonBig>
          <StyledCarFourDoors />4 puertas
        </ButtonBig>
        <ButtonBig>
          <StyledCarFiveDoors />5 puertas
        </ButtonBig>
      </div>
      <h2>Card</h2>
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
      <h2>Textbox</h2>
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
      <h2>Inputs</h2>
      <div
        style={{
          backgroundColor: "var(--bg-secondary)",
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
        <InputShadowed placeholder="Input con shadow" />
        <InputOutlined placeholder="Input sin shadow" />
        <InputWithIcon
          placeholder="Input con icono"
          name="input"
          Icon={StyledCreditCard}
        />
        <TextAreaShadowed placeholder="Text Area" />
      </div>
    </div>
  );
};
export default Ui;
