import { AddCircle } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled(Box)({
  backgroundColor: "transparent",
  margin: "2px",
  padding: "7px",
  display: "grid",
  alignItems: "center",
});

const Background = styled(Box)({
  border: "3px solid #1affde",
  background: "rgba(0, 0, 0, 0.4)",
  boxShadow:
    "0 0 0.1vw 0.1vw #1affde, 0 0 0.1vw 0.1vw #1affde, 0 0 1vw 0.1vw #1affde",
  padding: "3px",
  margin: "2px",
});

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
  () => `
    display: grid;
    place-items: "center";
    width: 100%;
    transition: 1s;
    border: 1px solid #fff;
    box-shadow: 0 0 0.1vw 0.1vw #fff, 0 0 0.1vw 0.1vw #fff, 0 0 1vw 0.1vw #fff;
    color: #fff;
    &:hover{
        width:102%
    }
`
);

const ImageItem = styled("img")(
  () => `
        width: 100%;
    `
);

const Card = ({ item, setCart, cart, isMarketplace = false }) => {
  const [hover, setHover] = useState(false);
  const [hoverAddBottom, setHoverAddBottom] = useState(false);
  const { name, index, card, userHas } = item;

  const addItemToCart = () => {
    if (cart.some((cartItem) => cartItem.card === item.card)) {
      return;
    }
    setCart((items) => [...items, item]);
  };

  return (
    <ItemContainer
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
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
          />
          {isMarketplace && !userHas && (
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
