import { VideoInfo } from "../../types/app";
import { Container, SectionTitle } from "./DetailOverview.styled";
import { TrailerWrap, TrailerItem } from "./TrailerList.styled";

interface Props {
  trailers: VideoInfo[];
}

export default function TrailerList({ trailers }: Props) {
  if (trailers.length > 0) return null;

  return (
    <Container>
      <SectionTitle>공식 트레일러</SectionTitle>
      <TrailerWrap>
        {trailers.map((trailer) => (
          <TrailerItem key={trailer.key}>
            <iframe src={`https://www.youtube.com/embed/${trailer.key}`} title={trailer.name} allowFullScreen />
          </TrailerItem>
        ))}
      </TrailerWrap>
    </Container>
  );
}
