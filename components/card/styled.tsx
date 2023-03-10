import styled from "@emotion/styled";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  active: boolean | undefined;
}
export const CardRoot = styled.div`
  width: 234px;
`;
export const CardContainer = styled.div<Props>`
  width: 237px;
  height: 388px;
  border-radius: 10px;
  border: ${(props) => (props.active ? "1px solid var(--primary)" : "")};
`;
export const CardArrow = styled.div<Props>`
  display: ${(props) => (props.active ? "block" : "none")};
  margin: 0 auto;
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 8px solid var(--primary);
`;
export const CardTop = styled.div`
  color: var(--bg);
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 35px;
  border-radius: 7px 7px 0 0;
`;
export const CardBody = styled.div`
  background-color: var(--bg-secondary);
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  max-height: 100%;
  padding: 16px;
  border-radius: 0 0 10px 10px;
`;
export const CardCompany = styled.div`
  background-color: var(--bg-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  height: 32px;
  border-radius: 10px;
`;
export const CardCompanyLogo = styled.div`
  background-color: #d9d9d9;
  width: 31px;
  height: 31px;
`;
export const CardContainerMain = styled.div`
  background-color: var(--bg-secondary);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 150px;
  border-radius: 10px;
`;
export const CardContainerTitle = styled.div`
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 6px;
  background-color: var(--bg-secondary);
  color: var(--primary);
  width: 100%;
  height: 107px;
  padding: 12px 0;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 0px;
    border-top: 1px solid;
    border-color: var(--primary);
    z-index: 2;
  }
`;
export const CardContainerSubtitle = styled.div`
  background-color: var(--bg-secondary);
  font-size: 14px;
  padding: 12px 0;
  width: 100%;
  height: 43px;
`;
export const CardContainerButtons = styled.div`
  background-color: var(--bg-secondary);
  display: flex;
  flex-direction: column;
  gap: 9px;
  width: 100%;
`;
