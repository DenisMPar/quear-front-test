import styled from "@emotion/styled";
import { ButtonPrimary } from "../../ui/buttons/styled";
import { StyledQuearBigLogo } from "../../ui/icons";
import { TitlePrimary, SubtitleSecondary, BodyPrimary } from "../../ui/text";
import { TextBox } from "../../ui/text-box/styled";
import { CarouselComponent } from "../carousel";

export const HomeRoot = styled.div`
  min-height: 100vh;
  background-color: var(--primary);
  @media screen and (min-width: 1024px) {
    background-color: var(--bg-secondary);
  }
`;
export const HomeMain = styled.main`
  background-color: var(--primary);
  text-align: center;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 257px;
  margin: 76px 0 60px 0;
  color: var(--bg);
  @media screen and (min-width: 1024px) {
    margin: 0 auto;
    height: 403px;
    border-radius: 0 0 25px 25px;
    flex-direction: row-reverse;
    justify-content: space-around;
  }
`;
export const HomeMainLogoContainer = styled.div``;
export const HomeMainQuearLogoContainer = styled.div`
  display: none;
  @media screen and (min-width: 1024px) {
    display: block;
  }
`;
export const HomeMainTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 1024px) {
    align-items: flex-start;
  }
`;
export const HomeMainCarMobileContainer = styled.div`
  display: block;
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;
export const HomeMainCarDesktopContainer = styled.div`
  display: none;
  @media screen and (min-width: 1024px) {
    display: block;
  }
`;
export const HomeTitle = styled(TitlePrimary)`
  margin-top: 34px;
  @media screen and (min-width: 1024px) {
    margin-top: 22px;
  }
`;
export const HomeSubTitle = styled(SubtitleSecondary)`
  max-width: 250px;
  margin-top: 10px;
  @media screen and (min-width: 1024px) {
    max-width: 450px;
    margin-top: 6px;
  }
`;
export const HomeButton = styled(ButtonPrimary)`
  margin-top: 45px;
  max-width: 214px;
  @media screen and (min-width: 1024px) {
    margin-top: 36px;
  }
`;
export const HomeAbout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;
  color: var(--dark-ligth);
  line-height: 24px;
  padding: 25px 20px 14px 20px;
  border-radius: 25px 25px 0 0;
  background-color: var(--bg-secondary);
  @media screen and (min-width: 1024px) {
    padding: 105px 60px;
    gap: 50px;
  }
`;
export const HomeAboutTextBox = styled(TextBox)`
  text-align: center;
  padding: 16px 20px;
  padding-top: 36px;
  max-width: 1155px;
  margin: 0 auto;
  @media screen and (min-width: 1024px) {
    font-size: 22px;
    padding: 40px 190px;
  }
`;
export const HomeAboutText = styled(BodyPrimary)`
  @media screen and (min-width: 1024px) {
    font-size: 22px;
    line-height: 39.5px;
  }
`;
export const HomeAboutCarousel = styled(CarouselComponent)`
  @media screen and (min-width: 1024px) {
    height: 112px !important;
  }
`;
