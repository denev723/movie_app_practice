export interface MovieProps {
  id: number;
  title: string;
  overview: string;
  backdrop_path: string;
  poster_path: string;
  genre_ids: number[];
  vote_average: number;
  adult: boolean;
}

export interface MovieListProps {
  movies: MovieProps[];
}
