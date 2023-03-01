import { useState } from "react";
import styled from "styled-components";
import Checked from "../assets/checked.svg";

const CheckedContainer = styled.img`
  width: 30px;
`;

const Container = styled.div`
  border-radius: 40px;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  border: 0.2rem solid #fff;
  box-shadow: 0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 2rem #bc13fe,
    0 0 0.8rem #bc13fe, 0 0 2.8rem #bc13fe, inset 0 0 1.3rem #bc13fe;
`;

const CheckBox = ({ isSelected, maxSelect, currentCount }) => {
  const [checked, setChecked] = useState(false);
  const handlePress = () => {
    if (maxSelect < currentCount && !checked) {
      return;
    }
    isSelected(!checked);
    setChecked(!checked);
  };
  return (
    <Container onClick={handlePress}>
      {checked ? <CheckedContainer src={Checked} /> : <></>}
    </Container>
  );
};

export default CheckBox;
