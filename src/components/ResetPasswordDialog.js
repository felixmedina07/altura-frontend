import { forwardRef } from "react";
import { Dialog } from "@mui/material";
import Slide from "@mui/material/Slide";
import ResetPasswordForm from "./ResetPasswordForm";
import CloseIcon from "@mui/icons-material/Close";
import styled from "styled-components";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Button = styled("div")({
  marginTop: "2em",
  marginLeft: "2em",
  cursor: "pointer",
});

const ResetPasswordDialog = ({ open, handleClose, setOpen, setOpenLogin }) => {
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
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <Button onClick={closeModal}>
        <CloseIcon sx={{ color: "white", fontSize: 20 }} />
      </Button>
      <ResetPasswordForm />
    </Dialog>
  );
};

export default ResetPasswordDialog;
