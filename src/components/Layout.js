import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import Typography from "@mui/material/Typography";
export const Layout = ({ children }) => {
  return (
    <>
      <Header /> {children} <Footer />
    </>
  );
};
