import styled from "@emotion/styled";

const BaseTitle = styled.h1`
  color: ${(props) => `var(--${props.color})`};
  font-weight: 800;
  margin: 0px;
`;

const BaseSubtitle = styled.h3`
  font-weight: 700;
  color: ${(props) => `var(--${props.color})`};
  margin: 0px;
`;
const BaseText = styled.p`
  font-weight: 400;
  color: ${(props) => `var(--${props.color})`};
  margin: 0px;
`;

export const PrimaryTitle = styled(BaseTitle)`
  font-size: 31px;
  line-height: 42px;
`;
export const PrimarySubtitle = styled(BaseSubtitle)`
  font-size: 24px;
  line-height: 33px;
`;
export const SecondarySubtitle = styled(BaseSubtitle)`
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
`;
