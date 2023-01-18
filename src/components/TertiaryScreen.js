import React from "react";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import styled from "styled-components";
const useStyles = makeStyles({
  screenBackground: {
    background: "#090013",
    width: "100%",
    height: "80%",
  },
});
const Contain = styled("div")`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: row;
  margin-top: 80px;
  justify-content: space-between;
  @media (max-width: 1440px) {
    justify-content: space-between;
  }
`;
const ColumnTwo = styled("div")`
    display: flex;
    flex-direction:column;
    align-items: flex-end;
    margin-right: 35px;
    @media (min-width: 1440px) {
      align-items: flex-end;
      margin-right: 35px;
    }
`;
const ImageTwo = styled(Box)`
  @media (min-width: 1440px) {
    width: 700px;
    height: 122px;
  }
  @media (max-width: 1024px) {
    width: 505px;
    height: 122px;
  }
`;
const ImageOne = styled(Box)`
  @media (max-width: 1024px) {
    width: 500px;
    height: 467px;
  }
`;
const ContainRight = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom:5%;
  @media (max-width: 1440px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
  }
`;
const Text = styled("p")`
  width: 550px;
  color: #ffffff;
  text-align: right;
  font-family: "Montserrat-Regular";
  font-size: 15px;
  position:relative;
  bottom:5%;
  font-weight: 500;
  margin-top: 10px;
  @media (min-width: 1440px) {
    width: 550px;
    height: 550px;
    margin-right: 15px;
  }
  @media (max-width: 1024px) {
    width: 485px;
    height: 550px;
  }
`;
const TextTitle = styled("p")({
  position: "absolute",
  color: "#FFFFFF",
  textAlign: "center",
  fontFamily: "Genesis",
  fontSize: 24,
  fontWeight: 400,
  marginTop: 20,
});
const TertiaryScreen = ({}) => {
  const classes = useStyles();
  return (
    <Contain>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <ImageOne
          component="img"
          // style={{
          //   width: 213,
          //   height: 79,
          // }}
          alt="The house from the offer."
          src="./image/background3.png"
        />
      </div>
      <ColumnTwo>
        <ContainRight component="div">
          <ImageTwo component="img" src="./image/GAMEPLAY.png" />
          <TextTitle>GAMEPLAY</TextTitle>
        </ContainRight>
        <Text>
          Operation Safe Place features a blend of tower defense and
          first-person shooter gameplay. As the commander, you can collect and
          level up tower defense cards that give you access to various types of
          walls, buildings, and towers to use on the map to defend against waves
          of enemies that grow in difficulty. These collectible cards can also
          be combined into decks with unique ultimate abilities. In addition to
          placing towers, you can also engage in first-person shooter action as
          you work with your squad to take down enemies.
          <br />
          <br />
          One map is available in the game, with 20 waves that increase in
          difficulty indefinitely. A new boss appears at the end of every 20
          waves, and defeating these bosses can earn you rare cards that provide
          special abilities for your squad or towers for you to use as
          commander.
          <br />
          <br /> 
          Towers and enemies in Operation Safe Place have health,
          armor, and shields, and some enemies can shoot back. As you progress
          through the game, you can level up your towers and corresponding cards
          permanently in your deck.
        </Text>
      </ColumnTwo>
    </Contain>
  );
};

export default TertiaryScreen;
