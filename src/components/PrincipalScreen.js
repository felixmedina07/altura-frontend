import React from "react";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from "@mui/material/Button";
const useStyles = makeStyles({
  screenBackground: {
    backgroundImage: `url(${"./image/Rectangle.png"})`,
    width: "100%",
    height: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
});
const PrincipalScreen = ({}) => {
  const matches = useMediaQuery('(max-width:1024px)');
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
            left:"5%",
          }}
        >
          <Box
            component="img"
            style={{ width: matches ? 505 : 605, height: 242 }}
            src="./image/welcomeImage.png"
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column",alignItems:'center' }}>
          <Box
            component="img"
            style={{ width: 512, height: 512 }}
            src="./image/girlFace.png"
          />
          <Button
            style={{
              background: `url(${"./image/buttomPlay.png"})`,
              width: 246.24,
              height: 108.24,
              position:'relative',
              bottom:'21%',
              borderRadius: 50,
              color: "white",
              fontFamily: "Genesis",
              fontSize: 29,
              marginBottom:-15,
              marginTop:-5,
              fontWeight: 400,
              textAlign:'center',
              textTransform: "none",
            }}
          >
            play now
          </Button>
        </div>
      </div>
    </Box>
  );
};

export default PrincipalScreen;
