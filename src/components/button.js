import styled from "styled-components";
import IconButton from "@mui/material/IconButton";

const TextForgot = styled("p")({
  color: "#FFFFFF",
  textAlign: "center",
  fontFamily: "Genesis",
  fontSize: 13,
  fontWeight: 400,
  cursor: "pointer",
  position: "absolute",
});

const ButtonText = styled(IconButton)(
  ({ width = "152px", height = "50px" }) => `{
    width: ${width};
    height: ${height};
    z-index:1000;
    background-image: url( '/image/Button_off.svg' );
    &:active{
        background-image: url( '/image/Button_on.svg' );
    }
  }
`
);

const Button = ({ text, type, disabled = false }) => {
  return (
    <ButtonText type={type} style={{ padding: 0 }} disabled={disabled}>
      <TextForgot>{text}</TextForgot>
    </ButtonText>
  );
};

export default Button;
