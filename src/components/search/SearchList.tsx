import styled from "styled-components";
import { MediaItemState, MediaType } from "../../types/app";
import Loading from "../common/Loading";
import ItemCard from "../common/ItemCard";

interface Props {
  title: string;
  mediaType: MediaType;
  data: MediaItemState;
  isLoading: boolean;
  onLoadMore: (type: MediaType) => void;
}

// styles for SearchList component
const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.background};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.base};

  @media (max-width: 480px) {
    font-size: ${({ theme }) => theme.fontSizes.base};
  }
`;

const Empty = styled.p`
  color: ${({ theme }) => theme.colors.mutedText};
  text-align: center;
  padding: ${({ theme }) => theme.spacing.lg};
`;

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: ${({ theme }) => theme.spacing.base};
  list-style: none;
  padding: 0;
  margin: 0;
`;

const MoreButton = styled.button`
  margin: ${({ theme }) => theme.spacing.xl} auto 0; // 상단 여백 크게
  display: block;
  padding: ${({ theme }) => theme.spacing.base} ${({ theme }) => theme.spacing.xl}; // 버튼 크기 업
  background-color: ${({ theme }) => theme.colors.accent};
  color: #fff;
  border: none;
  border-radius: ${({ theme }) => theme.radius.base};
  font-size: ${({ theme }) => theme.fontSizes.base}; // 글씨 크기 약간 키움
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent}cc; // 살짝 투명도
  }
`;

export default function SearchList({ title, mediaType, data, onLoadMore, isLoading }: Props) {
  return (
    <Section>
      <Title>{title}</Title>
      {isLoading ? (
        <Loading />
      ) : data.results.length === 0 ? (
        <Empty>검색된 영화가 없습니다.</Empty>
      ) : (
        <>
          <List>
            {data.results.map((movie) => (
              <ItemCard key={movie.id} {...movie} type={mediaType} />
            ))}
          </List>
          {data.hasMore &&
            (data.isLoadingMore ? <Loading /> : <MoreButton onClick={() => onLoadMore(mediaType)}>더보기</MoreButton>)}
        </>
      )}
    </Section>
  );
}
