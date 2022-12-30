import React, { useState } from "react";
import { styles } from "../style/header";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import { NavItem } from "./NavItem";
const useStyles = makeStyles({
  contain: {
    background:
      "linear-gradient(90deg, rgba(26, 255, 222, 0.2) 0%, rgba(0, 0, 0, 0.2) 20%, rgba(0, 0, 0, 0.2) 80%, rgba(26, 255, 222, 0.2) 100%);",
    display: "flex",
    paddingLeft: 30,
    paddingRight: 30,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  imageHeader: {
    height: 82.92,
    width: 223.35,
  },
  imageItemMenu:{
    width:'auto',
    height:'auto'
  },
});
export const Header = () => {
    const [menuState,setMenuState] = useState(false);
  const classes = useStyles();
  return (
    <div className={classes.contain}>
      <Box
        component="img"
        className={classes.imageHeader}
        alt="The house from the offer."
        src= "./image/logoDefender.png"
      />
     <NavItem name="Home" />
     <NavItem name="Collection" subMenu={true}/>
     <NavItem name="Marketplace" />
     <NavItem name="Learn More" />
     <Button style={{background:`url(${"./image/buttonLogin.png"})`,width:186,height:91,borderRadius:50,color:'white'}}>Login</Button>
    </div>
  );
};
