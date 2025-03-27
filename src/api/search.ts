import axios from "axios";
import { ApiResponse, SearchResult } from "../types/media";
import { API_OPTIONS, API_URL } from "./config";

export const searchByType = async (
  type: "movie" | "tv",
  query: string,
  page: number = 1
): Promise<ApiResponse<SearchResult>> => {
  const res = await axios.get<ApiResponse<SearchResult>>(`${API_URL}/search/${type}`, {
    params: {
      query,
      page,
      language: "ko-KR",
      include_adult: false,
    },
    ...API_OPTIONS,
  });

  return res.data;
};
