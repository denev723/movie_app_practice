import axios from "axios";
import { ApiResponse, SearchResult } from "../types/app";
import { API_OPTIONS, API_URL } from "./config";

export const searchMulti = async (query: string, page: number = 1): Promise<ApiResponse<SearchResult>> => {
  const res = await axios.get<ApiResponse<SearchResult>>(`${API_URL}/search/multi?query=${query}`, {
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

export const searchLoadMore = async () => {
  // Implement this function to load more search results
};
