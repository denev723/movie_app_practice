import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SearchResult } from "../types/app";
import { searchMulti } from "../api/search";
import { HelmetMeta } from "../lib/helmet";
import ItemCard from "../components/shared/ItemCard";
import Loading from "../components/common/Loading";

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";

  const [isLoading, setIsLoading] = useState(false);
  const [movieResults, setMovieResult] = useState<SearchResult[]>([]);
  const [tvResults, setTvResult] = useState<SearchResult[]>([]);
  const [moviePage, setMoviePage] = useState(1);
  const [tvPage, setTvPage] = useState(1);
  const [movieTotalPages, setMovieTotalPages] = useState(1);
  const [tvTotalPages, setTvTotalPages] = useState(1);
  const [hasMoreMovies, setHasMoreMovies] = useState(true);
  const [hasMoreTVs, setHasMoreTVs] = useState(true);

  const loadmore = async (mediaType: "movie" | "tv") => {
    const nextPage = mediaType === "movie" ? moviePage + 1 : tvPage + 1;
    const data = await searchMulti(query, nextPage);
    const filteredResults = data.results.filter((result) => result.media_type === mediaType);

    if (mediaType === "movie") {
      setMovieResult([...movieResults, ...filteredResults]);
      setMoviePage(nextPage);
      setMovieTotalPages(data.total_pages);
      if (nextPage >= movieTotalPages) setHasMoreMovies(false);
    } else {
      setTvResult([...tvResults, ...filteredResults]);
      setTvPage(nextPage);
      setTvTotalPages(data.total_pages);
      if (nextPage >= tvTotalPages) setHasMoreTVs(false);
    }
  };

  useEffect(() => {
    if (!query) return;
    setIsLoading(true);
    setMoviePage(1);
    setTvPage(1);
    setHasMoreMovies(true);
    setHasMoreTVs(true);

    searchMulti(query).then((data) => {
      const mResults = data.results.filter(
        (result): result is SearchResult & { media_type: "movie" } => result.media_type === "movie"
      );
      const tResults = data.results.filter(
        (result): result is SearchResult & { media_type: "tv" } => result.media_type === "tv"
      );

      setMovieResult(mResults);
      setTvResult(tResults);
      setMovieTotalPages(data.total_pages);
      setTvTotalPages(data.total_pages);
      if (mResults.length === 0 || data.total_pages <= 1) setHasMoreMovies(false);
      if (tResults.length === 0 || data.total_pages <= 1) setHasMoreTVs(false);
      setIsLoading(false);
    });
  }, [query]);

  return (
    <>
      <HelmetMeta title={`${query} 검색 결과`} description={`${query}의 검색 결과`} />
      <div>
        <h2>"{query}"의 검색결과</h2>
        <section>
          <h3>영화</h3>
          {isLoading ? (
            <Loading />
          ) : movieResults.length === 0 ? (
            <p>검색된 영화가 없습니다.</p>
          ) : (
            <>
              <ul>
                {movieResults.map((movie) => (
                  <ItemCard key={movie.id} {...movie} type="movie" />
                ))}
              </ul>
              {hasMoreMovies && <button onClick={() => loadmore("movie")}>더보기</button>}
            </>
          )}
        </section>
        <section>
          <h3>TV 시리즈</h3>
          {isLoading ? (
            <Loading />
          ) : tvResults.length === 0 ? (
            <p>검색된 영화가 없습니다.</p>
          ) : (
            <>
              <ul>
                {tvResults.map((movie) => (
                  <ItemCard key={movie.id} {...movie} type="tv" />
                ))}
              </ul>
              {hasMoreTVs && <button onClick={() => loadmore("tv")}>더보기</button>}
            </>
          )}
        </section>
      </div>
    </>
  );
}
