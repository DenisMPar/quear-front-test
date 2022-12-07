import styled from "@emotion/styled";
import Head from "next/head";

export const HeaderDesktopRoot = styled.header`
  display: none;
  height: 82px;
  justify-content: space-between;
  padding-top: 40px;
  width: 100%;
  background-color: var(--primary);
  @media screen and (min-width: 744px) {
    display: flex;
  }
`;
export const HeaderDesktopNav = styled.nav`
  width: 100%;
  max-width: 1010px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;
export const HeaderDesktopUl = styled.ul`
  width: 100%;
  max-width: 413px;
  margin: 0;
  padding: 0;
  padding-bottom: 20px;
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
