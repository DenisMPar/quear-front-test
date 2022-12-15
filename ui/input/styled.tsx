import styled from "@emotion/styled";

const BaseInput = styled.input`
  width: 100%;
  height: 40px;
  outline: none;
  border-radius: 12px;
  border: none;
  padding: 0 16px;
  font-family: inherit;
  font-size: 14px;
  &::placeholder {
    color: var(--dark-ligth);
    opacity: 1;
  }

  &:-ms-input-placeholder {
    color: var(--dark-ligth);
  }

  &::-ms-input-placeholder {
    color: var(--dark-ligth);
  }
`;

export const InputShadowed = styled(BaseInput)`
  box-shadow: 0px 4px 4px var(--shadow);
`;
export const InputOutlined = styled(BaseInput)`
  border: solid 1px var(--dark-secondary);
  &:focus {
    border-color: var(--primary);
  }
`;
export const InputOutlinedBig = styled(BaseInput)`
  height: 57px;
  border: solid 1px var(--dark-secondary);
  &:focus {
    border-color: var(--primary);
  }
`;

export const InputWithIconRoot = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: var(--bg);
  padding: 0 14px;
  border-radius: 12px;
  border: solid 1px var(--dark-secondary);
  &:focus-within {
    border-color: var(--primary);
  }
`;
export const InputWithIconStyled = styled(BaseInput)`
  padding: 0 10px;
`;
export const InputWithIconStyledBig = styled(BaseInput)`
  height: 57px;
  padding: 0 10px;
`;
export const InputPasswordContainerIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const BaseTextArea = styled.textarea`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  padding: 11px 16px;
  border: none;
  resize: none;
  outline: none;
  font-family: inherit;
  font-size: 14px;
  &::placeholder {
    color: var(--dark-ligth);
    opacity: 1;
  }

  &:-ms-input-placeholder {
    color: var(--dark-ligth);
  }

  &::-ms-input-placeholder {
    color: var(--dark-ligth);
  }
`;

export const TextAreaShadowed = styled(BaseTextArea)`
  box-shadow: 0px 4px 4px var(--shadow);
`;
