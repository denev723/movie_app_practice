import { MovieProps } from "../../types/app";
import Loading from "../common/Loading";
import ItemCard from "../shared/ItemCard";

interface Props {
  isLoading: boolean;
  title: string;
  movies: MovieProps[];
}

export default function MovieList({ isLoading, title, movies }: Props) {
  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <h2>{title}</h2>
          <ul>
            {movies.map((movie) => (
              <ItemCard key={movie.id} {...movie} type="movie" />
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
