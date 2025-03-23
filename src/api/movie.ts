import axios from "axios";
import { ApiResponse, MovieProps } from "../types/app";
import { API_OPTIONS, API_URL, DEFAULT_QUERY } from "./config";

export const fetchTopRatedMovies = async (): Promise<MovieProps[]> => {
  const res = await axios.get<ApiResponse<MovieProps>>(`${API_URL}/movie/top_rated?${DEFAULT_QUERY}`, API_OPTIONS);
  return res.data.results;
};

export const fetchPopularMovies = async (): Promise<MovieProps[]> => {
  const res = await axios.get<ApiResponse<MovieProps>>(`${API_URL}/movie/popular?${DEFAULT_QUERY}`, API_OPTIONS);
  return res.data.results;
};

export const fetchNowPlayingMovies = async (): Promise<MovieProps[]> => {
  const res = await axios.get<ApiResponse<MovieProps>>(`${API_URL}/movie/now_playing?${DEFAULT_QUERY}`, API_OPTIONS);
  return res.data.results;
};
