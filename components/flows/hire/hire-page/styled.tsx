import styled from "@emotion/styled";
import { BodyPrimary } from "../../../../ui/text";
import { SelectComponent } from "../../../select";

export const HirePageRoot = styled.div`
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export const HirePageTitle = styled(BodyPrimary)`
  text-align: center;
  color: var(--primary);
  font-size: 24px;
`;
export const HirePageText = styled(BodyPrimary)`
  color: var(--dark-ligth);
  font-size: 16px;
`;
export const HirePageContainerFilter = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
export const HirePageContainerSelect = styled.div`
  width: 100%;
  max-width: 229px;
`;
export const HirePageSelect = styled(SelectComponent)`
  min-height: 31px;
  padding: 6px 16px;
`;
export const HirePageSubTitle = styled(BodyPrimary)`
  color: var(--primary);
  font-size: 24px;
`;
