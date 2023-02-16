import { forwardRef } from "react";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import RegisterForm from "./RegisterForm";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const RegisterDialog = ({ open, handleCloseRegister }) => {
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
      onClose={handleCloseRegister}
      aria-describedby="alert-dialog-slide-description"
    >
      <RegisterForm />
    </Dialog>
  );
};
