import {
  Cancel,
  CheckCircle,
  ExpandLess,
  ExpandMore,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useContext, useRef, useState } from "react";
import styled from "styled-components";
import { OPERATION_SAVE_PLACE_API } from "../config/config";
import { UserContext } from "../context/mainContext";

const Container = styled.div(
  () => `
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 5000;
    bottom: 0px;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    flex-direction: column;
    align-items: center;
`
);

const InfoContainer = styled.div(
  () => `
    display: flex;
    width: 100vw;
    justify-content: center;
    align-items: center;
`
);

const Text = styled.p(
  () => `
    color: #fff;
    font-size: 20px;
`
);

const BuyButton = styled.div(
  () => `
  background-color: #fff;
  margin-left: 30px;
  &:hover{
    background-color: #02c39a;
  }
  &:active{
    background-color: #000;
  }
  cursor: pointer;
  padding: 0px 40px 0px 40px;
  transition: background-color 0.5s ease;
  border-radius: 10px;
`
);

const BuyText = styled.p(
  () => `
    color: #000;
    cursor: pointer;
    font-weight: 800;
`
);

const CardContainer = styled.div(
  ({ open, maxHeight = 0 }) => `
    display: flex;
    flex-wrap: wrap;
    max-width: 80rem;
    overflow: hidden;
    transition: height 0.6s ease-out;
    height:${open ? maxHeight : "0"};
    `
);

const PreviewCardImage = styled.img(
  () => `
    width: 100px;
    margin: 10px
`
);

const PreviewCardContainer = styled.div(() => ``);

const Cart = ({ cart, setCart, setLoading, getAllCards }) => {
  const { token, isLogged } = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(null);
  const refCards = useRef();

  const deleteCard = (cart) => {
    setCart((cards) => {
      return cards.filter((card) => card.card !== cart.card);
    });
  };

  const onBuyItems = async () => {
    setLoading(true);
    const ids = cart.map((item) => item._id);
    const result = await fetch(`${OPERATION_SAVE_PLACE_API}/card-users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        cards: ids,
      }),
    });
    const isSave = await result.json();
    if (isSave.statusCode === 201) {
      setCart([]);
      setSuccess(true);
      getAllCards();
    } else {
      setSuccess(false);
    }
    setLoading(false);
  };

  return (
    isLogged && (
      <Container>
        <InfoContainer>
          {success === true && <CheckCircle color="success" />}
          {success === false && <Cancel color="error" />}
          <IconButton onClick={() => setOpen(!open)}>
            {!open && <ExpandLess sx={{ color: "#fff" }} />}
            {open && <ExpandMore sx={{ color: "#fff" }} />}
          </IconButton>
          <Text>{`Count: ${cart.length}`}</Text>
          <BuyButton
            sx={{
              backgroundColor: "#fff",
              marginLeft: 5,
            }}
            onClick={onBuyItems}
          >
            <BuyText>Buy</BuyText>
          </BuyButton>
        </InfoContainer>
        <CardContainer
          open={open}
          ref={refCards}
          maxHeight={`${refCards?.current?.scrollHeight}px`}
        >
          {cart.map((item, index) => (
            <PreviewCardContainer
              key={`${index}-${Math.random()}-${item.card}`}
            >
              <IconButton
                sx={{ position: "absolute" }}
                onClick={() => {
                  deleteCard(item);
                }}
              >
                <Cancel sx={{ color: "#fff" }} />
              </IconButton>
              <PreviewCardImage src={item.card} />
            </PreviewCardContainer>
          ))}
        </CardContainer>
      </Container>
    )
  );
};

export default Cart;
