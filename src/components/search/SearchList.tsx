import { MediaItemState, MediaType } from "../../types/app";
import Loading from "../common/Loading";
import ItemCard from "../shared/ItemCard";

interface Props {
  title: string;
  mediaType: MediaType;
  data: MediaItemState;
  isLoading: boolean;
  onLoadMore: (type: MediaType) => void;
}

export default function SearchList({ title, mediaType, data, onLoadMore, isLoading }: Props) {
  return (
    <section>
      <h3>{title}</h3>
      {isLoading ? (
        <Loading />
      ) : data.results.length === 0 ? (
        <p>검색된 영화가 없습니다.</p>
      ) : (
        <>
          <ul>
            {data.results.map((movie) => (
              <ItemCard key={movie.id} {...movie} type={mediaType} />
            ))}
          </ul>
          {data.hasMore &&
            (data.isLoadingMore ? <Loading /> : <button onClick={() => onLoadMore(mediaType)}>더보기</button>)}
        </>
      )}
    </section>
  );
}
