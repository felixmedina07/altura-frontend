import Box from "@mui/material/Box";
import styled from "styled-components";

const Container = styled(Box)({
  backgroundColor: "#000",
  margin: "2px",
  padding: "7px",
  display: "grid",
  alignItems: "center",
});

const Background = styled(Box)({
  background: `linear-gradient(to bottom,
    rgba(169, 157, 255, 0.4) 0%,
        rgba(159, 74, 255, 0) 50%,
        rgba(169, 157, 255, 0.4) 100%)`,
  padding: "2px",
  margin: "2px",
});

const Name = styled("p")({
  color: "#fff",
  fontFamily: "Montserrat-Bold",
  opacity: 0.4,
  margin: 0,
  fontSize: 12,
});

const Number = styled("p")({
  color: "#fff",
  fontFamily: "Montserrat-Regular",
  margin: 0,
  fontSize: 12,
});

const ItemContainer = styled(Box)(
  () => `
    display: grid;
    place-items: "center";
    width: 100%;
    transition: 1s;
    background-image: linear-gradient(to bottom,
          rgba(159, 255, 255, 0.5) 0%,
          rgba(255, 255, 255, 0.3) 50%,
          rgba(160, 255, 255, 0.5) 100%);
    &:hover{
        width:102%
    }
    cursor: pointer;
`
);

const ImageItem = styled("img")(
  () => `
        width: 100%;
    `
);

const Card = ({ item }) => {
  const { name, number, image } = item;
  return (
    <ItemContainer>
      <Container>
        <Background>
          <Name>{name}</Name>
          <Number>{number}</Number>
          <ImageItem
            alt={name}
            loading="lazy"
            src={`${image}?w=100&h=100&fit=crop&auto=format`}
            srcSet={`${image}?w=20&h=20&fit=crop&auto=format&dpr=2 2x`}
          />
        </Background>
      </Container>
    </ItemContainer>
  );
};

export default Card;
