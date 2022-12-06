import styled from "@emotion/styled";

const BaseTitle = styled.h1`
  color: ${(props) => `var(--${props.color})`};
  font-weight: 800;
  margin: 0px;
`;

const BaseSubtitle = styled.h2`
  font-weight: 700;
  color: ${(props) => `var(--${props.color})`};
  margin: 0px;
`;
const BaseBody = styled.p`
  font-weight: 400;
  color: ${(props) => `var(--${props.color})`};
  margin: 0px;
`;

export const TitlePrimary = styled(BaseTitle)`
  font-size: 31px;
  line-height: 42px;
`;
export const SubtitlePrimary = styled(BaseSubtitle)`
  font-size: 24px;
  line-height: 33px;
`;

export const SubtitleSecondary = styled(BaseSubtitle)`
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
`;

export const BodyPrimary = styled(BaseBody)`
  font-size: 14px;
`;
export const BodySecondary = styled(BaseBody)`
  font-size: 13px;
`;
