import styled from "@emotion/styled";
interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  variant: "light" | "dark";
}

const BaseButton = styled.button`
  font-family: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border: none;
  width: 100%;
  height: 40px;
  border-radius: 12px;
  cursor: pointer;
`;
export const PrimaryButton = styled(BaseButton)<Props>`
  font-weight: ${(props) => (props.variant == "dark" ? `700` : `900`)};
  font-size: ${(props) => (props.variant == "dark" ? `16px` : `20px`)};
  letter-spacing: ${(props) => (props.variant == "dark" ? `` : `0.2em`)};
  color: ${(props) =>
    props.variant == "dark" ? `var(--bg)` : `var(--primary)`};
  background-color: ${(props) =>
    props.variant == "dark" ? `var(--primary)` : `var(--bg)`};
`;
export const OutlinedButton = styled(BaseButton)`
  color: var(--primary);
  font-size: 16px;
  font-weight: 700;
  background: none;
  border: solid 1px;
  border-color: var(--primary);
`;
