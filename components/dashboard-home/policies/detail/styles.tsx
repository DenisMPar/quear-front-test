import styled from "@emotion/styled";
import { SubtitlePrimary, SubtitleSecondary } from "../../../../ui/text";

export const DetailPolicyRoot = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fafafa;
  padding: 20px 40px;
`;

export const DetailPolicyHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 30px;
  padding-bottom: 28px;
  justify-content: space-between;
`;

export const DetailSubtitlePrimary = styled(SubtitleSecondary)`
  font-weight: 500;
`;

export const DetailMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 12px;
  height: 100%;
  padding: 30px;
`;

export const DetailFormRoot = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: white;
  border-radius: 12px;
  height: 100%;
  padding: 30px;
  gap: 20px;
`;

export const FormOptionCointainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
