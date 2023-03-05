import { useCallback, useContext } from "react";
import { OPERATION_SAVE_PLACE_API } from "../config/config";
import { UserContext } from "../context/mainContext";

const useScore = () => {
  const { token } = useContext(UserContext);

  const getAllScore = useCallback(async () => await getScore(token), [token]);

  return {
    getAllScore,
  };
};

export default useScore;

const getScore = async (token) => {
  const result = await fetch(`${OPERATION_SAVE_PLACE_API}/score/all`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const scores = await result.json();
  return scores.score || [];
};
