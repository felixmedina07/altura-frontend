import { useState } from "react";
import styled from "styled-components";
import checkImg from "../assets/checkFilter.svg";
import uncheckImg from "../assets/uncheckFilter.svg";

const Container = styled.div(
  () => `
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 20px;
    cursor: pointer
`
);

const Text = styled.div(
  () => `
    color: #fff;
    font-family: Genesis;
    font-size: 10px;
`
);

const Img = styled.img(
  () => `
    width: 20px;
    height: 20px;
`
);

const FilterCheckBox = ({ text, setFilter, type }) => {
  const [check, setCheck] = useState(false);
  const setFilterText = () => {
    setFilter({ text, type });
    setCheck((state) => !state);
  };
  return (
    <Container onClick={setFilterText}>
      <Img src={check ? checkImg : uncheckImg} />
      <Text>{text}</Text>
    </Container>
  );
};

export default FilterCheckBox;
