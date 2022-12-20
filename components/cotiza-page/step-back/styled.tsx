import styled from "@emotion/styled";
import Link from "next/link";
import { BodyPrimary } from "../../../ui/text";

export const StepBackRoot = styled(Link)`
  place-self: flex-start;
  display: flex;
  align-items: center;
  gap: 4px;
`;
export const StepBackText = styled(BodyPrimary)`
  align-self: flex-start;
  color: var(--dark-ligth);
  font-weight: 700;
`;
export const StepBackArrowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(270deg);
`;
