import { ItemCardProps } from "../../types/app";
import { SectionTitle } from "./ItemList.styled";
import ItemSection from "./ItemSection";

interface Props {
  isLoading: boolean;
  title: string;
  items: ItemCardProps[];
  type: "movie" | "tv";
}

export default function ItemList({ items, title, isLoading, type }: Props) {
  return (
    <ItemSection items={items} type={type} isLoading={isLoading}>
      <SectionTitle>{title}</SectionTitle>
    </ItemSection>
  );
}
