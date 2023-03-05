import React, { useContext, useEffect, useState } from "react";
import { Layout } from "../components/Layout";
import styled from "styled-components";
import { Box } from "@mui/material";
import { UserContext } from "../context/mainContext";
import useScore from "../request/score";

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
  justify-content: space-between;
`
);

const BackgroundContentGradient = styled("div")(
  ({ hover }) => `
  width: 80%;
  margin-left: 30px;
  @media (max-width: 1024px) {
    width: 100%;
    justify-content: flex-start;
    display: flex;
    background: ${
      hover
        ? "linear-gradient(270deg, rgba(26, 255, 222, 0.5) 0%, rgba(26, 255, 222, 0) 50.01%, rgba(26, 255, 222, 0.5) 100.01%)"
        : "transparent"
    };
  }
  @media (min-width: 1440px) {
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
  width: 15%;
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
  const [scores, setScore] = useState([]);
  const score = useScore();

  useEffect(() => {
    const fetchScore = async () => {
      const scores = await score.getAllScore();
      setScore(scores);
    };
    fetchScore();
    const myInterval = setInterval(fetchScore, 10000);

    return () => {
      clearInterval(myInterval);
    };
  }, []);

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
              <TitleText>Name</TitleText>
              <TitleText>Lvl</TitleText>
              <TitleText>Score</TitleText>
              <TitleText>Rank</TitleText>
            </div>
            <div style={{ position: "relative" }}>
              {scores.map((item, index) => (
                <BackgroundContentGradient
                  hover={index + 1 === 10 ? true : false}
                >
                  <RowContentTextBoard hover={index + 1 === 10 ? true : false}>
                    <TitleText>
                      {item.user.username.length > 7
                        ? `${item.user.username.match(/.{1,7}/g)[0]}...`
                        : `${item.user.username}`}
                    </TitleText>
                    <TitleText>{item.maxLevel}</TitleText>
                    <TitleText>{item.totalKills}</TitleText>
                    <TitleText>{index + 1}</TitleText>
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
