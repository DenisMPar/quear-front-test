import styled from "@emotion/styled";

export const StepYearRoot = styled.div`
  display: grid;
  grid-template-rows: 1fr 3fr;
  color: var(--primary);
  width: 100%;
  gap: 20px;
  align-items: center;
  @media screen and (min-width: 1024px) {
    margin-top: 20px;
    gap: 46px;
  }
`;
export const StepYearInputContainer = styled.div`
  width: 100%;

  align-self: flex-start;
  @media screen and (min-width: 1024px) {
    max-width: 600px;
  }
`;
