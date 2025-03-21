import { TVProps } from "../../types/app";
import Loading from "../common/Loading";
import ItemCard from "../shared/ItemCard";

interface Props {
  isLoading: boolean;
  title: string;
  tvs: TVProps[];
}

export default function TvList({ isLoading, title, tvs }: Props) {
  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <h2>{title}</h2>
          <ul>
            {tvs.map((tv) => (
              <ItemCard key={tv.id} {...tv} type="tv" />
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
