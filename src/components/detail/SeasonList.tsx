import { TVSeason } from "../../types/app";
import { getMediaYear } from "../../utils/formatDates";
import noPoster from "../../assets/no-poster.png";
import { Container, SectionTitle } from "./DetailOverview.styled";
import { SeasonWrap, SeasonItem, SeasonImage } from "./SeasonList.styled";

interface Props {
  items: TVSeason[];
}

export default function SeasonList({ items }: Props) {
  if (items.length > 0) {
    return (
      <Container>
        <SectionTitle>시즌 정보</SectionTitle>
        <SeasonWrap>
          {items.map((season) => (
            <SeasonItem key={season.id}>
              <div>
                <SeasonImage
                  src={season.poster_path ? `https://image.tmdb.org/t/p/w400${season.poster_path}` : noPoster}
                  alt={season.name}
                  onError={(e) => (e.currentTarget.src = noPoster)}
                />
              </div>
              <div>
                <h4>{season.name}</h4>
                <p>
                  {getMediaYear(season.air_date)} / 총 {season.episode_count}회
                </p>
              </div>
            </SeasonItem>
          ))}
        </SeasonWrap>
      </Container>
    );
  } else {
    return null;
  }
}
