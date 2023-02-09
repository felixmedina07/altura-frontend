import styled from "styled-components";

const Background = styled("div")(
  ({ visible }) => `
      display: flex;
      background-color: rgba(0, 0, 0, 0.9);
      position: absolute;
      width: 200px;
      min-height: 70px;
      padding-left: 20px;
      top:150px;
      right:10px;
      z-index:500;
      flex-direction: column;
      visibility: ${visible ? "visible" : "hidden"};
      opacity: ${visible ? "1" : "0"};
      transition: ${
        visible
          ? "visibility 0s, opacity 0.5s linear"
          : "opacity 0s, visibility 0.5s linear"
      };
  `
);

const Container = styled.div(
  () => `
      position: relative
  `
);

const Text = styled.div(
  () => `
      color: #fff;
      font-family: Genesis;
      font-size: 10px;
      cursor: pointer;
      margin-top: 5px;
  `
);

const FilterByPrice = ({ visible, setVisible }) => {
  const handleClick = () => {
    setVisible(false);
  };
  return (
    <Container>
      <Background visible={visible}>
        <Text onClick={handleClick}>Lowest Price</Text>
        <Text onClick={handleClick}>Highest Price</Text>
        <Text onClick={handleClick}>Latest</Text>
      </Background>
    </Container>
  );
};

export default FilterByPrice;
