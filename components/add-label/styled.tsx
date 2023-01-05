import styled from "@emotion/styled";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  type: "big" | "small";
}
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

export const AddLabelRoot = styled.div<Props>`
  position: relative;
  width: 100%;
  max-width: 340px;
  height: 100%;
  color: var(--dark-ligth);
  font-family: inherit;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  flex-direction: ${(props) => (props.type == "big" ? "column" : "row")};
  align-items: center;
  justify-content: center;
  gap: ${(props) => (props.type == "big" ? "16px" : "10px")};
  border: 1px solid var(--primary);
  border-radius: 10px;
  cursor: pointer;
`;
