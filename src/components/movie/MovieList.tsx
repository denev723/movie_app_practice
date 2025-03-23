import { ItemCardProps } from "../../types/app";
import ItemSection from "../shared/ItemSection";

interface Props {
  isLoading: boolean;
  title: string;
  movies: ItemCardProps[];
}

export default function MovieList({ isLoading, title, movies }: Props) {
  return (
    <ItemSection items={movies} type="movie" isLoading={isLoading}>
      <h2>{title}</h2>
    </ItemSection>
  );
}
