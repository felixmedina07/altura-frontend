import React from "react";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import buttomPlay from "../assets/buttomPlay.svg";
import IconButton from "@mui/material/IconButton";
import { Typography } from "@mui/material";
const useStyles = makeStyles({
  screenBackground: {
    width: "100%",
    height: "100%",
    marginTop: "-10rem",
  },
});
const PrincipalScreen = ({}) => {
  const matches = useMediaQuery("(max-width:1024px)");
  const classes = useStyles();
  return (
    <Box component="div" className={classes.screenBackground}>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignSelf: "center",
            position: "relative",
            top: "5%",
            left: "5%",
          }}
        >
          <Box
            component="img"
            style={{ width: matches ? 505 : 605, height: 242 }}
            src="./image/welcomeImage.png"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            style={{ width: 512, height: 512 }}
            src="./image/girlFace.png"
          />
          <IconButton style={{ position: "relative", bottom: "15%" }}>
            <Box
              component="img"
              src={buttomPlay}
              style={{ position: "absolute", zIndex: 1000 }}
            />
            <Typography
              component="p"
              style={{
                color: "#FFFF",
                fontFamily: "Genesis",
                fontSize: 20,
                fontWeight: 400,
                textAlign: "center",
                background: "transparent",
                width: 145,
                margin: 0,
                zIndex: 2000,
              }}
            >
              Play Now For Free
            </Typography>
          </IconButton>
        </div>
      </div>
    </Box>
  );
};

export default PrincipalScreen;
