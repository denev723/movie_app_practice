import { TVSeason } from "../../types/app";
import { Container, SectionTitle } from "./DetailOverview.styled";
import { SeasonWrap } from "./SeasonList.styled";
import SeasonItem from "./SeasonItem";

interface Props {
  items: TVSeason[];
}

export default function SeasonList({ items }: Props) {
  if (!items.length) return null;

  return (
    <Container>
      <SectionTitle>시즌 정보</SectionTitle>
      <SeasonWrap>
        {items.map((season) => (
          <SeasonItem key={season.id} season={season} />
        ))}
      </SeasonWrap>
    </Container>
  );
}
