import styled from "styled-components";
import { ItemCardProps } from "../../types/app";
import ItemSection from "./ItemSection";

interface Props {
  isLoading: boolean;
  title: string;
  items: ItemCardProps[];
  type: "movie" | "tv";
}

// styles for ItemList component
const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  margin: ${({ theme }) => theme.spacing.lg} 0 ${({ theme }) => theme.spacing.md};

  @media (max-width: 480px) {
    font-size: ${({ theme }) => theme.fontSizes.base};
  }
`;

export default function ItemList({ items, title, isLoading, type }: Props) {
  return (
    <ItemSection items={items} type={type} isLoading={isLoading}>
      <SectionTitle>{title}</SectionTitle>
    </ItemSection>
  );
}
