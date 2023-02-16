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
    right:0;
    margin-right:0.5rem;
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

const DeckList = ({ visible = true }) => {
  return (
    <Container>
      <Background visible={visible}>
        <TitleText>Collections</TitleText>
        <FilterCheckBox
          type={"collection"}
          text={"Apes"}
        />
        <FilterCheckBox
          type={"collection"}
          text={"Dudes"}
        />
        <FilterCheckBox
          type={"collection"}
          text={"Chickens"}
        />
        <FilterCheckBox
          type={"collection"}
          text={"Elves"}
        />
        <FilterCheckBox
          type={"collection"}
          text={"Happy Blob Squad"}
        />
        <FilterCheckBox
          type={"collection"}
          text={"Killer Kitties"}
        />
        <FilterCheckBox
          type={"collection"}
          text={"Owls"}
        />
        <FilterCheckBox
          type={"collection"}
          text={"Queens"}
        />
        <FilterCheckBox
          type={"collection"}
          text={"Vixens"}
        />
        <FilterCheckBox
          type={"collection"}
          text={"Squeegee Gwakkas"}
        />
        <TitleText>Card Type</TitleText>
        <FilterCheckBox type={"card"} text={"$$"} />
        <FilterCheckBox
          type={"card"}
          text={"Boss Knocker"}
        />
        <FilterCheckBox
          type={"card"}
          text={"Grenade Launcher"}
        />
        <FilterCheckBox
          type={"card"}
          text={"Healing"}
        />
        <FilterCheckBox
          type={"card"}
          text={"Laser"}
        />
        <FilterCheckBox
          type={"card"}
          text={"Revealing"}
        />
        <FilterCheckBox
          type={"card"}
          text={"Rocket Launcher"}
        />
        <FilterCheckBox
          type={"card"}
          text={"Shielding"}
        />
        <FilterCheckBox
          type={"card"}
          text={"Slowing"}
        />
        <FilterCheckBox
          type={"card"}
          text={"Sniper"}
        />
        <FilterCheckBox
          type={"card"}
          text={"Virus"}
        />
        <TitleText>Special Collection</TitleText>
        <FilterCheckBox
          type={"especial"}
          text={"Starters"}
        />
        <FilterCheckBox
          type={"especial"}
          text={"Christmas"}
        />
        <FilterCheckBox
          type={"especial"}
          text={"Founders"}
        />
        <FilterCheckBox
          type={"especial"}
          text={"Baddies"}
        />
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
