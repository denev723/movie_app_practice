import axios from "axios";
import { ApiProps, TVProps } from "../types/app";
import { API_OPTIONS, API_URL, DEFAULT_QUERY } from "./config";

export const fetchTopRatedTvs = async (): Promise<TVProps[]> => {
  const res = await axios.get<ApiProps<TVProps>>(
    `${API_URL}/tv/top_rated?${DEFAULT_QUERY}`,
    API_OPTIONS
  );
  return res.data.results;
};
export const fetchPopularTvs = async (): Promise<TVProps[]> => {
  const res = await axios.get<ApiProps<TVProps>>(
    `${API_URL}/tv/popular?${DEFAULT_QUERY}`,
    API_OPTIONS
  );
  return res.data.results;
};
export const fetchAiringTodayTvs = async (): Promise<TVProps[]> => {
  const res = await axios.get<ApiProps<TVProps>>(
    `${API_URL}/tv/airing_today?${DEFAULT_QUERY}`,
    API_OPTIONS
  );
  return res.data.results;
};
