import { useEffect, useState } from "react";
import { MovieProps } from "./types/MovieTypes";
import axios from "axios";
import Loading from "./components/common/Loading";
import MovieList from "./components/movie/MovieList";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchMovies = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page <= totalPages ? page : totalPages}`,
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            Accept: "application/json",
          },
        }
      );
      setMovies(response.data.results);
      setTotalPages(response.data.total_pages);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return <div>{isLoading ? <Loading /> : <MovieList movies={movies} />}</div>;
}

export default App;
