import styled from "@emotion/styled";
import { SubtitlePrimary } from "../../../ui/text";

export const DashboardPolizasRoot = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  flex-direction: row;
  background-color: #fafafa;
  padding: 20px 40px;
`;

export const DashboardPolizasHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

export const SubtitleDashboardPrimary = styled(SubtitlePrimary)`
  font-size: 24px;
  @media screen and (min-width: 1024px) {
    font-size: 24px;
  }
`;

interface LinkProps extends React.HTMLAttributes<HTMLDivElement> {
  active?: boolean;
}

export const SubtitleDashboardSecondary = styled(SubtitlePrimary)<LinkProps>`
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
