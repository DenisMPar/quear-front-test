import styled from "@emotion/styled";
import { AddLabel } from "../../../../../ui/label/add-label";
import { BodyPrimary } from "../../../../../ui/text";
import { AddLabelComponent } from "../../../../add-label";

export const StepCarPicturesContainerMain = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  padding-bottom: 56px;
  gap: 16px;
`;

export const StepCarPicturesContainerTitle = styled.div`
  max-width: 330px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const StepCarPicturesTitle = styled(BodyPrimary)`
  margin: 0 auto;
  max-width: 230px;
  color: var(--primary);
  font-size: 24px;
`;
export const StepCarPicturesSubTitle = styled(BodyPrimary)`
  color: var(--dark-ligth);
  font-style: italic;
  line-height: 19.1px;
`;
export const StepCarPicturesContainerInfo = styled.div`
  text-align: left;
  display: flex;
  gap: 11px;
`;
export const StepCarPicturesContainerPicturesLabel = styled.div`
  text-align: left;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 11px;
`;
export const StepCarPicturesLabel = styled(AddLabelComponent)`
  height: 128px;
`;
export const StepCarPicturesContainerButtons = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
