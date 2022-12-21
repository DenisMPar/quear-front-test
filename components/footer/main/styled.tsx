import styled from "@emotion/styled";
import { BodyPrimary } from "../../../ui/text";

export const FooterContainerMain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 23px;
  @media screen and (min-width: 1024px) {
    grid-area: 1 / 1 / 2 / 2;
  }
`;
export const FooterContainerTextAndLink = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const FooterContainerText = styled.div`
  width: 100%;
  max-width: 526px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 1024px) {
    justify-content: center;
    flex-direction: row;
    gap: 10px;
  }
`;
export const FooterText = styled(BodyPrimary)`
  font-size: 12px;
  font-weight: 500;
  color: var(--dark-ligth);
`;
export const FooterLink = styled.a`
  margin-top: 9px;
  font-size: 12px;
  font-weight: 700;
  color: var(--primary);
  &:hover {
    text-decoration-line: underline;
  }
`;
