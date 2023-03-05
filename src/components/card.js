import { AddCircle } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import { useContext, useState } from "react";
import styled from "styled-components";
import { BuildDeckContext } from "../context/buildDeckContext";
import { UserContext } from "../context/mainContext";

const MAXCARDS = 21;

const Container = styled(Box)({
  backgroundColor: "transparent",
  margin: "2px",
  padding: "7px",
  display: "grid",
  alignItems: "center",
});

const Background = styled(Box)(
  () => `
  border: 3px solid #1affde
  background: rgba(0, 0, 0, 0.4);
  box-shadow:0 0 0.1vw 0.1vw #1affde, 0 0 0.1vw 0.1vw #1affde, 0 0 1vw 0.1vw #1affde;
  padding: 3px;
  margin: 2px;
`
);

const Name = styled("p")(
  ({ hover }) => `
  font-family: Montserrat-Bold;
  margin: 0;
  font-size: 12px;
  opacity:${hover ? 1 : 0.5};
  &:hover{
    opacity:1
  }
`
);

const Number = styled("p")({
  color: "#fff",
  fontFamily: "Montserrat-Regular",
  margin: 0,
  fontSize: 15,
  fontWeight: 1000,
});

const ItemContainer = styled(Box)(
  ({ decknamesize }) => `
    display: grid;
    place-items: "center";
    width: 100%;
    transition: 1s;
    border: ${decknamesize ? "1px solid #fff" : "none"};
    box-shadow: ${
      decknamesize
        ? "0 0 0.1vw 0.1vw #fff, 0 0 0.1vw 0.1vw #fff, 0 0 1vw 0.1vw #fff"
        : "none"
    };
    color: #fff;
    &:hover{
        width:102%
    };
    backdrop-filter: blur(10px);
`
);

const ImageItem = styled("img")(
  ({ decknamesize }) => `
        width: 100%;
        filter: ${decknamesize ? "" : "blur(10px)"};
    `
);

const Card = ({ item, setCart, cart, isMarketplace = false }) => {
  const { token } = useContext(UserContext);
  const { name: deckName, setCardsId, cardsId } = useContext(BuildDeckContext);
  const [hover, setHover] = useState(false);
  const [hoverAddBottom, setHoverAddBottom] = useState(false);
  const { name, index, card, userHas, _id } = item;
  const [isSelected, setSelected] = useState(false);

  const addItemToCart = () => {
    if (cart.some((cartItem) => cartItem.card === item.card)) {
      return;
    }
    setCart((items) => [...items, item]);
  };

  const handleCheck = (state) => {
    if (!state) {
      setCardsId((ids) => ids.filter((id) => id !== _id));
      return true;
    }
    if (cardsId.length > MAXCARDS) return false;
    setCardsId((ids) => [...ids, _id]);
    return true;
  };

  return (
    <ItemContainer
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => {
        if (deckName.length === 0) return;
        const result = handleCheck(!isSelected);
        if (!result) return;
        setSelected(!isSelected);
      }}
      decknamesize={`${isSelected || deckName.length === 0}`}
    >
      <Container>
        <Background>
          <Name hover={hover}>{name}</Name>
          <Number>{`#${index}`}</Number>
          <ImageItem
            alt={name}
            loading="lazy"
            src={`${card}`}
            srcSet={`${card}`}
            decknamesize={`${!isSelected || deckName.length === 0}`}
          />
          {isMarketplace && !userHas && token && (
            <IconButton sx={{ color: "#fff" }} onClick={addItemToCart}>
              <AddCircle
                onMouseEnter={() => setHoverAddBottom(true)}
                onMouseLeave={() => setHoverAddBottom(false)}
              />
              <Name hover={hoverAddBottom}>Add to cart</Name>
            </IconButton>
          )}
        </Background>
      </Container>
    </ItemContainer>
  );
};

export default Card;
