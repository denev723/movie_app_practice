import { ItemCardProps } from "../../types/media";
import Loading from "./Loading";
import ItemCard from "./ItemCard";
import { SectionWrapper, ItemList } from "./ItemSection.styled";

interface Props<T> {
  items: T[];
  type: "movie" | "tv";
  isLoading?: boolean;
  children: React.ReactNode;
}

export default function ItemSection<T extends ItemCardProps>({ items, isLoading, type, children }: Props<T>) {
  return (
    <SectionWrapper>
      {children}
      {isLoading ? (
        <Loading />
      ) : (
        <ItemList>
          {items.map((item) => (
            <ItemCard key={item.id} {...item} type={type} />
          ))}
        </ItemList>
      )}
    </SectionWrapper>
  );
}
