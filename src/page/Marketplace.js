import React, { useState, useMemo, useEffect } from "react";
import Box from "@mui/material/Box";
import styled from "styled-components";
import { Layout } from "../components/Layout";
import Card from "../components/card";
import VanityImage1 from "../assets/vanityImage1.png";
import TowArrow from "../assets/arrowDoble.svg";
import Arrow from "../assets/arrowFilter.svg";
import FilterByType from "../components/filterByType";
import FilterByPrice from "../components/filterByPrice";
import { OPERATION_SAVE_PLACE_API } from "../config/config";
import Loader from "../components/loader";

const Contain = styled(Box)({
  width: "100%",
  height: "100%",
  zIndex: -1,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
});

const CenterContainer = styled.div(
  () => `

`
);

const ContainerList = styled(Box)({
  maxWidth: "1000px",
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
    justify-content: space-between;
    width: 100%;
    @media (max-width: 1000px) {
      width: 100%;
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
  align-items: center;
`
);

const LouderContainer = styled(Box)(
  () => `
    margin-top: 10rem;
    margin-left: 20rem;
  `
);

const Marketplace = () => {
  const [filters, setFilters] = useState([]);
  const [visibleFilter, setVisibleFilter] = useState(false);
  const [visibleFilterByPrice, setVisibleFilterByPrice] = useState(false);
  const [allCards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAllCards = async () => {
    setLoading(true);
    const result = await fetch(`${OPERATION_SAVE_PLACE_API}/card/all`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const allCards = await result.json();
    setCards(allCards.card);
    setLoading(false);
  };

  useEffect(() => {
    getAllCards();
  }, []);

  const cardsFiltered = useMemo(() => {
    if (filters.length < 1) {
      return allCards;
    }

    const cards = allCards.filter((item) => {
      return filters.some((itemFilter) => {
        if (itemFilter.type !== "card") return;
        return itemFilter.text.toUpperCase() === item.subName.toUpperCase();
      });
    });

    const collection = allCards.filter((item) => {
      return filters.some((itemFilter) => {
        if (itemFilter.type !== "collection") return;
        return itemFilter.text.toUpperCase() === item.name.toUpperCase();
      });
    });

    const especialCards = allCards.filter((item) => {
      return filters.some((itemFilter) => {
        if (itemFilter.type !== "especial") return;
        return itemFilter.text.toUpperCase() === item.special.toUpperCase();
      });
    });

    const data = [...cards, ...collection, ...especialCards];

    const deleteDuplicate = new Set(data);

    return [...deleteDuplicate];
  }, [filters, allCards]);

  return (
    <Layout notFooter={true}>
      <Contain>
        <FilterByType visible={visibleFilter} setFilter={setFilters} />
        <CenterContainer>
          <FilterContainer>
            <ButtomContainer>
              <Buttom onClick={() => setVisibleFilter((state) => !state)}>
                <TextTitle>All Filters</TextTitle>
                <Ico src={TowArrow} />
              </Buttom>
              <VanityImageBarNeon component="img" src={VanityImage1} />
            </ButtomContainer>
            <ButtomContainer>
              <TextTitle>Marketplace</TextTitle>
              <VanityImageBarNeon component="img" src={VanityImage1} />
            </ButtomContainer>
            <ButtomContainer>
              <Buttom
                onClick={() => setVisibleFilterByPrice((state) => !state)}
              >
                <Ico src={Arrow} />
                <TextTitle>Lowest Price</TextTitle>
              </Buttom>
              <VanityImageBarNeon component="img" src={VanityImage1} />
            </ButtomContainer>
          </FilterContainer>
          {loading && (
            <LouderContainer>
              <Loader isVisible={loading} />
            </LouderContainer>
          )}
          {!loading && (
            <ContainerList>
              {cardsFiltered.map((item, index) => (
                <Card
                  key={`${index}-${item.name}-${Math.random()}`}
                  item={{ ...item, index }}
                />
              ))}
            </ContainerList>
          )}
        </CenterContainer>
        <FilterByPrice
          setFilter={setFilters}
          visible={visibleFilterByPrice}
          setVisible={setVisibleFilterByPrice}
        />
      </Contain>
    </Layout>
  );
};

export default Marketplace;
