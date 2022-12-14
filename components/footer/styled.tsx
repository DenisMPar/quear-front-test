import styled from "@emotion/styled";
import { BodyPrimary } from "../../ui/text";

interface Props extends React.HTMLAttributes<HTMLElement> {
  showFooterMobile: boolean | undefined;
}

export const FooterRoot = styled.footer<Props>`
  height: 467px;
  background-color: var(--bg-secondary);
  display: ${(props) => (props.showFooterMobile ? "grid" : "none")};
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  justify-items: center;
  align-items: center;
  gap: 34px;
  padding-top: 25px;
  padding-bottom: 164px;
  @media screen and (min-width: 1024px) {
    max-width: 885px;
    padding: 40px 0 81px 0;
    margin: 0 auto;
    height: 227px;
    display: grid;
    grid-template-columns: 3fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }
`;
export const FooterContainerMain = styled.div`
  width: 100%;
  background-color: var(--bg-secondary);
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
  background-color: var(--bg-secondary);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const FooterContainerText = styled.div`
  width: 100%;
  max-width: 526px;
  margin: 0 auto;
  background-color: var(--bg-secondary);
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 1024px) {
    justify-content: center;
    flex-direction: row;
    gap: 10px;
  }
`;
export const FooterContainerQr = styled.div`
  @media screen and (min-width: 1024px) {
    justify-content: center;
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
  text-decoration-line: underline;
`;
export const FooterContainerSocialMedia = styled.div`
  background-color: var(--bg-secondary);
  display: flex;
  gap: 33px;
  margin: 0 auto;
  @media screen and (min-width: 1024px) {
    grid-area: 1 / 3 / 2 / 4;
  }
`;