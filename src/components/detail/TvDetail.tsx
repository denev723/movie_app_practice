import styled from "styled-components";
import { makeImagePath } from "../../api/common";
import { TVProps, WatchProvider } from "../../types/app";
import { formatAirDates, getMediaYear } from "../../utils/formatDates";
import noPoster from "../../assets/no-poster.png";

interface Props {
  item: TVProps;
  providers: WatchProvider[];
}

// styles for TvDetail component
const Wrapper = styled.div<{ backdrop?: string }>`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.text};
  position: relative;

  background-color: ${({ theme }) => theme.colors.background};
  background-image: ${({ backdrop }) => (backdrop ? `url(${backdrop})` : "none")};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.7); // ✅ 어두운 필터
    backdrop-filter: blur(4px);
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding: ${({ theme }) => theme.spacing.base};
  }
`;

const FlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Poster = styled.img`
  width: 240px;
  aspect-ratio: 2 / 3;
  border-radius: ${({ theme }) => theme.radius.base};
  object-fit: cover;
`;

const Info = styled.div`
  flex: 1;

  h2 {
    font-size: ${({ theme }) => theme.fontSizes.title};
    margin-bottom: ${({ theme }) => theme.spacing.base};
  }
`;

const Meta = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  line-height: 1.6;
`;

const SectionTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin-top: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const Providers = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  list-style: none;
  padding: 0;
`;

const ContentSection = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
`;

const Overview = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const SeasonList = styled.ul`
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

export default function TvDetail({ item, providers }: Props) {
  return (
    <Wrapper backdrop={makeImagePath(item.backdrop_path)}>
      <FlexBox>
        <div>
          <Poster
            src={item.poster_path ? `https://image.tmdb.org/t/p/w400${item.poster_path}` : noPoster}
            alt={item.name}
            onError={(e) => (e.currentTarget.src = noPoster)}
          />
        </div>
        <Info>
          <h2>{item.name}</h2>
          {item.first_air_date && (
            <Meta>
              <strong>방영기간 : </strong>
              {formatAirDates(item.first_air_date, item.last_air_date, item.next_episode_to_air)}
            </Meta>
          )}
          <Meta>
            <strong>평점 : </strong>
            {item.vote_average ? item.vote_average : "평점 정보 없음"}
          </Meta>
          {item.genres.length > 0 && (
            <Meta>
              <strong>장르 : </strong>
              {item.genres.map((g) => g.name).join(" / ")}
            </Meta>
          )}
          {providers.length > 0 && (
            <>
              <SectionTitle>
                <strong>OTT 정보</strong>
              </SectionTitle>
              <Providers>
                {providers.map((ott) => (
                  <li key={ott.provider_id}>
                    <img src={makeImagePath(ott.logo_path, "w45")} alt={ott.provider_name} />
                  </li>
                ))}
              </Providers>
            </>
          )}
        </Info>
      </FlexBox>
      <ContentSection>
        <div>
          <SectionTitle>줄거리</SectionTitle>
          {item.overview ? <Overview>{item.overview}</Overview> : <p>줄거리 정보가 없습니다.</p>}
        </div>
        <div>
          {item.seasons.length > 0 && (
            <>
              <SectionTitle>시즌 정보</SectionTitle>
              <SeasonList>
                {item.seasons.map((season) => (
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
              </SeasonList>
            </>
          )}
        </div>
      </ContentSection>
    </Wrapper>
  );
}
