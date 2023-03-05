import { useCallback, useContext } from "react";
import { OPERATION_SAVE_PLACE_API } from "../config/config";
import { UserContext } from "../context/mainContext";

const useDeck = () => {
  const { token } = useContext(UserContext);

  const getAllUserDecks = useCallback(
    async () => await getDecks(token),
    [token]
  );
  const deleteUserDeckById = useCallback(
    async (id) => await deleteDeck(id, token),
    [token]
  );
  const saveUserDeck = useCallback(
    async ({ cardsId, name }) => await saveDeck(token, { cardsId, name }),
    [token]
  );
  const activeUserDeck = useCallback(
    async (id) => await activeDeck(token, id),
    [token]
  );

  return {
    getAllUserDecks,
    deleteUserDeckById,
    saveUserDeck,
    activeUserDeck,
  };
};

export default useDeck;

const deleteDeck = async (id, token) => {
  const result = await fetch(`${OPERATION_SAVE_PLACE_API}/deck/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  await result.json();
  return true;
};

const getDecks = async (token) => {
  const result = await fetch(`${OPERATION_SAVE_PLACE_API}/deck/my-deck`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const decks = await result.json();
  return decks.deck;
};

const saveDeck = async (token, { cardsId, name }) => {
  const result = await fetch(`${OPERATION_SAVE_PLACE_API}/deck/`, {
    method: "POST",
    body: JSON.stringify({
      name: name,
      cards: cardsId,
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const statusResult = await result.json();
  return statusResult;
};

const activeDeck = async (token, id) => {
  const result = await fetch(`${OPERATION_SAVE_PLACE_API}/deck/${id}/active`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const statusResult = await result.json();
  return statusResult;
};
