import { forwardRef } from "react";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import RegisterForm from "./RegisterForm";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Button = styled("div")({
  marginTop: "2em",
  marginLeft: "2em",
  cursor: "pointer",
});

export const RegisterDialog = ({
  open,
  handleCloseRegister,
  setOpen,
  setOpenLogin,
}) => {
  const closeModal = () => {
    setOpen(false);
    setOpenLogin(true);
  };
  return (
    <Dialog
      PaperProps={{
        sx: {
          width: 320,
          height: 480,
          backgroundImage: `url(${"./image/ImageModal.png"})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        },
      }}
      disableEscapeKeyDown={true}
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleCloseRegister}
      aria-describedby="alert-dialog-slide-description"
    >
      <Button onClick={closeModal}>
        <CloseIcon sx={{ color: "white", fontSize: 20 }} />
      </Button>
      <RegisterForm />
    </Dialog>
  );
};
