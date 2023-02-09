import { useState } from "react";
import styled from "styled-components";
import InputBackground from "../assets/inputBackground.svg";

const KillsInput = styled("input")(
  () => `
    width: 60px;
    background-image: url("${InputBackground}");
    background-size: "cover";
    background-repeat:no-repeat; 
    padding: 3px 10px; 
    line-height: 0px;
    color: #fff;
    background-color:rgba(0,0,0,0);
    border: none;
    
  &:focus {
      border: none;
      color:#fff;
      outline: none;
  }
  &:active {
      border: none;
  }
    margin-bottom: 20px;
    margin-left: 10px;
  `
);
const FilterByNumber = () => {
  const [number, setNumber] = useState(0);
  const changeNumber = ({ target }) => {
    const { value } = target;
    if (parseInt(value) > 99999) {
      return;
    }
    if (parseInt(value)) {
      setNumber(parseInt(value));
      return;
    }
    if (value == "") {
      setNumber(0);
    }
  };
  return <KillsInput value={number} onChange={changeNumber} />;
};

export default FilterByNumber;
