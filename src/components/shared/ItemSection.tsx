import styled from "styled-components";
import { ItemCardProps } from "../../types/app";
import Loading from "../common/Loading";
import ItemCard from "./ItemCard";

interface Props<T> {
  items: T[];
  type: "movie" | "tv";
  isLoading?: boolean;
  children: React.ReactNode;
}

const SectionWrapper = styled.section`
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.base};
  background-color: ${({ theme }) => theme.colors.background};
`;

const ItemList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: ${({ theme }) => theme.spacing.base};
  padding: 0;
  list-style: none;
`;

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
