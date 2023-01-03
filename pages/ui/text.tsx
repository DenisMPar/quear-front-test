import { NextPage } from "next";
import { DropDownGroupedComponent } from "../../components/dropdown/grouped";
import { SelectComponent } from "../../components/select";
import { dataUno, dataUser } from "../../lib/mock-values";
import {
  BodyPrimary,
  BodySecondary,
  SubtitlePrimary,
  SubtitleSecondary,
  TitlePrimary,
} from "../../ui/text";

export const UiText: NextPage = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Text Variants</h1>
        <TitlePrimary>Title Primary</TitlePrimary>
        <SubtitlePrimary>Subtitle Primary</SubtitlePrimary>
        <SubtitleSecondary>Subtitle Secondary</SubtitleSecondary>
        <BodyPrimary>Body primary</BodyPrimary>
        <BodySecondary>Body Secondary</BodySecondary>
        <div
          style={{
            width: "250px",
          }}
        >
          <SelectComponent
            width="250px"
            variant="dashboard"
            values={["Tarjeta de crédito o débito"]}
            placeHolder="Elegir modo de pago"
            onChange={() => console.log("change")}
          />
        </div>
      </div>
    </>
  );
};

export default UiText;
