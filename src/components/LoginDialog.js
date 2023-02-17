import { forwardRef } from "react";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import LoginForm from "./LoginForm";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const LoginDialog = ({
  open,
  handleClose,
  setOpen,
  setOpenRegister,
  setOpenResetPasswordModal,
}) => {
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
      <LoginForm
        setOpen={setOpen}
        setOpenRegister={setOpenRegister}
        setOpenResetPasswordModal={setOpenResetPasswordModal}
      />
    </Dialog>
  );
};
