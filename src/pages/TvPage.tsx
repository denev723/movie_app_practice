import { useEffect, useState } from "react";
import {
  fetchAiringTodayTvs,
  fetchPopularTvs,
  fetchTopRatedTvs,
} from "../api/tv";
import { TVProps } from "../types/app";
import TvList from "../components/tv/TvList";

export default function TvPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [topRated, setTopRated] = useState<TVProps[]>([]);
  const [popular, setPopular] = useState<TVProps[]>([]);
  const [airingToday, setAiringToday] = useState<TVProps[]>([]);

  const fetchMovies = async () => {
    try {
      setIsLoading(true);
      const [top, pop, air] = await Promise.all([
        fetchTopRatedTvs(),
        fetchPopularTvs(),
        fetchAiringTodayTvs(),
      ]);

      setTopRated(top);
      setPopular(pop);
      setAiringToday(air);
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
      <TvList isLoading={isLoading} title="Airing Today" tvs={airingToday} />
      <TvList isLoading={isLoading} title="Popular" tvs={popular} />
      <TvList isLoading={isLoading} title="Top Rated" tvs={topRated} />
    </>
  );
}
