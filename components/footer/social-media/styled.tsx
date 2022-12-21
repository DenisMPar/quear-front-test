import styled from "@emotion/styled";

export const FooterContainerSocialMedia = styled.div`
  display: flex;
  gap: 33px;
  margin: 0 auto;
  @media screen and (min-width: 1024px) {
    grid-area: 1 / 3 / 2 / 4;
  }
`;
export const FooterContainerIcon = styled.div`
  &:hover {
    scale: 1.1;
  }
`;
