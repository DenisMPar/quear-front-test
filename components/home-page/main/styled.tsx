import styled from "@emotion/styled";
import Link from "next/link";
import { ButtonPrimary } from "../../../ui/buttons/styled";
import { SubtitleSecondary, TitlePrimary } from "../../../ui/text";

export const HomeMain = styled.main`
  background-color: var(--primary);
  text-align: center;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 257px;

  color: var(--bg);
  @media screen and (min-width: 1024px) {
    max-width: 1095px;
    margin: 0 auto;
    height: 403px;
    border-radius: 0 0 25px 25px;
    flex-direction: row-reverse;
    justify-content: space-around;
  }
`;
export const HomeMainLogoContainer = styled.div``;

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
export const HomeMainTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 1024px) {
    align-items: flex-start;
  }
`;
export const HomeMainQuearLogoContainer = styled.div`
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
export const HomeButtonLink = styled(Link)`
  width: 100%;
`;
export const HomeButton = styled(ButtonPrimary)`
  margin: 0 auto;
  margin-top: 45px;
  max-width: 214px;
  @media screen and (min-width: 1024px) {
    margin: 0;
    margin-top: 36px;
  }
`;
