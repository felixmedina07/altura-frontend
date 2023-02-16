import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
export const Layout = ({ children, notFooter }) => {
  return (
    <div style={{width:'auto',height:'auto'}}>
      <Header /> {children} {!notFooter && (<Footer />)}
    </div>
  );
};
