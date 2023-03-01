import styled from "styled-components";
import Deck from "../assets/deckIcons.svg";
import Remove from "../assets/Remove.svg";
import { OPERATION_SAVE_PLACE_API } from "../config/config";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";

const Container = styled.div(
  () => `
    background: linear-gradient(90deg, rgba(169, 157, 255, 0.4), rgba(0,0,0,0) ,rgba(169, 157, 255, 0.4));
    width:90%;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0 10px 0;
    margin-top: 10px;
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

const ContainerToggle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  position: absolute;
  margin-top: 40px;
  align-self: flex-start;
  margin-left: 10px;
  cursor: pointer;
`;

const DeckItem = ({ item = { title: "", count: 0 }, refreshDecks, token }) => {
  const { title, count, id, statusDeck } = item;
  const deleteDeck = async () => {
    const result = await fetch(`${OPERATION_SAVE_PLACE_API}/deck/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    await result.json();
    await refreshDecks();
  };

  const activeDeck = async () => {
    const result = await fetch(
      `${OPERATION_SAVE_PLACE_API}/deck/${id}/active`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    await result.json();
    await refreshDecks();
  };

  return (
    <Container>
      <Name>{title}</Name>
      <InfoContainer>
        <Ico src={Deck} />
        <Info>{`${count}/22`}</Info>
      </InfoContainer>
      <ContainerToggle>
        <Info>ON</Info>
        {!statusDeck && (
          <ToggleOnIcon
            onClick={activeDeck}
            sx={{
              color: "#1AFFDE",
            }}
          />
        )}
        {statusDeck && (
          <ToggleOffIcon
            onClick={activeDeck}
            sx={{
              color: "#1AFFDE",
            }}
          />
        )}
        <Info>OFF</Info>
      </ContainerToggle>
      <RemoveIco src={Remove} onClick={deleteDeck} />
    </Container>
  );
};

export default DeckItem;
