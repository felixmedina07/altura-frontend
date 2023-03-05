import { useCallback, useContext } from "react";
import { OPERATION_SAVE_PLACE_API } from "../config/config";
import { UserContext } from "../context/mainContext";

const useCard = () => {
  const { token } = useContext(UserContext);

  const onGetAllCards = useCallback(async () => await getAllCards(), []);
  const onGetUserCards = useCallback(async () => await getUserCards(token), []);
  const onBuyCards = useCallback(
    async ({ ids }) => await buyCards(token, { ids }),
    []
  );
  return {
    onGetAllCards,
    onGetUserCards,
    onBuyCards,
  };
};

const getAllCards = async () => {
  const result = await fetch(`${OPERATION_SAVE_PLACE_API}/card/all`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return await result.json();
};

const getUserCards = async (token) => {
  const userCardResult = await fetch(
    `${OPERATION_SAVE_PLACE_API}/card-users/my-cards`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return await userCardResult.json();
};

const buyCards = async (token, { ids }) => {
  const result = await fetch(`${OPERATION_SAVE_PLACE_API}/card-users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      cards: ids,
    }),
  });
  return await result.json();
};

export default useCard;
