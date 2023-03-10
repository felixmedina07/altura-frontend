import React, { useState, useMemo, useEffect, useContext } from "react";
import Box from "@mui/material/Box";
import styled from "styled-components";
import { Layout } from "../components/Layout";
import Card from "../components/card";
import VanityImage1 from "../assets/vanityImage1.png";
import TowArrow from "../assets/arrowDoble.svg";
import Arrow from "../assets/arrowFilter.svg";
import FilterByType from "../components/filterByType";
import FilterByPrice from "../components/filterByPrice";
import Loader from "../components/loader";
import Cart from "../components/cart";
import { UserContext } from "../context/mainContext";
import useCard from "../request/card";

const Contain = styled(Box)({
  width: "100%",
  zIndex: -1,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
});

const CenterContainer = styled.div(
  () => `
  margin: 0px 1rem 0px 1rem
`
);

const ContainerList = styled(Box)({
  display: "grid",
  gap: 20,
  gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))!important",
  marginBottom: "100px",
});

const TextTitle = styled("p")`
  color: #ffffff;
  font-family: "Genesis";
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  margin: 0px 10px 0px 10px;
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
  const { isLogged, token } = useContext(UserContext);
  const [filters, setFilters] = useState([]);
  const [visibleFilter, setVisibleFilter] = useState(false);
  const [visibleFilterByPrice, setVisibleFilterByPrice] = useState(false);
  const [allCards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState([]);
  const card = useCard();

  const getAllCards = async () => {
    setLoading(true);

    const marketPlaceCards = await card.onGetAllCards();

    if (!isLogged) {
      setCards(marketPlaceCards?.card);
      setLoading(false);
      return;
    }

    const userCards = await card.onGetUserCards();

    if (!userCards?.result) {
      setLoading(false);
      setCards(userCards.card);
      return;
    }

    const cardsFiltered = marketPlaceCards.card.map((itemMarketplace) => {
      const isCard = userCards.result.cards.some((itemUser) => {
        return itemMarketplace.card === itemUser.card;
      });
      if (isCard) {
        return { ...itemMarketplace, userHas: true };
      }
      return { ...itemMarketplace, userHas: false };
    });

    setCards(cardsFiltered || []);
    setLoading(false);
  };

  useEffect(() => {
    getAllCards();
  }, [token, isLogged]);

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

    const deleteDuplicate = new Set(data) || [];

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
              {cardsFiltered?.map((item, index) => (
                <Card
                  key={`${index}-${item.name}-${item.subName}-${Math.random()}`}
                  item={{ ...item, index }}
                  setCart={setCart}
                  cart={cart}
                  isMarketplace={true}
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
        <Cart
          cart={cart}
          setCart={setCart}
          setLoading={setLoading}
          getAllCards={getAllCards}
        />
      </Contain>
    </Layout>
  );
};

export default Marketplace;
