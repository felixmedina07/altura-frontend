import styled from "styled-components";

const Background = styled("div")(
  ({ visible }) => `
      display: flex;
      background-color: rgba(0, 0, 0, 0.9);
      width: 13vw;
      height: 300px
      z-index:500;
      flex-direction: column;
      height: 100px;
      align-items:celter;
      justify-content:center;
      transition: opacity .4s;
      opacity: ${visible ? 1 : 0}
  `
);

const Text = styled.div(
  () => `
      color: #fff;
      font-family: Genesis;
      font-size: 10px;
      cursor: pointer;
      margin-top: 5px;
      align-self: center;

  `
);

const FilterByPrice = ({ visible, setVisible }) => {
  const handleClick = () => {
    setVisible(false);
  };
  return (
    <Background visible={visible}>
      <Text onClick={handleClick}>Lowest Price</Text>
      <Text onClick={handleClick}>Highest Price</Text>
      <Text onClick={handleClick}>Latest</Text>
    </Background>
  );
};

export default FilterByPrice;
