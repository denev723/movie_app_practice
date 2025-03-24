import { useEffect, useState } from "react";
import { ItemCardProps } from "../types/app";
import { HelmetMeta } from "../lib/helmet";
import ItemList from "../components/shared/ItemList";
import { fetchItemsByMediaType } from "../api/common";

export default function TvPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [popular, setPopular] = useState<ItemCardProps[]>([]);
  const [topRated, setTopRated] = useState<ItemCardProps[]>([]);
  const [onTheAir, setOnTheAir] = useState<ItemCardProps[]>([]);

  const fetchTvs = async () => {
    try {
      setIsLoading(true);

      const [top, pop, onAir] = await Promise.all([
        fetchItemsByMediaType({ type: "top_rated", mediaType: "tv" }),
        fetchItemsByMediaType({ type: "popular", mediaType: "tv" }),
        fetchItemsByMediaType({ type: "on_the_air", mediaType: "tv" }),
      ]);

      setTopRated(top);
      setPopular(pop);
      setOnTheAir(onAir);
    } catch (error) {
      console.error("목록 불러오기 실패", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTvs();
  }, []);

  return (
    <>
      <HelmetMeta title="TV Series" description="지금 방영 중인 인기 TV 프로그램들을 확인하세요." />
      <ItemList isLoading={isLoading} title="현재 방영중인 작품" items={onTheAir} type="tv" />
      <ItemList isLoading={isLoading} title="인기 작품" items={popular} type="tv" />
      <ItemList isLoading={isLoading} title="최고 평점 작품" items={topRated} type="tv" />
    </>
  );
}
