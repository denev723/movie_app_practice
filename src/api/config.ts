export const API_URL = "https://api.themoviedb.org/3";
export const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const API_OPTIONS = {
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

export const DEFAULT_LANGUAGE = "ko-KR";
export const DEFAULT_REGION = "KR";

export const DEFAULT_QUERY = `language=${DEFAULT_LANGUAGE}&region=${DEFAULT_REGION}`;
