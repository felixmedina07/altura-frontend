import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const NavItem = ({ name, subMenu }) => {
  const useStyles = makeStyles({
    itemMenu: {
      display: "flex",
      flexDirection: subMenu ? "column" : "row",
      cursor: "pointer",
      alignItems: "center",
      alignSelf: "center",
      justifyContent: "center",
      height: 82.48,
      width: 262.05,
      backgroundImage: `url(${"./image/GroupMenuOff.png"})`,
      "&:hover": {
        backgroundImage: `url(${"./image/GroupMenuOn.png"})`,
      },
    },
    subMenu: {
      display: "flex",
      position: "absolute",
      zIndex: 99,
      height: 275,
      width: 270,
      backgroundImage: `url(${"./image/SubMenu.png"})`,
      marginTop: 60,
    },
  });
  const classes = useStyles();
  const [subMenuState, setSubMenuState] = useState(false);
  console.log(subMenuState)
  return (
    <>
      {!subMenu && (
        <Box
          component="div"
          className={classes.itemMenu}
        >
          {/* <Box
           component="img"
           className={classes.imageItemMenu}
           alt="The house from the offer."
           src="./image/GroupMenuOn.png"
         /> */}
          <Typography
            variant="body1"
            component="p"
            color="white"
            align="center"
            margin="auto"
          >
            {name}
          </Typography>
        </Box>
      )}
      {subMenu && (
        <div style={{ display: "flex", flexDirection: "column", marginTop:5 } } onMouseEnter={() => { setSubMenuState(true)}}
        onMouseLeave={() => { setSubMenuState(false)}}>
          <Box
            component="div"
            className={classes.itemMenu}
          >
            {/* <Box
              component="img"
              className={classes.imageItemMenu}
              alt="The house from the offer."
              src="./image/GroupMenuOn.png"
            /> */}
            <Typography
              variant="body1"
              component="p"
              color="white"
              align="center"
              margin="auto"
            >
              {name}
            </Typography>
          </Box>
         {
            subMenuState && (
                <Box component="div" className={classes.subMenu} onClick={() => {}}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: 45,
                    marginTop: 30,
                  }}
                >
                  <Typography
                    variant="body1"
                    component="p"
                    color="white"
                    align="left"
                  >
                    Apes
                  </Typography>
                  <Typography
                    variant="body1"
                    component="p"
                    color="white"
                    align="left"
                  >
                    Dudes
                  </Typography>
                  <Typography
                    variant="body1"
                    component="p"
                    color="white"
                    align="left"
                  >
                    Chickens
                  </Typography>
                  <Typography
                    variant="body1"
                    component="p"
                    color="white"
                    align="left"
                  >
                    Elves
                  </Typography>
                  <Typography
                    variant="body1"
                    component="p"
                    color="white"
                    align="left"
                  >
                    Happy Blob Squad
                  </Typography>
                  <Typography
                    variant="body1"
                    component="p"
                    color="white"
                    align="left"
                  >
                    Killer Kitties
                  </Typography>
                  <Typography
                    variant="body1"
                    component="p"
                    color="white"
                    align="left"
                  >
                    Owls
                  </Typography>
                  <Typography
                    variant="body1"
                    component="p"
                    color="white"
                    align="left"
                  >
                    Queens
                  </Typography>
                  <Typography
                    variant="body1"
                    component="p"
                    color="white"
                    align="left"
                  >
                    Vixens
                  </Typography>
                  <Typography
                    variant="body1"
                    component="p"
                    color="white"
                    align="left"
                  >
                    Squeegee Gwakkas
                  </Typography>
                </div>
              </Box>
            )
         }
        </div>
      )}
    </>
  );
};
