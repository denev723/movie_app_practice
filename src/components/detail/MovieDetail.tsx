import styled from "styled-components";
import { MovieProps, VideoInfo, WatchProvider } from "../../types/app";
import { formatKoreanDate } from "../../utils/formatDates";
import noPoster from "../../assets/no-poster.png";
import { makeImagePath } from "../../utils/imagePath";

interface Props {
  item: MovieProps;
  providers: WatchProvider[];
  trailers: VideoInfo[];
}

// styles for MovieDetail component
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
    margin-bottom: ${({ theme }) => theme.spacing.base}; // ✅ 제목과 메타 간 여백 추가
  }
`;

const Meta = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing.sm}; // spacing.xs → sm
  line-height: 1.6; // 더 넉넉하게
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
  margin-top: ${({ theme }) => theme.spacing.xl}; // 전체 줄거리-트레일러 영역 위 간격
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg}; // 내부 간격도 추가
`;

const Overview = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const TrailerList = styled.ul`
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

export default function MovieDetail({ item, providers, trailers }: Props) {
  return (
    <Wrapper backdrop={makeImagePath(item.backdrop_path)}>
      <FlexBox>
        <div>
          <div>
            <Poster
              src={item.poster_path ? `https://image.tmdb.org/t/p/w400${item.poster_path}` : noPoster}
              alt={item.title}
              onError={(e) => (e.currentTarget.src = noPoster)}
            />
          </div>
        </div>
        <Info>
          <h2>{item.title}</h2>
          {item.release_date && (
            <Meta>
              <strong>개봉일 : </strong>
              {formatKoreanDate(item.release_date)}
            </Meta>
          )}
          <Meta>
            <strong>평점 : </strong>
            {item.vote_average ? item.vote_average.toFixed(2) : "평점 정보 없음"}
          </Meta>
          {item.runtime && (
            <Meta>
              <strong>런닝타임 : </strong>
              {item.runtime}분
            </Meta>
          )}
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
          {item.overview ? <Overview>{item.overview}</Overview> : <Overview>줄거리 정보가 없습니다.</Overview>}
        </div>
        <div>
          {trailers.length > 0 && (
            <>
              <SectionTitle>공식 트레일러</SectionTitle>
              <TrailerList>
                {trailers.map((trailer) => (
                  <TrailerItem key={trailer.id}>
                    <iframe
                      src={`https://www.youtube.com/embed/${trailer.key}`}
                      title={trailer.name}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    ></iframe>
                  </TrailerItem>
                ))}
              </TrailerList>
            </>
          )}
        </div>
      </ContentSection>
    </Wrapper>
  );
}
