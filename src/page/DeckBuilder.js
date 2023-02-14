import React, { useState, useMemo } from "react";
import Box from "@mui/material/Box";
import styled from "styled-components";
import { Layout } from "../components/Layout";
import { dummyCards } from "../dommyData/Marketplace";
import Card from "../components/card";
import VanityImage1 from "../assets/vanityImage1.png";
import TowArrow from "../assets/arrowDoble.svg";
import Arrow from "../assets/arrowFilter.svg";
import Deck from "../assets/deckIcons.svg";
import Filter from "../components/filter";
import FilterByPrice from "../components/filterByPrice";

const Contain = styled(Box)({
  backgroundImage: `url(${"./image/Rectangle.png"})`,
  width: "100%",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  zIndex: -1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const ContainerList = styled(Box)({
  maxWidth: "1200px",
  width: "100%",
  display: "grid",
  gap: 20,
  gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))!important",
});

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
  width: 200px;
  height: 48px;
  position: relative;
  bottom: 5px;
  @media (max-width: 1000px) {
    width: 150px;
  }
  @media (max-width: 500px) {
    width: 100px;
  }
`;

const FilterContainer = styled(Box)(
  () => `
    display: flex;
    justify-content: space-evenly;
    width: 80%;
    @media (max-width: 1000px) {
      width: 90%;
    }
  `
);

const Ico = styled.img(
  () => `
  width: 20px;
  @media (max-width: 1000px) {
    width: 15px;
  }
  @media (max-width: 500px) {
    width: 10px;
  }
`
);

const Buttom = styled(Box)(
  () => `
  display: flex;
  cursor: pointer;
  &:active{
    opacity: 0.1
  }
`
);

const ButtomContainer = styled(Box)(
  () => `
  display: flex;
  flex-direction: column;
  padding-top: 90px;
  align-items: center;
`
);

const DeckBuilder = () => {
  const [filters, setFilters] = useState([]);
  const [visibleFilter, setVisibleFilter] = useState(false);
  const [visibleFilterByPrice, setVisibleFilterByPrice] = useState(false);

  return (
    <Layout notFooter={true}>
      <Filter visible={visibleFilter} setFilter={setFilters} />
      <FilterByPrice
        setFilter={setFilters}
        visible={visibleFilterByPrice}
        setVisible={setVisibleFilterByPrice}
      />
      <Contain>
        <FilterContainer>
          <ButtomContainer style={{ width: '75%', marginLeft: '4rem' }}>
            <TextTitle>Deck Builder</TextTitle>
            <VanityImageBarNeon component="img" src={VanityImage1} />
          </ButtomContainer>
          <ButtomContainer style={{ width: '25%' }}>
            <Buttom onClick={() => setVisibleFilter((state) => !state)}>
              <Ico src={Deck} style={{marginRight: '0.5rem'}} />
              <TextTitle>My Decks</TextTitle>
            </Buttom>
            <VanityImageBarNeon component="img" src={VanityImage1} />
          </ButtomContainer>
        </FilterContainer>
        <ContainerList>
          {dummyCards.map((item, index) => (
            <Card key={`${index}-${item.name}-${Math.random()}`} item={item} />
          ))}
        </ContainerList>
      </Contain>
    </Layout>
  );
};

export default DeckBuilder;
