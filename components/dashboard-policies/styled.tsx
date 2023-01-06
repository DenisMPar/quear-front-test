import styled from "@emotion/styled";
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

export const ExportTitle = styled(SubtitleDashboardSecondary)`
  color: black;
  text-decoration: underline;
`;

interface LinkProps extends React.HTMLAttributes<HTMLDivElement> {
  active?: boolean;
}

export const SubtitleDashboardTerciary = styled(SubtitlePrimary)<LinkProps>`
  font-size: 16px;
  color: ${(props) => (props.active ? "var(--primary-hover)" : "#71717a")};
  text-decoration: ${(props) =>
    props.active
      ? "underline var(--primary-hover)"
      : "none"}; /* Subrayado rojo */
  text-underline-offset: 0.5em;

  @media screen and (min-width: 1024px) {
    font-size: 16px;
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;
  margin-bottom: 40px;
  align-items: flex-end;
`;

export const DashboardMainFiltersLeft = styled.div`
  display: grid;
  grid-template-columns: 400px 190px 170px;
  grid-gap: 10px;
`;
