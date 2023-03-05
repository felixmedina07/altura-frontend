import styled from "styled-components";
import Deck from "../assets/deckIcons.svg";
import Remove from "../assets/Remove.svg";
import useDeck from "../request/deck";

const Container = styled.div(
  ({ statusDeck }) => `
    background: linear-gradient(90deg, rgba(169, 157, 255, 0.4), rgba(0,0,0,0) ,rgba(169, 157, 255, 0.4));
    width:90%;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0 10px 0;
    margin-top: 10px;
    border: ${statusDeck ? "1px solid #fff" : "none"};
    box-shadow: ${
      statusDeck
        ? "0 0 0.1vw 0.1vw #fff, 0 0 0.1vw 0.1vw #fff, 0 0 1vw 0.1vw #fff"
        : "none"
    };

`
);

const Name = styled.p(
  () => `
    font-family: "Genesis";
    color: #fff;
    font-size: 12px;
    margin:0;
`
);

const Info = styled.p`
  font-family: "Genesis";
  color: #fff;
  font-size: 10px;
`;

const Ico = styled.img(
  () => `
    width: 10px;
  `
);

const RemoveIco = styled(Ico)`
  position: absolute;
  margin-top: 40px;
  align-self: flex-end;
  margin-right: 10px;
  cursor: pointer;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  margin-bottom: 10px;
`;

const DeckItem = ({
  item = { title: "", count: 0 },
  setOpenModal,
  refreshItems,
}) => {
  const { title, count, id, statusDeck } = item;
  const deck = useDeck();

  const OnActiveDeck = async () => {
    await deck.activeUserDeck(id);
    await refreshItems();
  };

  return (
    <Container statusDeck={statusDeck} onClick={OnActiveDeck}>
      <Name>{title}</Name>
      <InfoContainer>
        <Ico src={Deck} />
        <Info>{`${count}/22`}</Info>
      </InfoContainer>
      <RemoveIco src={Remove} onClick={() => setOpenModal(id)} />
    </Container>
  );
};

export default DeckItem;
