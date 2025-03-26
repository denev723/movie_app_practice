import { useNavigate, useParams } from "react-router";
import Loading from "../common/Loading";
import { useSeasonDetail } from "../../hooks/useSeasonDetail";
import {
  Wrapper,
  FlexBox,
  Poster,
  Info,
  Meta,
  SectionTitle,
  Overview,
  FullContainer,
  BackButton,
  BtnWrap,
} from "./SeasonDetail.styled";
import noPoster from "../../assets/no-poster.png";
import { makeImagePath } from "../../utils/imagePath";
import EpisodeList from "./EpisodeList";

export default function SeasonDetail() {
  const navigate = useNavigate();
  const { tvId, seasonNumber } = useParams<{ tvId: string; seasonNumber: string }>();

  const { isLoading, data, name } = useSeasonDetail(tvId!, seasonNumber!);

  console.log(tvId, seasonNumber);

  if (isLoading) return <Loading />;
  if (!data) return <p>정보를 불러올 수 없습니다.</p>;

  console.log(data);
  return (
    <Wrapper>
      <FlexBox>
        <div>
          <Poster src={data.poster_path ? makeImagePath(data.poster_path, "w500") : noPoster} alt={data.seasonName} />
        </div>
        <Info>
          <h2>
            {name} - {data.name}
          </h2>
          <Meta>
            <strong>첫 방영일 : </strong>
            {data.air_date}
          </Meta>
          <Meta>
            <strong>에피소드 수 : </strong>
            {data.episodes.length}회
          </Meta>
        </Info>
      </FlexBox>
      <FullContainer>
        <SectionTitle>줄거리</SectionTitle>
        <Overview>{data.overview}</Overview>
      </FullContainer>
      <FullContainer>
        <SectionTitle>회차 정보</SectionTitle>
        <EpisodeList episodes={data.episodes} />
      </FullContainer>
      <BtnWrap>
        <BackButton onClick={() => navigate(`/tv/${tvId}`)}>← 뒤로가기</BackButton>
      </BtnWrap>
    </Wrapper>
  );
}
