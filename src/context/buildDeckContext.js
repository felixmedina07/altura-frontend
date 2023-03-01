import { createContext, useState } from "react";

const initialValue = {
  name: "",
  setName: () => {},
  cardsId: [],
  setCardsId: () => {},
};

export const BuildDeckContext = createContext(initialValue);

const BuildDeckProvider = ({ children }) => {
  const [name, setName] = useState(initialValue.name);
  const [cardsId, setCardsId] = useState(initialValue.cardsId);
  return (
    <BuildDeckContext.Provider
      value={{
        name,
        setName,
        cardsId,
        setCardsId,
      }}
    >
      {children}
    </BuildDeckContext.Provider>
  );
};

export default BuildDeckProvider;
