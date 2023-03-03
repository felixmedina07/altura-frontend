import { OPERATION_SAVE_PLACE_API } from "../config/config";

export const getScore = async (token) => {
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
