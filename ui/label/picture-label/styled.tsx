import styled from "@emotion/styled";

export const PictureLabelRoot = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 310px;
  width: 100%;
  height: 100%;
  border: 1px solid var(--primary);
  border-radius: 10px;
`;
export const PictureLabelCloseContainer = styled.div`
  position: absolute;
  right: -5px;
  top: -5px;
  z-index: 2;
  cursor: pointer;
`;
