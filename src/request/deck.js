import { OPERATION_SAVE_PLACE_API } from "../config/config";

export const deleteDeck = async (id, token) => {
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

export const getDecks = async (token) => {
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

export const saveDeck = async (token, { cardsId, name }) => {
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

export const activeDeck = async (token, id) => {
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
