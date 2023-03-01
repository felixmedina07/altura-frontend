import React, { useContext } from "react";
import { Layout } from "../components/Layout";
import styled from "styled-components";
import { Box } from "@mui/material";
import { UserContext } from "../context/mainContext";
const Contain = styled(Box)({
  width: "100%",
  height: "100%",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
});
const Row = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (min-width: 1440px) {
    justify-content: space-evenly;
  }

  @media (max-width: 1024px) {
    justify-content: space-between;
  }
`;

const ColumnOne = styled("div")`
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;

  @media (min-width: 1440px) {
    background-image: url(${"./image/Board2.png"});
    width: 350px;
    height: 580px;
  }
  @media (max-width: 1024px) {
    background-image: url(${"./image/Board.png"});
    margin-left: 10px;
    width: 250px;
    height: 410px;
  }
`;

const ColumnTwo = styled("div")`
  background-image: url(${"./image/MenuGame.png"});
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: 1024px) {
    width: 735px;
    margin-right: 15px;
  }
  @media (min-width: 1440px) {
    width: 735px;
    margin-right: 15px;
  }
`;

const TextMenuOptions = styled("p")`
  color: #ffffff;
  font-family: "Genesis";
  font-size: 15px;
  font-weight: 500;
  text-align: center;
`;

const ContText = styled("div")`
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;
  @media (max-width: 1024px) {
    width: 138px;
    &:hover {
      background-image: url(${"./image/SELECTION.png"});
      background-repeat: no-repeat;
    }
  }
  @media (min-width: 1440px) {
    width: 138px;
    &:hover {
      background-image: url(${"./image/SELECTION.png"});
      background-repeat: no-repeat;
    }
  }
`;

const RowContentTextBoard = styled("div")(
  ({ hover }) => `
  display:flex;
  flex-direction:row;
  justify-content: ${hover ? "space-between" : "space-evenly"}; ;
`
);
const BackgroundContentGradient = styled("div")(
  ({ hover }) => `
  @media (max-width: 1024px) {
    padding-right: ${hover ? "5px" : "0"};
    padding-left: ${hover ? "5px" : "0"};
    margin-left: ${hover ? "23px" : "0"};
    margin-right: ${hover ? "23px" : "0"};
    background: ${
      hover
        ? "linear-gradient(270deg, rgba(26, 255, 222, 0.5) 0%, rgba(26, 255, 222, 0) 50.01%, rgba(26, 255, 222, 0.5) 100.01%)"
        : "transparent"
    };
  }

  @media (min-width: 1440px) {
    padding-right: ${hover ? "10px" : "0"};
    padding-left: ${hover ? "10px" : "0"};
    margin-left: ${hover ? "30px" : "0"};
    margin-right: ${hover ? "30px" : "0"};
    background: ${
      hover
        ? "linear-gradient(270deg, rgba(26, 255, 222, 0.5) 0%, rgba(26, 255, 222, 0) 50.01%, rgba(26, 255, 222, 0.5) 100.01%)"
        : "transparent"
    };
  }
`
);

const GameContainer = styled.div(
  () => `
  width:960px;
  height:540px;
  
`
);

const RowContentTitleTextBoard = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media (max-width: 1024px) {
    padding-top: 1.5rem;
  }
  @media (min-width: 1440px) {
    padding-top: 2.5rem;
  }
`;

const Text = styled("p")`
  color: #ffffff;
  font-family: "Genesis";
  font-weight: 400;
  @media (max-width: 1024px) {
    font-size: 14px;
  }
  @media (min-width: 1440px) {
    font-size: 19px;
  }
`;
const TitleText = styled("p")`
  color: #ffffff;
  font-family: "Genesis";
  font-weight: 400;
  @media (max-width: 1024px) {
    margin-top: 1.5px;
    margin-bottom: 1.5px;
    font-size: 9px;
  }
  @media (min-width: 1440px) {
    margin-top: 1.5px;
    margin-bottom: 1.5px;
    font-size: 14px;
  }
`;
const RowText = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
const LaunchForces = ({}) => {
  const { token } = useContext(UserContext);
  const textBoard = [
    { username: "player 1", lvl: "598", score: "10844", rank: "1" },
    { username: "player 2", lvl: "564", score: "10655", rank: "2" },
    { username: "player 3", lvl: "563", score: "10100", rank: "3" },
    { username: "player 4", lvl: "555", score: "9874", rank: "4" },
    { username: "player 5", lvl: "542", score: "9545", rank: "5" },
    { username: "player 6", lvl: "512", score: "9432", rank: "6" },
    { username: "player 7", lvl: "502", score: "9412", rank: "7" },
    { username: "player 8", lvl: "489", score: "9321", rank: "8" },
    { username: "player 9", lvl: "482", score: "9142", rank: "9" },
    { username: "player 10", lvl: "105", score: "4545", rank: "50" },
    { username: "player 11", lvl: "104", score: "4230", rank: "51" },
    { username: "player 12", lvl: "103", score: "4210", rank: "52" },
    { username: "player 13", lvl: "101", score: "4000", rank: "53" },
    { username: "player 14", lvl: "88", score: "4000", rank: "54" },
    { username: "player 15", lvl: "85", score: "4000", rank: "55" },
    { username: "player 16", lvl: "84", score: "4000", rank: "56" },
    { username: "player 17", lvl: "83", score: "4000", rank: "57" },
    { username: "player 18", lvl: "82", score: "4000", rank: "58" },
    { username: "player 19", lvl: "78", score: "4000", rank: "59" },
    { username: "player 20", lvl: "76", score: "4000", rank: "60" },
  ];
  return (
    <Layout notFooter={true}>
      <Contain component="div">
        <Row>
          <ColumnOne>
            <RowContentTitleTextBoard>
              <Text>Top Players</Text>
            </RowContentTitleTextBoard>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
            >
              <TitleText>Username</TitleText>
              <TitleText>Lvl</TitleText>
              <TitleText>Score</TitleText>
              <TitleText>Rank</TitleText>
            </div>
            <div style={{ position: "relative" }}>
              {textBoard?.map((item, index) => (
                <BackgroundContentGradient
                  hover={index + 1 === 10 ? true : false}
                >
                  <RowContentTextBoard hover={index + 1 === 10 ? true : false}>
                    <TitleText style={{ textAlign: "left" }}>
                      {item.username}
                    </TitleText>
                    <TitleText style={{ textAlign: "right" }}>
                      {item.lvl}
                    </TitleText>
                    <TitleText style={{ textAlign: "right" }}>
                      {item.score}
                    </TitleText>
                    <TitleText style={{ textAlign: "right" }}>
                      {item.rank}
                    </TitleText>
                  </RowContentTextBoard>
                </BackgroundContentGradient>
              ))}
            </div>
          </ColumnOne>
          <ColumnTwo>
            <RowText>
              <ContText>
                <TextMenuOptions>Launch Forces</TextMenuOptions>
              </ContText>
              <ContText>
                <TextMenuOptions>Deck Builder</TextMenuOptions>
              </ContText>
              <ContText>
                <TextMenuOptions>Select Deck</TextMenuOptions>
              </ContText>
            </RowText>
            <GameContainer
              dangerouslySetInnerHTML={{
                __html: `<iframe class="iframe" src="/game?token=${token}" />`,
              }}
            />
          </ColumnTwo>
        </Row>
      </Contain>
    </Layout>
  );
};

export default LaunchForces;
