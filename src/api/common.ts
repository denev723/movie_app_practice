import axios from "axios";
import { ApiResponse, ItemCardProps } from "../types/app";
import { API_OPTIONS, API_URL, DEFAULT_QUERY } from "./config";

interface Props {
  type: "popular" | "top_rated" | "now_playing" | "on_the_air";
  mediaType: "movie" | "tv";
}

export const fetchItemsByMediaType = async ({ type, mediaType }: Props): Promise<ItemCardProps[]> => {
  const res = await axios.get<ApiResponse<ItemCardProps>>(
    `${API_URL}/${mediaType}/${type}?${DEFAULT_QUERY}`,
    API_OPTIONS
  );
  return res.data.results;
};

export const makeImagePath = (path: string, size: string = "w500") => `https://image.tmdb.org/t/p/${size}${path}`;
