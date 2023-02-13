import styled from "styled-components";
import FilterCheckBox from "./filterCheckbox";
import FilterByNumber from "./filterByNumber";

const Background = styled("div")(
  ({ visible }) => `
    display: flex;
    background-color: rgba(0, 0, 0, 0.9);
    position: absolute;
    width: 200px;
    min-height: 100px;
    top:150px;
    left:10px;
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

const TitleText = styled("p")(
  () => `
    color: #fff;
    align-self: center;
    font-family: Genesis;
    font-size: 13px;
`
);

const KillsInputContainer = styled("div")(
  () => `
    display:flex;
`
);

const Text = styled.div(
  () => `
      color: #fff;
      font-family: Genesis;
      font-size: 10px;
  `
);

const DeckList = ({ visible = true}) => {
  return (
    <Container>
      <Background visible={visible}>
        <TitleText>Kill Count</TitleText>
        <KillsInputContainer>
          <FilterByNumber />
          <Text>To</Text>
          <FilterByNumber />
        </KillsInputContainer>
      </Background>
    </Container>
  );
};

export default DeckList;
