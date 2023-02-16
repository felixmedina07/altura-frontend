import { forwardRef } from "react";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import LogoDefender from "../assets/logoDefender.png";
import ButtonLoginModal from "../assets/buttonLoginModal.png";
import BarLight from "../assets/BarLight.svg";
import FACEBOOK from "../assets/FACEBOOK.svg";
import METAMASK from "../assets/METAMASK.svg";
import GOOGLE from "../assets/GOOGLE.svg";
import ALTURA from "../assets/ALTURA.svg";
import styled from "styled-components";
import TextInput from "./TextInput";
import LoginForm from "./LoginForm";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const LoginDialog = ({
  open,
  handleClose,
  setOpen,
  setOpenRegister,
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
      <LoginForm setOpen={setOpen} setOpenRegister={setOpenRegister} />
    </Dialog>
  );
};
