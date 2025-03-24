// 기본 타입 정의
export interface MediaBasicProps {
  id: number;
  overview: string;
  backdrop_path: string;
  poster_path: string;
  genre_ids: number[];
  vote_average: number;
}

// 영화, TV 프로그램 타입 정의
export interface MovieProps extends MediaBasicProps {
  title: string;
  adult: boolean;
  release_date: string;
}

export interface TVProps extends MediaBasicProps {
  name: string;
  first_air_date: string;
  origin_country: string[];
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
  poster_path: string;
  vote_average: number;
  release_date?: string;
  first_air_date?: string;
  title?: string;
  name?: string;
  origin_country?: string[];
  type: "movie" | "tv";
}

// 검색 결과 아이템 타입 정의
export interface SearchResult extends ItemCardProps {
  media_type: "movie" | "tv";
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
