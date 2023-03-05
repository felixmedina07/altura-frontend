import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import styled from "styled-components";
import { NavItem } from "./NavItem";
import { LoginDialog } from "./LoginDialog";
import { RegisterDialog } from "./RegisterDialog";
import { UserContext } from "../context/mainContext";
import ResetPasswordDialog from "./ResetPasswordDialog";
const useStyles = makeStyles({
  contain: {
    background:
      "linear-gradient(90deg, rgba(26, 255, 222, 0.2) 0%, rgba(0, 0, 0, 0.2) 20%, rgba(0, 0, 0, 0.2) 80%, rgba(26, 255, 222, 0.2) 100%);",
    display: "flex",
    position: "fixed",
    top: 0,
    left: 0,
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
  const { isLogged, setIsLogged, setToken, setUser } = useContext(UserContext);

  const [openModal, setOpenModal] = useState(false);
  const [openModalRegister, setOpenModalRegister] = useState(false);
  const [openResetPasswordModal, setOpenResetPasswordModal] = useState(false);

  const [loginState, setLoginState] = useState(false);
  const [subMenuState, setSubMenuState] = useState(false);
  const navigate = useNavigate();
  const itemSubMenu = [
    { name: "My Profile", route: "vanity" },
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
    if (route === "Exit") {
      setIsLogged(false);
      setUser(null);
      setToken(null);
      sessionStorage.removeItem("Token");
    }
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleCloseRegister = () => {
    setOpenModalRegister(false);
  };

  const handleCloseResetPassword = () => {
    setOpenResetPasswordModal(false);
  };

  const classes = useStyles();
  return (
    <div className={classes.contain}>
      {!isLogged && (
        <>
          <LoginDialog
            loginState={loginState}
            setLoginState={setLoginState}
            open={openModal}
            setOpen={setOpenModal}
            setOpenRegister={setOpenModalRegister}
            handleClose={handleClose}
            setOpenResetPasswordModal={setOpenResetPasswordModal}
          />
          <RegisterDialog
            open={openModalRegister}
            setOpen={setOpenModalRegister}
            setOpenLogin={setOpenModal}
            handleCloseRegister={handleCloseRegister}
          />
          <ResetPasswordDialog
            open={openResetPasswordModal}
            setOpen={setOpenResetPasswordModal}
            setOpenLogin={setOpenModal}
            handleClose={handleCloseResetPassword}
          />
        </>
      )}

      <Box
        component="img"
        alt="The house from the offer."
        src="./image/LOGO_1_.svg"
      />
      <NavItem name="Home" key={1} route={true} />
      <NavItem name="Collections" subMenu={true} key={2} />
      <NavItem name="Marketplace" route={true} key={3} />
      <NavItem name="Learn More" route={true} key={4} />
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
          onClick={() => (!isLogged ? setOpenModal(true) : null)}
        >
          {isLogged ? "My account" : "login"}
        </Button>
        {isLogged && subMenuState && (
          <Box component="div" className={classes.subMenu} onClick={() => {}}>
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
