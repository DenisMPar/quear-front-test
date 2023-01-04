import styled from "@emotion/styled";
import { HTMLAttributes, ReactHTMLElement } from "react";
import { BodyPrimary, BodySecondary } from "../../../../../ui/text";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  dark: boolean | undefined;
}

export const HirePageDetailContainerValue = styled.div<ContainerProps>`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  background-color: ${(props) =>
    props.dark ? "var(--bg-secondary)" : "white"};
`;
export const HirePageDetailContainerText = styled.div`
  max-width: 280px;
  display: flex;
  flex-direction: column;
`;
export const HirePageDetailTitle = styled(BodyPrimary)`
  font-weight: 700;
`;
