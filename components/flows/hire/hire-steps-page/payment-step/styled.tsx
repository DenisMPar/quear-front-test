import styled from "@emotion/styled";
import Link from "next/link";
import { BodyPrimary, SubtitleSecondary } from "../../../../../ui/text";

export const StepPaymentRoot = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 100px;
  @media screen and (min-width: 1024px) {
  }
`;
export const StepPaymentTitle = styled(BodyPrimary)`
  text-align: center;
  margin: 0 auto;
  font-size: 24px;
  color: var(--primary);
`;
export const StepPaymentSubTitle = styled(BodyPrimary)`
  color: var(--dark-ligth);
  font-style: italic;
  line-height: 19.1px;
`;
export const StepPaymentForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const ContainerTerms = styled.div`
  margin-top: 8px;
  color: var(--primary);
  display: flex;
  align-items: center;
  gap: 16px;
  @media screen and (min-width: 1024px) {
  }
`;
export const TermsLink = styled(Link)`
  text-decoration: underline;
  @media screen and (min-width: 1024px) {
  }
`;

export const ContainerChecked = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border: solid 1px var(--primary);
  @media screen and (min-width: 1024px) {
  }
`;
export const StepPaymentPrice = styled(SubtitleSecondary)`
  margin: 0 auto;
  margin-top: 90px;
  font-weight: 400;
  text-align: center;
  font-size: 16px;
  color: black;
`;
