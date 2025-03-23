import { ItemCardProps } from "../../types/app";
import ItemSection from "../shared/ItemSection";

interface Props {
  isLoading: boolean;
  title: string;
  tvs: ItemCardProps[];
}

export default function TvList({ isLoading, title, tvs }: Props) {
  return (
    <ItemSection items={tvs} type="movie" isLoading={isLoading}>
      <h2>{title}</h2>
    </ItemSection>
  );
}
