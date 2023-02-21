import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import styled from "styled-components";

const Container = styled.div(() => ``);
const Body = styled.div(
  () => `
  padding-top: 8rem;
  background-image: url("./image/Rectangle.png");
  background-repeat: no-repeat;
  background-size: 100%;
  height: 55rem;
`
);

export const Layout = ({ children, notFooter }) => {
  return (
    <Container>
      <Header /> <Body>{children}</Body> {!notFooter && <Footer />}
    </Container>
  );
};
