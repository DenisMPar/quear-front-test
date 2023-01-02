import styled from "@emotion/styled";

export const Label = styled.div`
  font-weight: 700;
  padding: 2px 5px;
  font-size: 12px;
  color: var(--bg);
  width: 100%;
  height: 100%;
  background-color: var(--dark-ligth);
  border-radius: 12px;
`;
export const ContainerLabel = styled.div`
  width: 100%;
  max-width: 115px;
  text-align: center;
  position: absolute;
  margin: 0 auto;
  bottom: 12px;
  @media screen and (min-width: 1024px) {
    margin-bottom: 16px;
  }
`;
