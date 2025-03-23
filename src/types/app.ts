export interface MediaProps {
  id: number;
  overview: string;
  backdrop_path: string;
  poster_path: string;
  genre_ids: number[];
  vote_average: number;
}

export interface MovieProps extends MediaProps {
  title: string;
  adult: boolean;
  release_date: string;
}

export interface TVProps extends MediaProps {
  name: string;
  first_air_date: string;
  origin_country: string[];
}

export interface ItemCardProps {
  id: number;
  poster_path: string;
  vote_average: number;
  release_date?: string;
  first_air_date?: string;
  title?: string;
  name?: string;
  origin_country?: string[];
  type: "movie" | "tv";
}

export interface ApiResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
}

export interface SearchResult extends ItemCardProps {
  media_type: "movie" | "tv" | "person";
}
