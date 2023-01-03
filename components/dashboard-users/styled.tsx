import styled from "@emotion/styled";
import { ButtonOutlined } from "../../ui/buttons/styled";
import { SubtitlePrimary } from "../../ui/text";

export const DashboardPolizasRoot = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fafafa;
  padding: 20px 40px;
`;

export const DashboardPolizasHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 30px;
  padding-bottom: 28px;
`;

export const SubtitleDashboardPrimary = styled(SubtitlePrimary)`
  font-size: 24px;
  @media screen and (min-width: 1024px) {
    font-size: 24px;
  }
`;

export const SubtitleDashboardSecondary = styled(SubtitlePrimary)`
  font-size: 18px;
  @media screen and (min-width: 1024px) {
    font-size: 18px;
  }
`;

export const DashboardMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 12px;
  height: 100%;
  padding: 30px;
`;

export const DashboardMainFiltersContainer = styled.div`
  display: grid;
  margin-top: 16px;
  margin-bottom: 40px;
  grid-template-columns: 1fr 300px;
  grid-gap: 20px;
`;

export const DashboradButtonEdit = styled(ButtonOutlined)`
  font-size: 12px;
  padding: 8px 84px;
`;
