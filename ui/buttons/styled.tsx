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
export const ButtonPrimary = styled(BaseButton)<Props>`
  font-weight: ${(props) => (props.variant == "dark" ? `700` : `900`)};
  font-size: ${(props) => (props.variant == "dark" ? `16px` : `20px`)};
  letter-spacing: ${(props) => (props.variant == "dark" ? `` : `0.2em`)};
  color: ${(props) =>
    props.variant == "dark" ? `var(--bg)` : `var(--primary)`};
  background-color: ${(props) =>
    props.variant == "dark" ? `var(--primary)` : `var(--bg)`};
  &:hover {
    background-color: ${(props) =>
      props.variant == "dark" ? `var(--primary-hover)` : `var(--secondary)`};
  }
`;
export const ButtonPrimaryBig = styled(ButtonPrimary)`
  height: 48px;
`;
export const ButtonOutlined = styled(BaseButton)`
  color: var(--primary);
  font-size: 16px;
  font-weight: 700;
  background: none;
  border: solid 1px;
  border-color: var(--primary);
  &:hover {
    background-color: var(--secondary-hover);
  }
`;
export const ButtonOutlinedBig = styled(ButtonOutlined)`
  height: 48px;
`;
export const ButtonBig = styled(BaseButton)`
  height: 100%;
  max-height: 96px;
  flex-direction: column;
  padding: 13px 0;
  gap: 7px;
  color: var(--primary);
  font-size: 18px;
  font-weight: 600;
  background-color: var(--bg-secondary);
  box-shadow: 2px 4px 4px var(--shadow);
  border-radius: 12px;
  @media screen and (min-width: 1024px) {
    max-height: 125px;
    padding: 22px;
  }
  &:hover {
    background-color: var(--secondary);
  }
`;
interface TextButtonProps extends React.HTMLAttributes<HTMLSpanElement> {
  underline?: boolean;
  color?: string;
}
export const TextButton = styled.span<TextButtonProps>`
  color: ${(props) =>
    props.color ? `var(--${props.color})` : `var(--primary)`};
  text-decoration: ${(props) => (props.underline ? `underline` : ``)};
  cursor: pointer;
`;
