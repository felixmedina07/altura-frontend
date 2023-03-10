import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const TextMenuNav = styled("p")({
  color: "#FFF",
  textAlign: "center",
  margin: "auto",
  fontFamily: "Genesis",
  fontSize: 14,
  fontWeight: 400,
  marginTop: 16,
});

const SubTextMenuNav = styled("p")({
  color: "#FFFFFF",
  textAlign: "left",
  margin: 0,
  fontFamily: "Genesis",
  fontSize: 14,
  fontWeight: 400,
  opacity: 0.8,
  width: 200,
  height: 14,
  paddingLeft: 5,
  paddingTop: 2,
  "&:hover": {
    background:
      "linear-gradient(90deg, rgba(26, 255, 222, 0.5) 0%, rgba(26, 255, 222, 0) 100%);",
    paddingBottom: 2,
  },
});

export const NavItem = ({ name, subMenu, route }) => {
  const navigate = useNavigate();
  const itemSubMenu = [
    { name: "Apes" },
    { name: "Dudes" },
    { name: "Chikens" },
    { name: "Dudes" },
    { name: "Elves" },
    { name: "Happy Blob Squad" },
    { name: "Killer Kitties" },
    { name: "Owls" },
    { name: "Queens" },
    { name: "Vixens" },
    { name: "Squeegee Gwakkas" },
  ];
  const useStyles = makeStyles({
    itemMenu: {
      display: "flex",
      flexDirection: subMenu ? "column" : "row",
      cursor: "pointer",
      alignItems: "center",
      alignSelf: "center",
      justifyContent: "center",
      backgroundRepeat: "no-repeat",
      height: 60.3,
      width: 161.4,
      backgroundImage: `url(${"./image/btnoff.png"})`,
    },
    itemMenuAct: {
      display: "flex",
      flexDirection: subMenu ? "column" : "row",
      cursor: "pointer",
      alignItems: "center",
      alignSelf: "center",
      justifyContent: "center",
      backgroundRepeat: "no-repeat",
      height: 55.3,
      width: 161.4,
      backgroundImage: `url(${"./image/btnon.png"})`,
    },
    subMenu: {
      display: "flex",
      position: "absolute",
      zIndex: 99,
      height: 229,
      width: 223,
      flex: 1,
      backgroundImage: `url(${"./image/SubMenuTwo.png"})`,
      marginTop: 40,
    },
    textMenu: {
      color: "#FFF",
      textAlign: "center",
      margin: "auto",
      fontFamily: "Montserrat-Regular.ttf",
      fontSize: 18,
      fontWeight: 700,
    },
    containNav: {
      marginTop: 7,
    },
  });
  const classes = useStyles();
  const [subMenuState, setSubMenuState] = useState(false);
  const [itemNavStatus, setItemNavStatus] = useState(false);
  const handleNavigate = (name, route) => {
    if (route) {
      if (name === "Home") {
        navigate("/");
      }
      if (name === "Marketplace") {
        navigate("/marketplace");
      }
      if (name === "Learn More") {
        navigate("/learn-more");
      }
    }
    return;
  };
  return (
    <div className={classes.containNav}>
      {!subMenu && (
        <Box
          component="div"
          className={itemNavStatus ? classes.itemMenuAct : classes.itemMenu}
          onClick={() => handleNavigate(name, route)}
          onMouseEnter={() => {
            setItemNavStatus(true);
          }}
          onMouseLeave={() => {
            setItemNavStatus(false);
          }}
        >
          <TextMenuNav>{name}</TextMenuNav>
        </Box>
      )}
      {subMenu && (
        <div
          style={{ display: "flex", flexDirection: "column" }}
          onMouseEnter={() => {
            setSubMenuState(true);
            setItemNavStatus(true);
          }}
          onMouseLeave={() => {
            setSubMenuState(false);
            setItemNavStatus(false);
          }}
        >
          <Box
            component="div"
            className={itemNavStatus ? classes.itemMenuAct : classes.itemMenu}
          >
            <TextMenuNav>{name}</TextMenuNav>
          </Box>
          {subMenuState && (
            <Box component="div" className={classes.subMenu} onClick={() => {}}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: 35,
                  marginTop: 25,
                }}
              >
                {itemSubMenu.map((item, index) => (
                  <SubTextMenuNav
                    key={`${item.name}-${Math.random() * index}-${index}`}
                  >
                    {item.name}
                  </SubTextMenuNav>
                ))}
              </div>
            </Box>
          )}
        </div>
      )}
    </div>
  );
};
