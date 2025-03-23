import { ItemCardProps } from "../../types/app";
import Loading from "../common/Loading";
import ItemCard from "./ItemCard";

interface Props<T> {
  items: T[];
  type: "movie" | "tv";
  isLoading?: boolean;
  children: React.ReactNode;
}

export default function ItemSection<T extends ItemCardProps>({ items, isLoading, type, children }: Props<T>) {
  return (
    <section>
      {children}
      {isLoading ? (
        <Loading />
      ) : (
        <ul>
          {items.map((item) => (
            <ItemCard key={item.id} {...item} type={type} />
          ))}
        </ul>
      )}
    </section>
  );
}
