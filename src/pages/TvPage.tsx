import { useEffect, useRef, useState } from "react";
import { TVProps } from "../types/app";
import TvList from "../components/tv/TvList";
import { HelmetMeta } from "../lib/helmet";
import { fetchKoreanTvs } from "../api/tv";

export default function TvPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [popular, setPopular] = useState<TVProps[]>([]);
  const [topRated, setTopRated] = useState<TVProps[]>([]);
  const [onTheAir, setOnTheAir] = useState<TVProps[]>([]);

  const popularPage = useRef(1);
  const topRatedPage = useRef(1);
  const onTheAirPage = useRef(1);

  const seenIds = useRef(new Set<number>());

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);

    fetchKoreanTvs("popular", setPopular, seenIds, popularPage);
    fetchKoreanTvs("top_rated", setTopRated, seenIds, topRatedPage);
    fetchKoreanTvs("on_the_air", setOnTheAir, seenIds, onTheAirPage);

    setIsLoading(false);
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <HelmetMeta title="TV Series" description="지금 방영 중인 인기 TV 프로그램들을 확인하세요." />
      <TvList isLoading={isLoading} title="On the Air" tvs={onTheAir} />
      <TvList isLoading={isLoading} title="Popular" tvs={popular} />
      <TvList isLoading={isLoading} title="Top Rated" tvs={topRated} />
    </>
  );
}
