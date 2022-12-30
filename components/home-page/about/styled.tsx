import styled from "@emotion/styled";
import { BodyPrimary } from "../../../ui/text";
import { TextBox } from "../../../ui/text-box/styled";
import { CarouselComponent } from "../../carousel";

export const HomeAbout = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;
  color: var(--dark-ligth);
  line-height: 24px;
  padding: 25px 20px 14px 20px;
  border-radius: 25px 25px 0 0;
  background-color: var(--bg-secondary);
  @media screen and (min-width: 480px) {
    padding: 25px 10% 14px 10%;
  }
  @media screen and (min-width: 1024px) {
    max-width: 1095px;
    padding: 60px;
    gap: 50px;
  }
`;
export const HomeAboutTextBox = styled(TextBox)`
  text-align: center;
  padding: 36px 20px;
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
export const HomeAboutCarouselContainer = styled.div`
  margin: 14px 0;
  @media screen and (min-width: 1024px) {
    margin: 40px 0;
  }
`;
export const CarouselMobile = styled.div`
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;
export const CarouselDesktop = styled.div`
  display: none;
  @media screen and (min-width: 1024px) {
    display: block;
  }
`;

export const HomeAboutCarouselSlide = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
