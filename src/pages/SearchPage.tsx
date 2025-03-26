import { useSearchParams } from "react-router-dom";
import { HelmetMeta } from "../lib/helmet";
import SearchList from "../components/search/SearchList";
import styled from "styled-components";
import { useSearchMedia } from "../hooks/useSearchMedia";

// styles for SearchPage

const SectionWrapper = styled.section`
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.base};
  background-color: ${({ theme }) => theme.colors.background};
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  margin: ${({ theme }) => theme.spacing.lg} 0 ${({ theme }) => theme.spacing.md};
  transition:
    background-color 0.3s ease,
    color 0.3s ease;

  @media (max-width: 480px) {
    font-size: ${({ theme }) => theme.fontSizes.base};
  }
`;

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
