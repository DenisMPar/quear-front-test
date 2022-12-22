import styled from "@emotion/styled";
import { Paper, Popper } from "@mui/material";

export const StyledTextField = styled.div`
  font-family: inherit;
  font-size: 14px;
  font-weight: 400;
  box-sizing: border-box;
  min-height: calc(1.5em + 22px);
  padding: 12px;
  border-radius: 12px;
  text-align: left;
  line-height: 1.5;
  background: var(--bg);
  border: none;
  color: var(--dark-ligth);
  box-shadow: 0px 4px 4px var(--shadow);
  cursor: pointer;
`;
export const StyledInput = styled.input`
  font-family: inherit;
  color: var(--dark-ligth);
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
`;
export const StyledLi = styled.li`
  color: var(--primary);
  font-family: nunito;
  font-size: 16px;
`;

export const PaperStyled = styled(Paper)`
  box-shadow: 0px 4px 4px var(--shadow);
  border-radius: 12px;
`;
export const PopperStyled = styled(Popper)`
  box-shadow: 0px 4px 4px var(--shadow);
  border-radius: 12px;
`;
