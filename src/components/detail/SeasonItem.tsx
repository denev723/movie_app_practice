import { useParams } from "react-router";
import noPoster from "../../assets/no-poster.png";
import { TVSeason } from "../../types/app";
import { getMediaYear } from "../../utils/formatDates";
import { makeImagePath } from "../../utils/imagePath";
import { Container, SeasonImage, SeasonInfo, SeasonTitle } from "./SeasonItem.styled";
import { Link } from "react-router-dom";

interface Props {
  season: TVSeason;
}

export default function SeasonItem({ season }: Props) {
  const { id: tvId } = useParams<{ id: string }>();
  return (
    <Container key={season.id}>
      <Link to={`/tv/${tvId}/season/${season.season_number}`}>
        <div>
          <SeasonImage
            src={season.poster_path ? `${makeImagePath(season.poster_path, "w400")}` : noPoster}
            alt={season.name}
            onError={(e) => (e.currentTarget.src = noPoster)}
          />
        </div>
        <div>
          <SeasonTitle>{season.name}</SeasonTitle>
          <SeasonInfo>
            {getMediaYear(season.air_date)} / 총 {season.episode_count}회
          </SeasonInfo>
        </div>
      </Link>
    </Container>
  );
}
