import styled from "styled-components";
import { TVSeason } from "../../types/app";
import { getMediaYear } from "../../utils/formatDates";
import noPoster from "../../assets/no-poster.png";

interface Props {
  items: TVSeason[];
}

// styles for SeasonList component
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

const SeasonWrap = styled.ul`
  display: flex;
  overflow-x: auto;
  gap: ${({ theme }) => theme.spacing.base};
  list-style: none;
  padding: ${({ theme }) => theme.spacing.sm} 0;
  margin: 0;

  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari */
  }
`;

const SeasonItem = styled.li`
  flex: 0 0 200px; /* ✅ 카드 너비 고정 */
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
  background-color: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => theme.spacing.base};
  border-radius: ${({ theme }) => theme.radius.sm};

  h4 {
    font-size: ${({ theme }) => theme.fontSizes.base};
    margin-bottom: ${({ theme }) => theme.spacing.xs};
  }

  p {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.mutedText};
    line-height: 1.5;
  }
`;

const SeasonImage = styled.img`
  width: 100%;
  border-radius: ${({ theme }) => theme.radius.sm};
  object-fit: cover;
  aspect-ratio: 2 / 3;
`;

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
