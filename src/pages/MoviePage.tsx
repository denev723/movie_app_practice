import { useEffect, useState } from "react";
import { ItemCardProps } from "../types/app";
import { fetchNowPlayingMovies, fetchPopularMovies, fetchTopRatedMovies } from "../api/movie";
import MovieList from "../components/movie/MovieList";
import { HelmetMeta } from "../lib/helmet";

export default function MoviePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [topRated, setTopRated] = useState<ItemCardProps[]>([]);
  const [popular, setPopular] = useState<ItemCardProps[]>([]);
  const [nowPlaying, setNowPlaying] = useState<ItemCardProps[]>([]);

  const fetchMovies = async () => {
    try {
      setIsLoading(true);
      const [top, pop, now] = await Promise.all([fetchTopRatedMovies(), fetchPopularMovies(), fetchNowPlayingMovies()]);
      setTopRated(top);
      setPopular(pop);
      setNowPlaying(now);
    } catch (error) {
      console.error("목록 불러오기 실패", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <HelmetMeta title="Movie" description="최신 인기 영화, 상영 중 영화, 평점 높은 영화들을 만나보세요." />
      <MovieList isLoading={isLoading} title="현재 상영중인 작품" movies={nowPlaying} />
      <MovieList isLoading={isLoading} title="인기 작품" movies={popular} />
      <MovieList isLoading={isLoading} title="최고 인기 작품" movies={topRated} />
    </>
  );
}
