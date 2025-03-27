// 기본 타입 정의
export interface MediaBasicProps {
  id: number;
  overview: string;
  backdrop_path: string;
  poster_path: string | null;
  genres: { id: number; name: string }[];
  vote_average: number;
}

// 영화, TV 프로그램 타입 정의
export interface MovieProps extends MediaBasicProps {
  title: string;
  adult: boolean;
  release_date: string;
  runtime: number;
}

export interface TVSeason {
  id: number;
  name: string;
  air_date: string;
  poster_path: string | null;
  season_number: number;
  episode_count: number;
}

export interface TVProps extends MediaBasicProps {
  name: string;
  first_air_date: string;
  last_air_date: string;
  next_episode_to_air: Object;
  origin_country: string[];
  seasons: TVSeason[];
}

export interface WatchProviderResponse {
  id: number;
  results: {
    [countryCode: string]: {
      link: string;
      flatrate: WatchProvider[];
      rent?: WatchProvider[];
      buy?: WatchProvider[];
    };
  };
}
export interface WatchProvider {
  provider_id: number;
  provider_name: string;
  logo_path: string;
}

export interface VideoInfo {
  id: string;
  key: string;
  name: string;
  site: string;
  type: string;
}

export interface SeasonDetailInfo {
  id: number;
  name: string;
  seasonName: string;
  air_date: string;
  overview: string;
  poster_path: string | null;
  episodes: Episode[];
}

export interface Episode {
  id: number;
  name: string;
  episode_number: number;
  overview: string;
  air_date: string;
  still_path: string | null;
}

// API 응답 타입 정의
export interface ApiResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
}

// 공통 아이템 타입 정의
export interface ItemCardProps {
  id: number;
  poster_path: string | null;
  vote_average: number;
  release_date?: string;
  first_air_date?: string;
  title?: string;
  name?: string;
  origin_country?: string[];
  type: MediaType;
}

// 검색 결과 아이템 타입 정의
export interface SearchResult extends ItemCardProps {
  media_type: MediaType;
}

// 검색 결과 상태 타입 정의
export type MediaItemState = {
  results: SearchResult[];
  page: number;
  totalPages: number;
  hasMore: boolean;
  isLoadingMore: boolean;
};

export type MediaType = "movie" | "tv";

export type MediaStateMap = {
  [key in MediaType]: MediaItemState;
};
