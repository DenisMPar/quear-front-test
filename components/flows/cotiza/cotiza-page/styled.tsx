import styled from "@emotion/styled";
import { StyledArrow } from "../../../../ui/icons";
import { BodyPrimary, SubtitlePrimary } from "../../../../ui/text";

export const CotizaBackground = styled.div`
  background-color: var(--secondary);
`;

export const CotizaRoot = styled.div`
  padding: 24px;
  padding-bottom: 0;
  height: calc(100vh - 49px);
  display: grid;
  grid-template-rows: 0.8fr 2fr 1fr;
  justify-items: center;
  align-items: center;
  @media screen and (min-width: 1024px) {
    max-width: 1095px;
    margin: 0 auto;
    padding: 39px;
    grid-template-rows: 1fr 3fr 2fr;
  }
`;
export const CotizaContainerMain = styled.div`
  color: var(--primary);
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media screen and (min-width: 1024px) {
    max-width: 511px;
    margin: 0 auto;
    gap: 55px;
  }
`;

export const CotizaContainerTitle = styled.div`
  max-width: 300px;
  margin: 0 auto;
  @media screen and (min-width: 1024px) {
    max-width: 511px;
  }
`;
export const CotizaTitle = styled(SubtitlePrimary)`
  @media screen and (min-width: 1024px) {
    font-size: 35px;
  }
`;
export const CotizaContainerInputs = styled.div`
  max-width: 327px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 11px;
`;
export const CotizaForm = styled.form`
  max-width: 327px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 11px;
`;
export const CotizaContainerLogo = styled.div``;
