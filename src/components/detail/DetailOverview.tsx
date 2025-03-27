import { MovieProps, TVProps } from "../../types/media";
import { Container, SectionTitle, Overview } from "./DetailOverview.styled";

interface Props {
  item: MovieProps | TVProps;
}

export default function DetailOverview({ item }: Props) {
  return (
    <Container>
      <SectionTitle>줄거리</SectionTitle>
      {item.overview ? <Overview>{item.overview}</Overview> : <Overview>줄거리 정보가 없습니다.</Overview>}
    </Container>
  );
}
