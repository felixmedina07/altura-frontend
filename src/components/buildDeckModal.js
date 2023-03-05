import styled from "styled-components";
import VanityImage1 from "../assets/vanityImage1.png";
import Box from "@mui/material/Box";
import DeckItem from "./deckItem";
import { useContext, useEffect, useState } from "react";
import { BuildDeckContext } from "../context/buildDeckContext";
import { UserContext } from "../context/mainContext";
import { Cancel, CheckCircle } from "@mui/icons-material";
import ModalDialog from "./modalDialog";
import useDeck from "../request/deck";

const Container = styled.div``;

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
    padding-top:10px;
    padding-bottom: 20px;
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
  const [openModal, setOpenModal] = useState(false);
  const [deleteId, setDeleteId] = useState();
  const deck = useDeck();

  const openDeleteDialog = (id) => {
    setDeleteId(id);
    setOpenModal(true);
  };

  const onSetDeck = async () => {
    const decks = await deck.getAllUserDecks();
    setDecks(decks);
  };

  const onDeleteDeck = async () => {
    setOpenModal(false);
    await deck.deleteUserDeckById(deleteId);
    await onSetDeck();
  };

  useEffect(() => {
    onSetDeck();
  }, []);

  const handleSaveDeck = async () => {
    const result = await deck.saveUserDeck({ cardsId: cardsId, name: name });
    if (result.statusCode === 201) {
      setCardsId([]);
      setName("");
      setStatus(true);
      await onSetDeck();
      return;
    }
    setStatus(false);
  };

  return (
    <Container>
      <ModalDialog
        open={openModal}
        text={"Are you sure you want to delete your deck?"}
        setOpen={setOpenModal}
        rightButtom={onDeleteDeck}
        leftButtom={() => setOpenModal(false)}
      />
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
                key={`${index}-${Math.random()}`}
                refreshItems={onSetDeck}
                item={{
                  title: name,
                  count: cards.length,
                  id: _id,
                  statusDeck: statusDeck,
                }}
                setOpenModal={openDeleteDialog}
              />
            );
          })}
      </Background>
    </Container>
  );
};

export default BuildDeckModal;
