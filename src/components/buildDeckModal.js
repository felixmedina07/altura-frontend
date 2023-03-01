import styled from "styled-components";
import VanityImage1 from "../assets/vanityImage1.png";
import Box from "@mui/material/Box";
import DeckItem from "./deckItem";
import { BuildDeck } from "../dommyData/BuildDeck";
import { useContext, useEffect, useState } from "react";
import { BuildDeckContext } from "../context/buildDeckContext";
import { OPERATION_SAVE_PLACE_API } from "../config/config";
import { UserContext } from "../context/mainContext";
import { Cancel, CheckCircle } from "@mui/icons-material";

const Background = styled("div")(
  ({ visible }) => `
    display: flex;
    background-color: rgba(0, 0, 0, 0.9);
    width: 13vw;
    z-index:500;
    flex-direction: column;
    align-items:center;
    transition: opacity .4s;
    opacity: ${visible ? 1 : 0};
    padding-top:10px
  `
);

const ButtomContainer = styled(Box)(
  () => `
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  margin-top: 20px;
`
);
const TextTitle = styled("p")`
  color: #ffffff;
  font-family: "Genesis";
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  margin: 0;
  @media (max-width: 1000px) {
    font-size: 14px;
  }
  @media (max-width: 500px) {
    font-size: 10px;
  }
`;
const VanityImageBarNeon = styled(Box)`
  position: relative;
  bottom: 5px;
  background-color: #000;
`;

const BuildDeckModal = ({ visible, setOpenCreateDeck }) => {
  const { token } = useContext(UserContext);
  const { name, cardsId, setCardsId, setName } = useContext(BuildDeckContext);
  const [status, setStatus] = useState(undefined);
  const [decks, setDecks] = useState([]);

  const getDecks = async () => {
    const result = await fetch(`${OPERATION_SAVE_PLACE_API}/deck/my-deck`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const decks = await result.json();
    console.log(decks);
    setDecks(decks.deck);
  };

  useEffect(() => {
    getDecks();
  }, []);

  const handleSaveDeck = async () => {
    const result = await fetch(`${OPERATION_SAVE_PLACE_API}/deck/`, {
      method: "POST",
      body: JSON.stringify({
        name: name,
        cards: cardsId,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const statusResult = await result.json();
    if (statusResult.statusCode === 201) {
      setCardsId([]);
      setName("");
      setStatus(true);
      await getDecks();
      return;
    }
    setStatus(false);
  };

  return (
    <Background visible={visible}>
      {status === true && <CheckCircle color="success" />}
      {status === false && <Cancel color="error" />}
      {name.length > 0 && (
        <>
          <ButtomContainer onClick={handleSaveDeck}>
            <TextTitle>Save Deck</TextTitle>
            <VanityImageBarNeon component="img" src={VanityImage1} />
          </ButtomContainer>
          <DeckItem item={{ title: name, count: cardsId.length }} />
        </>
      )}
      {name.length === 0 && (
        <ButtomContainer onClick={() => setOpenCreateDeck(true)}>
          <TextTitle>New Deck</TextTitle>
          <VanityImageBarNeon component="img" src={VanityImage1} />
        </ButtomContainer>
      )}
      {name.length === 0 &&
        decks.map(({ name, cards, _id, statusDeck }, index) => {
          return (
            <DeckItem
              token={token}
              refreshDecks={getDecks}
              key={`${index}-${Math.random()}`}
              item={{
                title: name,
                count: cards.length,
                id: _id,
                statusDeck: statusDeck,
              }}
            />
          );
        })}
    </Background>
  );
};

export default BuildDeckModal;
