import styled from "@emotion/styled";
import { BodyPrimary } from "../../ui/text";

interface Props extends React.HTMLAttributes<HTMLElement> {
  showFooterMobile: boolean | undefined;
  topLine: boolean | undefined;
}

export const FooterRoot = styled.footer<Props>`
  background-color: var(--bg-secondary);
  display: ${(props) => (props.showFooterMobile ? "block" : "none")};
  border-top: ${(props) =>
    props.topLine ? "solid 1px var(--primary)" : "none"};
  @media screen and (min-width: 1024px) {
    display: block;
    background-color: var(--bg);
  }
`;
export const FooterBackground = styled.div`
  display: grid;
  height: 467px;
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
    grid-template-columns: 5fr 2fr 2fr;
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }
`;

export const FooterContainerQr = styled.div`
  @media screen and (min-width: 1024px) {
    justify-content: center;
  }
`;
