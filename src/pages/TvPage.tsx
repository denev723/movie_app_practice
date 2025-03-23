import { useEffect, useRef, useState } from "react";
import { ItemCardProps } from "../types/app";
import TvList from "../components/tv/TvList";
import { HelmetMeta } from "../lib/helmet";
import { fetchKoreanTvs } from "../api/tv";

export default function TvPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [popular, setPopular] = useState<ItemCardProps[]>([]);
  const [topRated, setTopRated] = useState<ItemCardProps[]>([]);
  const [onTheAir, setOnTheAir] = useState<ItemCardProps[]>([]);

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
      <TvList isLoading={isLoading} title="현재 방영중인 작품" tvs={onTheAir} />
      <TvList isLoading={isLoading} title="인기 작품" tvs={popular} />
      <TvList isLoading={isLoading} title="최고 평점 작품" tvs={topRated} />
    </>
  );
}
