import axios from "axios";
import { ApiResponse, ItemCardProps } from "../types/app";
import { API_OPTIONS, API_URL } from "./config";

export const fetchTvsByType = async (type: "popular" | "top_rated" | "on_the_air"): Promise<ItemCardProps[]> => {
  const res = await axios.get<ApiResponse<ItemCardProps>>(`${API_URL}/tv/${type}?language=ko-KR`, API_OPTIONS);

  return res.data.results;
};
