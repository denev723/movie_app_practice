import { MovieListProps } from "../../types/MovieTypes";

export default function MovieList({ movies }: MovieListProps) {
  console.log(movies);
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <h2>{movie.title}</h2>
        </li>
      ))}
    </ul>
  );
}
