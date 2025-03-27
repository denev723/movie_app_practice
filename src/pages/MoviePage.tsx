import { useEffect, useState } from "react";
import { ItemCardProps } from "../types/media";
import { HelmetMeta } from "../lib/helmet";
import ItemList from "../components/common/ItemList";
import { fetchItemsByMediaType } from "../api/common";

export default function MoviePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [topRated, setTopRated] = useState<ItemCardProps[]>([]);
  const [popular, setPopular] = useState<ItemCardProps[]>([]);
  const [nowPlaying, setNowPlaying] = useState<ItemCardProps[]>([]);

  const fetchMovies = async () => {
    try {
      setIsLoading(true);
      const [top, pop, now] = await Promise.all([
        fetchItemsByMediaType({ type: "top_rated", mediaType: "movie" }),
        fetchItemsByMediaType({ type: "popular", mediaType: "movie" }),
        fetchItemsByMediaType({ type: "now_playing", mediaType: "movie" }),
      ]);
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
      <ItemList isLoading={isLoading} title="현재 상영중인 작품" items={nowPlaying} type="movie" />
      <ItemList isLoading={isLoading} title="인기 작품" items={popular} type="movie" />
      <ItemList isLoading={isLoading} title="최고 인기 작품" items={topRated} type="movie" />
    </>
  );
}
