import styled from "@emotion/styled";
import Head from "next/head";

export const HeaderDesktopRoot = styled.header`
  padding: 0 16px;
  display: none;
  height: 82px;
  padding-top: 33px;
  width: 100%;
  background-color: var(--primary);
  @media screen and (min-width: 1024px) {
    display: block;
  }
`;
export const HeaderDesktopContainer = styled.div`
  margin: 0 auto;
  display: flex;
  gap: 37px;
  align-items: center;
  max-width: 1095px;
`;
export const HeaderDesktopNav = styled.nav`
  max-width: 1009px;
  height: 25px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const HeaderDesktopUl = styled.ul`
  width: 100%;
  max-width: 431px;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: end;
`;
export const HeaderDesktopLi = styled.li`
  list-style: none;
  &:hover {
    border-bottom: solid 1px var(--terciary);
  }
`;
