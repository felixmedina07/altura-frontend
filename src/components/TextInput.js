import styled from "styled-components";
import TextField from "@mui/material/TextField";

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

const TextLabel = styled("p")({
  color: "#FFFFFF",
  textAlign: "left",
  fontFamily: "Montserrat-Regular",
  fontSize: 12,
  fontWeight: 700,
  margin: "5px 0px",
});

const Container = styled.div({});

const TextInput = ({
  title,
  name,
  type = "text",
  text,
  setText,
  handleBlur,
}) => {
  return (
    <Container>
      <TextLabel>{title}</TextLabel>
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
        onBlur={handleBlur}
        type={type}
        name={name}
        value={text}
        onChange={setText}
      />
    </Container>
  );
};

export default TextInput;
