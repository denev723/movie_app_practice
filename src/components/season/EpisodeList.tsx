import { Episode } from "../../types/media";
import EpisodeCard from "./EpisodeCard";
import { ListWrapper } from "./EpisodeList.styled";

interface Props {
  episodes: Episode[];
}

export default function EpisodeList({ episodes }: Props) {
  if (!episodes.length) return null;

  return (
    <ListWrapper>
      {episodes.map((ep) => (
        <EpisodeCard key={ep.id} episode={ep} />
      ))}
    </ListWrapper>
  );
}
