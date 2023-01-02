import { NextPage } from "next";
import {
  BodyPrimary,
  BodySecondary,
  SubtitlePrimary,
  SubtitleSecondary,
  TitlePrimary,
} from "../../ui/text";

export const UiText: NextPage = () => {
  return (
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
    </div>
  );
};

export default UiText;
