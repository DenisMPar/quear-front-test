import React, { ComponentType, ReactHTMLElement, ReactNode } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { ModalHeader, ModalText, ModalTitle } from "./styled";
import { BodyPrimary } from "../../ui/text";
import { StyledAlert, StyledClose } from "../../ui/icons";

const style = {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 343,
  bgcolor: "background.paper",
  borderRadius: "12px",
  border: "none",
  outline: "none",
  boxShadow: 24,
  padding: "20px 16px",
};
interface Props {
  title: string;
  text: string;
  children: ReactNode;
}
export function ModalComponent(props: Props) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div onClick={handleOpen}>{props.children}</div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ModalHeader>
            <ModalTitle>{props.title}</ModalTitle>
            <div onClick={handleClose}>
              <StyledClose width="20px" height="20px" color="dark-ligth" />
            </div>
          </ModalHeader>
          <ModalText>{props.text}</ModalText>
        </Box>
      </Modal>
    </div>
  );
}
