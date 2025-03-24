import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { MediaStateMap, MediaType } from "../types/app";
import { HelmetMeta } from "../lib/helmet";
import { searchByType } from "../api/search";
import SearchList from "../components/search/SearchList";

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";

  const [isLoading, setIsLoading] = useState(false);
  const [mediaState, setMediaState] = useState<MediaStateMap>({
    movie: {
      results: [],
      page: 1,
      totalPages: 0,
      hasMore: false,
      isLoadingMore: false,
    },
    tv: {
      results: [],
      page: 1,
      totalPages: 0,
      hasMore: false,
      isLoadingMore: false,
    },
  });

  const loadMoreByType = async (type: MediaType) => {
    setMediaState((prev) => ({
      ...prev,
      [type]: {
        ...prev[type],
        isLoadingMore: true,
      },
    }));

    try {
      const nextPage = mediaState[type].page + 1;
      const data = await searchByType(type, query, nextPage);

      setMediaState((prev) => ({
        ...prev,
        [type]: {
          ...prev[type],
          results: [...prev[type].results, ...data.results],
          page: nextPage,
          hasMore: nextPage < data.total_pages,
          isLoadingMore: false,
        },
      }));
    } catch (error) {
      console.error(`${type} 더보기 실패:`, error);
      setMediaState((prev) => ({
        ...prev,
        [type]: {
          ...prev[type],
          isLoadingMore: false,
        },
      }));
    }
  };

  const fetchSearchResults = async () => {
    try {
      setIsLoading(true);

      setMediaState((prev) => ({
        ...prev,
        movie: {
          ...prev["movie"],
          page: 1,
        },
        tv: {
          ...prev["tv"],
          page: 1,
        },
      }));

      const [movieData, tvData] = await Promise.all([searchByType("movie", query, 1), searchByType("tv", query, 1)]);

      setMediaState((prev) => ({
        ...prev,
        movie: {
          ...prev.movie,
          results: movieData.results,
          page: 1,
          totalPages: movieData.total_pages,
          hasMore: movieData.total_pages > 1,
          isLoadingMore: false,
        },
        tv: {
          ...prev.tv,
          results: tvData.results,
          page: 1,
          totalPages: tvData.total_pages,
          hasMore: tvData.total_pages > 1,
          isLoadingMore: false,
        },
      }));
    } catch (error) {
      console.error("검색 결과 불러오기 실패", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSearchResults();
  }, [query]);

  return (
    <>
      <HelmetMeta title={`${query} 검색 결과`} description={`${query}의 검색 결과`} />
      <div>
        <h2>"{query}"의 검색 결과</h2>
        <SearchList
          title="영화"
          isLoading={isLoading}
          data={mediaState.movie}
          mediaType="movie"
          onLoadMore={() => loadMoreByType("movie")}
        />
        <SearchList
          title="TV 시리즈"
          isLoading={isLoading}
          data={mediaState.tv}
          mediaType="tv"
          onLoadMore={() => loadMoreByType("tv")}
        />
      </div>
    </>
  );
}
