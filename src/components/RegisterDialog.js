import { forwardRef } from "react";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import ButtonRegisterModal from "../assets/buttonRegisterModal.svg";
import BarLight from "../assets/BarLight.svg";
import styled from "styled-components";

const StyledTextField = styled(TextField)(() => ({
  background:
    "linear-gradient(90deg, rgba(159, 74, 255, 0.4) 0%, rgba(169, 157, 255, 0.2) 49.98%, rgba(159, 74, 255, 0.4) 99.95%);",
  marginleft: 5,
  marginRight: 5,
  borderRadius: 10,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  ".css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
    {
      borderColor: "transparent",
      border: "none",
    },
  ".css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
    {
      borderColor: "transparent",
      border: "none",
    },
}));

const TextTitle = styled("p")({
  color: "#FFFFFF",
  textAlign: "center",
  fontFamily: "Genesis",
  fontSize: 20,
  fontWeight: 400,
  margin: 0,
});

const TextForgot = styled("p")({
  color: "#FFFFFF",
  textAlign: "center",
  fontFamily: "Genesis",
  fontSize: 10,
  fontWeight: 400,
});

const TextConnect = styled("p")({
  color: "#FFFFFF",
  textAlign: "center",
  fontFamily: "Genesis",
  fontSize: 10,
  fontWeight: 400,
});

const TextLabel = styled("p")({
  color: "#FFFFFF",
  textAlign: "left",
  fontFamily: "Montserrat-Regular",
  fontSize: 12,
  fontWeight: 700,
  margin: "5px 0px",
});

const TextLink = styled("p")({
  color: "#FFFFFF",
  textAlign: "center",
  fontFamily: "Montserrat-Bold",
  fontSize: 15,
  margin: 0,
  textDecoration: "underline",
});

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const RegisterDialog = ({ open, handleCloseRegister, setOpen, setOpenLogin }) => {
    const handleRegister = () => {
        setOpen(false);
        setOpenLogin(true);
    }
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
      <div style={{ marginTop: "1rem" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            margin: "0.5rem 2rem",
          }}
        >
          <TextLabel>Email</TextLabel>
          <StyledTextField
            InputProps={{
              style: {
                width: 240,
                height: 29,
                fontFamily: "Genesis",
                color: "#fff",
                border: "none",
                fontSize: 12,
              },
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            margin: "0.5rem 2rem",
          }}
        >
          <TextLabel>Username</TextLabel>
          <StyledTextField
            InputProps={{
              style: {
                width: 240,
                height: 29,
                fontFamily: "Genesis",
                color: "#fff",
                border: "none",
                fontSize: 12,
              },
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "0.5rem 2rem",
          }}
        >
          <TextLabel>Password</TextLabel>
          <StyledTextField
            InputProps={{
              style: {
                width: 240,
                height: 29,
                fontFamily: "Genesis",
                color: "#fff",
                border: "none",
                fontSize: 12,
              },
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            margin: "0.5rem 2rem",
          }}
        >
          <TextForgot>Forgot Password?</TextForgot>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            margin: "0.5rem 2rem",
          }}
        >
          <TextLabel>Confirm Password</TextLabel>
          <StyledTextField
            InputProps={{
              style: {
                width: 240,
                height: 29,
                fontFamily: "Genesis",
                color: "#fff",
                border: "none",
                fontSize: 12,
              },
            }}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <IconButton style={{ padding: 0 }} onClick={() => handleRegister()}>
          <Box component="img" src={ButtonRegisterModal} />
        </IconButton>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Box
          component="img"
          src={BarLight}
          style={{ width: 100, height: 38 }}
        />
        <TextConnect>Confirm your Email</TextConnect>
        <Box
          component="img"
          src={BarLight}
          style={{ width: 100, height: 38 }}
        />
      </div>
      <IconButton>
        <TextLink>Re-send confirmation email</TextLink>
      </IconButton>
    </Dialog>
  );
};
