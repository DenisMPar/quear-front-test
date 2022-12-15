import styled from "@emotion/styled";
import Head from "next/head";

const HeaderRoot = styled.header`
  display: flex;

  justify-content: space-between;
  padding: 11px 16px;
  width: 100%;
  background-color: var(--primary);
  @media screen and (min-width: 480px) {
    padding: 11px 4%;
  }
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;
export const SmallHeaderMobile = styled(HeaderRoot)`
  align-items: center;
  height: 49px;
`;
export const BigHeaderMobile = styled(HeaderRoot)`
  padding-top: 21px;
  height: 66px;
`;

export const PhoneContainerBig = styled.div`
  align-self: center;
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  border: solid 2px;
  border-color: var(--terciary);
  cursor: pointer;
`;

export const PhoneContainerSmall = styled.div`
  align-self: center;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  border: solid 2px;
  border-color: var(--terciary);
  cursor: pointer;
`;
export const HamburguerContainer = styled.div`
  align-self: center;
`;
