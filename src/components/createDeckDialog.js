import { Dialog, Slide } from "@mui/material";
import { forwardRef, useContext, useState } from "react";
import styled from "styled-components";
import { BuildDeckContext } from "../context/buildDeckContext";
import Button from "./button";
import TextInput from "./TextInput";

const MaxInput = 15;

const Count = styled.p`
  color: #fff;
  font-family: Genesis;
  font-size: 10px;
  cursor: pointer;
  margin-top: 5px;
  align-self: center;
`;

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CreateDeckDialog = ({ open, setOpen }) => {
  const { setName } = useContext(BuildDeckContext);
  const [nameDialog, setNameDialog] = useState("");
  const handleChange = (e) => {
    const { value } = e.target;
    if (value.length < MaxInput + 1) {
      setNameDialog(value);
    }
  };

  const handleSave = () => {
    setName(nameDialog);
    setOpen(false);
  };
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
      <TextInput
        title={"Name the Deck"}
        setText={handleChange}
        type={"text"}
        text={nameDialog}
      />
      <Count>{`${MaxInput - nameDialog.length}/${MaxInput}`}</Count>
      <Button text={"Save"} disabled={nameDialog < 1} onClick={handleSave} />
    </Dialog>
  );
};

export default CreateDeckDialog;
