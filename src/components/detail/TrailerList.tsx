import styled from "styled-components";
import { VideoInfo } from "../../types/app";

interface Props {
  trailers: VideoInfo[];
}

// styles for TrailerList component
const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

const SectionTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin-top: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const TrailerWrap = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: ${({ theme }) => theme.spacing.base};
  list-style: none;
  padding: 0;
  margin: 0;
`;

const TrailerItem = styled.li`
  width: 100%;
  aspect-ratio: 16 / 9;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: ${({ theme }) => theme.radius.sm};
  }
`;

export default function TrailerList({ trailers }: Props) {
  if (trailers.length > 0) {
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
  } else {
    return null;
  }
}
