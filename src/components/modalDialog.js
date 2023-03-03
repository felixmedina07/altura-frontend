import { Dialog, Slide } from "@mui/material";
import { forwardRef } from "react";
import styled from "styled-components";
import Button from "./button";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Text = styled.p`
  color: #ffff;
  text-align: center;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
`;

const ModalDialog = ({
  open,
  setOpen,
  text,
  leftButtom = () => {},
  rightButtom = () => {},
}) => {
  return (
    <Dialog
      PaperProps={{
        sx: {
          width: 320,
          height: 200,
          backgroundImage: `url(${"./image/ImageModal.png"})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          justifyContent: "center",
          alignItems: "center",
        },
      }}
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={() => setOpen(false)}
      aria-describedby="alert-dialog-slide-description"
    >
      <Text>{text}</Text>
      <ButtonsContainer>
        <Button text={"Cancel"} onClick={leftButtom} />
        <Button text={"Accept"} onClick={rightButtom} />
      </ButtonsContainer>
    </Dialog>
  );
};

export default ModalDialog;
