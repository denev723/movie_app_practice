import { Episode } from "../../types/app";
import { makeImagePath } from "../../utils/imagePath";
import noPoster from "../../assets/no-poster.png";
import { Card, Thumbnail, Info, Title, Meta, Overview } from "./EpisodeCard.styled";

interface Props {
  episode: Episode;
}

export default function EpisodeCard({ episode }: Props) {
  const imageUrl = episode.still_path ? makeImagePath(episode.still_path, "w300") : noPoster;

  return (
    <Card>
      <div>
        <Thumbnail src={imageUrl} alt={episode.name} />
      </div>
      <Info>
        <Title>
          {episode.episode_number}화. {episode.name}
        </Title>
        <Meta>{episode.air_date} 방영</Meta>
        <Overview>{episode.overview || "줄거리 정보 없음"}</Overview>
      </Info>
    </Card>
  );
}
