import axios from "axios";
import { ApiResponse, ItemCardProps } from "../types/app";
import { API_OPTIONS, API_URL, DEFAULT_QUERY } from "./config";

export const fetchMoviesByType = async (type: "popular" | "top_rated" | "now_playing"): Promise<ItemCardProps[]> => {
  const res = await axios.get<ApiResponse<ItemCardProps>>(`${API_URL}/movie/${type}?${DEFAULT_QUERY}`, API_OPTIONS);
  return res.data.results;
};
