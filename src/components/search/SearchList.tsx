import { MediaItemState, MediaType } from "../../types/media";
import Loading from "../common/Loading";
import ItemCard from "../common/ItemCard";
import { Empty, List, MoreButton, Section, Title } from "./SearchList.styled";

interface Props {
  title: string;
  mediaType: MediaType;
  data: MediaItemState;
  isLoading: boolean;
  onLoadMore: (type: MediaType) => void;
}

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
