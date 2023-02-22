import React, { useState, useMemo, useEffect, useContext } from "react";
import Box from "@mui/material/Box";
import styled from "styled-components";
import { Layout } from "../components/Layout";
import { dummyCards } from "../dommyData/Marketplace";
import Card from "../components/card";
import VanityImage1 from "../assets/vanityImage1.png";
import TowArrow from "../assets/arrowDoble.svg";
import Arrow from "../assets/arrowFilter.svg";
import Deck from "../assets/deckIcons.svg";
import DeckList from "../components/DeckList";
import FilterByPrice from "../components/filterByPrice";
import { OPERATION_SAVE_PLACE_API } from "../config/config";
import Loader from "../components/loader";
import { UserContext } from "../context/mainContext";
import { useNavigate } from "react-router-dom";

const Contain = styled(Box)({
  width: "100%",
  zIndex: -1,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
});

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
    justify-content: space-evenly;
    width: 100%;
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
  align-items: center;
`
);

const LouderContainer = styled(Box)(
  () => `
    margin-top: 10rem;
    margin-left: 20rem;
  `
);

const CenterContainer = styled.div(
  () => `

`
);

const DeckBuilder = () => {
  const { token } = useContext(UserContext);
  const navigate = useNavigate();
  const [filters, setFilters] = useState([]);
  const [visibleFilter, setVisibleFilter] = useState(false);
  const [visibleFilterByPrice, setVisibleFilterByPrice] = useState(false);
  const [allCards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAllCards = async () => {
    setLoading(true);
    const result = await fetch(
      `${OPERATION_SAVE_PLACE_API}/card-users/my-cards`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const allCards = await result.json();
    if (allCards.statusCode === 401) {
      navigate("/");
    }
    setCards(allCards.result.cards);
    setLoading(false);
  };

  useEffect(() => {
    getAllCards();
  }, []);

  return (
    <Layout notFooter={true}>
      <Contain>
        <CenterContainer>
          <FilterContainer>
            <ButtomContainer style={{ width: "80%", marginLeft: "13rem" }}>
              <TextTitle>Deck Builder</TextTitle>
              <VanityImageBarNeon component="img" src={VanityImage1} />
            </ButtomContainer>
            <ButtomContainer>
              <Buttom onClick={() => setVisibleFilter((state) => !state)}>
                <Ico src={Deck} style={{ marginRight: "0.5rem" }} />
                <TextTitle>My Decks</TextTitle>
              </Buttom>
              <VanityImageBarNeon component="img" src={VanityImage1} />
            </ButtomContainer>
          </FilterContainer>
          {loading && (
            <LouderContainer>
              <Loader isVisible={loading} />
            </LouderContainer>
          )}
          <ContainerList>
            {allCards.map((item, index) => (
              <Card
                key={`${index}-${item.name}-${Math.random()}`}
                item={{ ...item, index }}
              />
            ))}
          </ContainerList>
        </CenterContainer>
      </Contain>
    </Layout>
  );
};

export default DeckBuilder;
