import React, { useState, forwardRef, ReactElement, Ref } from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import styled from "styled-components";
import { NavItem } from "./NavItem";
import { LoginDialog } from "./LoginDialog";
import { RegisterDialog } from "./RegisterDialog";
const useStyles = makeStyles({
  contain: {
    background:
      "linear-gradient(90deg, rgba(26, 255, 222, 0.2) 0%, rgba(0, 0, 0, 0.2) 20%, rgba(0, 0, 0, 0.2) 80%, rgba(26, 255, 222, 0.2) 100%);",
    display: "flex",
    position: "fixed",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    zIndex: 1000,
  },
  imageHeader: {
    height: 82.92,
    width: 223.35,
  },
  imageItemMenu: {
    width: "auto",
    height: "auto",
  },
  subMenu: {
    display: "flex",
    position: "absolute",
    zIndex: 99,
    top: "-15%",
    height: 102,
    width: 223,
    flex: 1,
    right: "1%",
    backgroundImage: `url(${"./image/SubMenuLogin.png"})`,
    backgroundRepeat: "no-repeat",
    marginTop: 60,
  },
});

const SubTextMenuNav = styled("p")({
  color: "#FFFFFF",
  textAlign: "right",
  marginTop: 1,
  marginBottom: 1,
  paddingRight: 10,
  fontFamily: "Genesis",
  fontSize: 10,
  fontWeight: 400,
  opacity: 0.8,
  width: 200,
  height: 16,
  position: "relative",
  cursor: "pointer",
  "&:hover": {
    background:
      "linear-gradient(270deg, rgba(26, 255, 222, 0.5) -0.05%, rgba(26, 255, 222, 0) 99.98%);",
  },
});


export const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openModalRegister, setOpenModalRegister] = useState(false);
  const [loginState, setLoginState] = useState(false);
  const [subMenuState, setSubMenuState] = useState(false);
  const navigate = useNavigate();
  const itemSubMenu = [
    { name: "My Vanity", route: "vanity" },
    { name: "Deck Builder", route: "deck-builder" },
    { name: "Launch Forces", route: "launch-forces" },
    { name: "Exit", route: "Exit" },
  ];
  const handleLoginPage = (route) => {
    if (route === "vanity") {
      navigate("/vanity");
    }
    if (route === "launch-forces") {
      navigate("/launch-forces");
    }
    if (route === "deck-builder") {
      navigate("/deck-builder");
    }
    if(route === "Exit"){
      setLoginState(false);
    }
  };

  const handleClose = () => {
    setOpenModal(false);
  }

  const handleCloseRegister = () => {
    setOpenModalRegister(false);
  }
console.log(loginState, 'l');
  const classes = useStyles();
  return (
    <div className={classes.contain}>
      <LoginDialog loginState={loginState} setLoginState={setLoginState} open={openModal} setOpen={setOpenModal} setOpenRegister={setOpenModalRegister} handleClose={handleClose} />
      <RegisterDialog open={openModalRegister} setOpen={setOpenModalRegister} setOpenLogin={setOpenModal} handleCloseRegister={handleCloseRegister} />
      <Box
        component="img"
        alt="The house from the offer."
        src="./image/LOGO_1_.svg"
      />
      <NavItem name="Home" key={1} route={true} />
      <NavItem name="Collections" subMenu={true} key={2} />
      <NavItem name="Marketplace" route={true} key={3} />
      <NavItem name="Learn More" key={4} />
      <div
        onMouseEnter={() => {
          setSubMenuState(true);
        }}
        onMouseLeave={() => {
          setSubMenuState(false);
        }}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <Button
          style={{
            marginTop: 5,
            paddingBottom: 12,
            background: `url(${"./image/buttonLogin2.png"})`,
            backgroundRepeat: "no-repeat",
            width: 130,
            height: 63,
            borderRadius: 50,
            color: "white",
            fontFamily: "Genesis",
            fontSize: 12,
            fontWeight: 400,
            textTransform: "none",
          }}
          onClick={() => !loginState ? setOpenModal(true) : null}
        >
          {loginState ? "My account" : "login"}
        </Button>
        {loginState && subMenuState && (
          <Box component="div" className={classes.subMenu} onClick={() => { }}>
            <div
              style={{
                display: "flex",
                position: "relative",
                right: "3%",
                flexDirection: "column",
                marginTop: 20,
                paddingRight: 10,
              }}
            >
              {itemSubMenu.map((item) => (
                <SubTextMenuNav
                  onClick={() => handleLoginPage(item.route)}
                  key={item.name}
                >
                  {item.name}
                </SubTextMenuNav>
              ))}
            </div>
          </Box>
        )}
      </div>
    </div>
  );
};
