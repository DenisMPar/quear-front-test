import styled from "@emotion/styled";
import Link from "next/link";
import { TitlePrimary } from "../../../../../ui/text";
import { TextBox } from "../../../../../ui/text-box/styled";

export const CodeBoxRoot = styled(TextBox)`
  color: var(--dark-ligth);
  padding: 24px;
`;
export const CodeBoxMain = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const CodeBoxTitle = styled(TitlePrimary)`
  color: var(--primary);
`;
export const CodeBoxLine = styled.hr`
  margin: 16px 0;
  color: var(--dark-terciary);
`;
export const CodeBoxFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const CodeBoxLink = styled(Link)`
  text-decoration: underline;
  cursor: pointer;
`;
