import styled from "@emotion/styled";
export const StepAddressRoot = styled.div`
  color: var(--primary);
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
  @media screen and (min-width: 1024px) {
    margin-top: 20px;
  }
`;
export const StepAddressContainerForm = styled.div`
  max-width: 600px;
  width: 100%;
  margin: 24px auto;
`;

export const StyledForm = styled.form`
  height: 100%;
  gap: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const StepAddressContainerInput = styled.div`
  display: flex;
  flex-direction: column;
`;
export const StepAddressInputError = styled.span`
  font-size: 12px;
  margin-top: 5px;
  color: red;
`;
export const StepAddressContainerButton = styled.div`
  max-width: 327px;
  width: 100%;
  margin: 24px auto;
`;
