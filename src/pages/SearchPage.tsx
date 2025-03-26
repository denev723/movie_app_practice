import { useSearchParams } from "react-router-dom";
import { HelmetMeta } from "../lib/helmet";
import SearchList from "../components/search/SearchList";
import { useSearchMedia } from "../hooks/useSearchMedia";
import { SectionTitle, SectionWrapper } from "./SearchPage.styled";

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";

  const { isLoading, mediaState, loadMoreByType } = useSearchMedia(query);

  return (
    <>
      <HelmetMeta title={`${query} 검색 결과`} description={`${query}의 검색 결과`} />
      <SectionWrapper>
        <SectionTitle>"{query}"의 검색 결과</SectionTitle>
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
      </SectionWrapper>
    </>
  );
}
