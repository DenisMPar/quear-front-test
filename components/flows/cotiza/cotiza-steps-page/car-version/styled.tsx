import styled from "@emotion/styled";

export const StepVersionRoot = styled.div`
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
export const StepVersionInputContainer = styled.div`
  width: 100%;
  max-width: 600px;
  align-self: flex-start;
`;
