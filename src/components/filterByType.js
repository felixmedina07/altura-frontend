import styled from "styled-components";
import FilterCheckBox from "./filterCheckbox";
import FilterByNumber from "./filterByNumber";

const Background = styled("div")(
  ({ visible }) => `
    display: flex;
    background-color: rgba(0, 0, 0, 0.9);
    width: 200px;
    z-index:500;
    flex-direction: column;
    height: 750px;
    transition: opacity .4s;
    opacity: ${visible ? 1 : 0}
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

const FilterByType = ({ visible = true, setFilter = () => {} }) => {
  const handleAddFilter = ({ text, type }) => {
    setFilter((items) => {
      const isItem = items.some((item) => item.text === text);
      if (isItem) {
        return items.filter((item) => item.text !== text);
      }
      return [...items, { text, type }];
    });
  };
  return (
    <Background visible={visible}>
      <TitleText>Collections</TitleText>
      <FilterCheckBox
        setFilter={handleAddFilter}
        type={"collection"}
        text={"Apes"}
      />
      <FilterCheckBox
        setFilter={handleAddFilter}
        type={"collection"}
        text={"Dudes"}
      />
      <FilterCheckBox
        setFilter={handleAddFilter}
        type={"collection"}
        text={"Chickens"}
      />
      <FilterCheckBox
        setFilter={handleAddFilter}
        type={"collection"}
        text={"Elves"}
      />
      <FilterCheckBox
        setFilter={handleAddFilter}
        type={"collection"}
        text={"Happy Blob Squad"}
      />
      <FilterCheckBox
        setFilter={handleAddFilter}
        type={"collection"}
        text={"Killer Kitties"}
      />
      <FilterCheckBox
        setFilter={handleAddFilter}
        type={"collection"}
        text={"Owls"}
      />
      <FilterCheckBox
        setFilter={handleAddFilter}
        type={"collection"}
        text={"Queens"}
      />
      <FilterCheckBox
        setFilter={handleAddFilter}
        type={"collection"}
        text={"Vixens"}
      />
      <FilterCheckBox
        setFilter={handleAddFilter}
        type={"collection"}
        text={"Squeegee Gwakkas"}
      />
      <TitleText>Card Type</TitleText>
      <FilterCheckBox setFilter={handleAddFilter} type={"card"} text={"$$"} />
      <FilterCheckBox
        setFilter={handleAddFilter}
        type={"card"}
        text={"Boss Knocker"}
      />
      <FilterCheckBox
        setFilter={handleAddFilter}
        type={"card"}
        text={"Grenade Launcher"}
      />
      <FilterCheckBox
        setFilter={handleAddFilter}
        type={"card"}
        text={"Healing"}
      />
      <FilterCheckBox
        setFilter={handleAddFilter}
        type={"card"}
        text={"Laser"}
      />
      <FilterCheckBox
        setFilter={handleAddFilter}
        type={"card"}
        text={"Revealing"}
      />
      <FilterCheckBox
        setFilter={handleAddFilter}
        type={"card"}
        text={"Rocket Launcher"}
      />
      <FilterCheckBox
        setFilter={handleAddFilter}
        type={"card"}
        text={"Shielding"}
      />
      <FilterCheckBox
        setFilter={handleAddFilter}
        type={"card"}
        text={"Slowing"}
      />
      <FilterCheckBox
        setFilter={handleAddFilter}
        type={"card"}
        text={"Sniper"}
      />
      <FilterCheckBox
        setFilter={handleAddFilter}
        type={"card"}
        text={"Virus"}
      />
      <TitleText>Special Collection</TitleText>
      <FilterCheckBox
        setFilter={handleAddFilter}
        type={"especial"}
        text={"Starters"}
      />
      <FilterCheckBox
        setFilter={handleAddFilter}
        type={"especial"}
        text={"Christmas"}
      />
      <FilterCheckBox
        setFilter={handleAddFilter}
        type={"especial"}
        text={"Founders"}
      />
      <FilterCheckBox
        setFilter={handleAddFilter}
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
  );
};

export default FilterByType;
