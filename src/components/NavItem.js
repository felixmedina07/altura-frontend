import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styled from "styled-components";

const TextMenuNav = styled("p")({
  color: "#FFF",
  textAlign: "center",
  margin: "auto",
  fontFamily: "Montserrat-Regular",
  fontSize: 18,
  fontWeight: 700,
});

const SubTextMenuNav = styled("p")({
  color: "#FFFFFF",
  textAlign: "left",
  margin: 0,
  fontFamily: "Montserrat-Italic",
  fontSize: 14,
  fontWeight: 400,
  opacity:0.8,
  width: 261,
  height: 22,
  paddingLeft: 15,
  "&:hover": {
    background:
      "linear-gradient(90deg, rgba(26, 255, 222, 0.5) 0%, rgba(26, 255, 222, 0) 100%);",
  },
});

export const NavItem = ({ name, subMenu }) => {
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
      height: 82.48,
      width: 250,
      backgroundImage: `url(${"./image/GroupMenuOff.png"})`,
    },
    itemMenuAct: {
      display: "flex",
      flexDirection: subMenu ? "column" : "row",
      cursor: "pointer",
      alignItems: "center",
      alignSelf: "center",
      justifyContent: "center",
      height: 82.48,
      width: 250,
      backgroundImage: `url(${"./image/GroupMenuOn.png"})`,
    },
    subMenu: {
      display: "flex",
      position: "absolute",
      zIndex: 99,
      height: 307,
      width: 308,
      flex: 1,
      backgroundImage: `url(${"./image/SubMenu.png"})`,
      marginTop: 60,
    },
    textMenu: {
      color: "#FFF",
      textAlign: "center",
      margin: "auto",
      fontFamily: "Montserrat-Regular.ttf",
      fontSize: 18,
      fontWeight: 700,
    },
  });
  const classes = useStyles();
  const [subMenuState, setSubMenuState] = useState(false);
  const [itemNavStatus, setItemNavStatus] = useState(false);
  console.log(subMenuState);
  return (
    <>
      {!subMenu && (
        <Box
          component="div"
          className={itemNavStatus ? classes.itemMenuAct : classes.itemMenu}
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
          style={{ display: "flex", flexDirection: "column", marginTop: 5 }}
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
                  marginTop: 35,
                }}
              >
                {itemSubMenu.map((item) => (
                  <SubTextMenuNav key={item.name}>{item.name}</SubTextMenuNav>
                ))}
              </div>
            </Box>
          )}
        </div>
      )}
    </>
  );
};
