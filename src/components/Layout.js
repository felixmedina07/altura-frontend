import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import styled from "styled-components";

const Container = styled.div(() => ``);
const Body = styled.div(
  () => `
  padding-top: 8rem;
  
`
);

const Background = styled.div(
  () => `
background-image: url("./image/Rectangle.png");
background-repeat: no-repeat;
background-size: 100%;
height: 100%;
width: 100%;
z-index:-1;
position: fixed;
`
);

export const Layout = ({ children, notFooter }) => {
  return (
    <Container>
      <Background />
      <Header /> <Body>{children}</Body> {!notFooter && <Footer />}
    </Container>
  );
};
