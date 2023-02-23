import React from "react";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
const useStyles = makeStyles({
  contain: {
    position: "fixed",
    bottom: 0,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  imageHeader: {
    width: 70.16,
    height: 70.4,
  },
});
export const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.contain}>
      <Box
        component="a"
        href="https://www.facebook.com/groups/ospdefense"
        target="_blank"
      >
        <Box
          component="img"
          className={classes.imageHeader}
          alt="facebook icon"
          src="./image/facebook.png"
          onClick={() => {}}
        />
      </Box>
      <Box component="a">
        <Box
          component="img"
          className={classes.imageHeader}
          alt="instagram icon"
          src="./image/instagram.png"
        />
      </Box>
      <Box component="a" href="https://discord.gg/thk66yGAN2" target="_blank">
        <Box
          component="img"
          className={classes.imageHeader}
          alt="discord icon"
          src="./image/discord.png"
        />
      </Box>
      <Box
        component="a"
        href="https://twitter.com/OSPdefenseTD"
        target="_blank"
      >
        <Box
          component="img"
          className={classes.imageHeader}
          alt="twitter icon"
          src="./image/twitter.png"
        />
      </Box>
    </div>
  );
};
