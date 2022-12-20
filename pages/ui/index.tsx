import styled from "@emotion/styled";
import { NextPage } from "next";
import Image from "next/image";
import { CardComponent } from "../../components/card";
import { HeaderDestkop } from "../../components/header/header-desktop";
import { HeaderMobile } from "../../components/header/headerMobile";
import { SelectComponent } from "../../components/select";
import { SelectGroupedComponent } from "../../components/select/grouped";
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
  StyledQuearBigLogoBlue,
  StyledSearchBig,
  StyledTwitter,
  StyledUncheckedBox,
  StyledUser,
  StyledWhatsApp,
} from "../../ui/icons";
import { InputWithIcon } from "../../ui/input";
import {
  InputOutlined,
  InputShadowed,
  TextAreaShadowed,
} from "../../ui/input/styled";
import { AddLabel } from "../../ui/label/add-label";
import { PictureLabel } from "../../ui/label/picture-label";
import { SubtitleSecondary } from "../../ui/text";
import { TextBox } from "../../ui/text-box/styled";

const StyledTextBox = styled(TextBox)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Ui: NextPage = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
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
            maxWidth: "800px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            padding: "16px",
          }}
        >
          <CardComponent></CardComponent>
          <CardComponent active></CardComponent>
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

      <div
        style={{
          backgroundColor: "var(--bg-secondary)",
          margin: "0 auto",
          width: "100%",
          maxWidth: "750px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          padding: "16px",
        }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(e.target);
          }}
        >
          <SelectGroupedComponent
            placeHolder="Elegir marca"
            values={[
              {
                title: "Más buscadas:",
                options: ["Chevrolet", "Ford", "Renault"],
              },
              {
                title: "Todas las marcas:",
                options: ["Audi", "BMW"],
              },
            ]}
          />
          <button type="submit">sunmit</button>
        </form>

        <SelectComponent
          onChange={(e) => {
            console.log(e?.target.textContent);
          }}
          values={["2022", "2021", "2020", "2019"]}
          placeHolder={"Elegir año"}
        />
      </div>
      <div
        style={{
          backgroundColor: "var(--bg-secondary)",
          margin: "0 auto",
          width: "100%",
          height: "600px",
          maxWidth: "750px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          padding: "16px",
        }}
      >
        <AddLabel type="big">Agregar foto</AddLabel>
        <AddLabel label="parte trasera" type="small">
          Agregar foto
        </AddLabel>
        <PictureLabel
          onClose={() => console.log("close")}
          label="Parte trasera"
        >
          <Image alt="car-image" width={131} height={193} src="/img-car.png" />
        </PictureLabel>
      </div>
      <div style={{ height: "400px" }}></div>
    </>
  );
};
export default Ui;
