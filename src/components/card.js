import Box from "@mui/material/Box";
import styled from "styled-components";

const Container = styled(Box)({
  backgroundColor: "transparent",
  margin: "2px",
  padding: "7px",
  display: "grid",
  alignItems: "center",
});

const Background = styled(Box)({
  border: '3px solid #1affde',
  background: 'rgba(0, 0, 0, 0.4)',  
  boxShadow: '0 0 0.1vw 0.1vw #1affde, 0 0 0.1vw 0.1vw #1affde, 0 0 1vw 0.1vw #1affde',  
  padding: "3px",
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
    border: 1px solid #fff;
    box-shadow: 0 0 0.1vw 0.1vw #fff, 0 0 0.1vw 0.1vw #fff, 0 0 1vw 0.1vw #fff;
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
