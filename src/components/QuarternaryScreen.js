import React from "react";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import styled from "styled-components";
const useStyles = makeStyles({
  screenBackground: {
    background: "#090013",
    width: "100%",
    height: "90%",
  },
});
const Contain = styled("div")`
  width: 100%;
  background: #090013;
  background-image: url(${"./image/imageBack3.png"});
  background-repeat: no-repeat;
  background-size: cover;
`;
const ColumnTwo = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
`;
const ImageTwo = styled(Box)`
  width: 505px;
  height: 122px;
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
`;
const Text = styled("p")`
  width: 70%;
  flex: 1;
  color: #ffffff;
  text-align: center;
  font-family: "Montserrat-Regular";
  font-size: 15px;
  font-weight: 500;
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
const QuartenaryScreen = ({}) => {
  return (
    <Contain>
      <div
        style={{
          display: "flex",
          width: "auto",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <ColumnTwo>
          <ContainRight component="div">
            <ImageTwo component="img" src="./image/imageSection3.png" />
            <TextTitle>customization</TextTitle>
          </ContainRight>
          <Text>
            In addition to the collectible cards and decks, Operation Safe Place
            also offers customization options through the commander mode. As
            commander, you can collect and place various types of walls,
            buildings, and towers to create your own custom layout for the map.
            This custom layout can be saved for later use.
          </Text>
        </ColumnTwo>
      </div>
      <div
        style={{
          display: "flex",
          width: "auto",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <ColumnTwo>
          <ContainRight component="div">
            <ImageTwo component="img" src="./image/imageSection3.png" />
            <TextTitle>Non-Fungible Tokens (NFTs)</TextTitle>
          </ContainRight>
          <Text>
            As you level up your towers in the game, the corresponding cards
            will also level up permanently in your deck. You can then sell these
            leveled-up cards as non-fungible tokens (NFTs) on the Altura NFT
            marketplace. This allows you to acquire desired cards more quickly
            or earn income from your progress in the game.
          </Text>
        </ColumnTwo>
      </div>
      <div
        style={{
          display: "flex",
          width: "auto",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <ColumnTwo>
          <ContainRight component="div">
            <ImageTwo component="img" src="./image/imageSection3.png" />
            <TextTitle>Convenience Features</TextTitle>
          </ContainRight>
          <Text>
            Operation Safe Place offers convenient features for players to
            manage their progress and team. You can pause or save your progress
            and access a lobby window to discuss strategy or exchange cards with
            other players.
            <br />
            <br />
            Operation Safe Place is an exciting blend of tower defense and
            first-person shooter gameplay, with customization options through
            collectible cards and commander mode, long-term replay value through
            continuous waves and increasing difficulty, and the added
            opportunity to trade and acquire desired cards through the NFT
            marketplace.
          </Text>
        </ColumnTwo>
      </div>
    </Contain>
  );
};

export default QuartenaryScreen;
