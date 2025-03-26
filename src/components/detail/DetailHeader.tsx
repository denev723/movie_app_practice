import { MovieProps, TVProps, WatchProvider } from "../../types/app";
import noPoster from "../../assets/no-poster.png";
import { formatAirDates, formatKoreanDate } from "../../utils/formatDates";
import OTTList from "./OTTList";
import { makeImagePath } from "../../utils/imagePath";
import { FlexBox, Poster, Info, Meta } from "./DetailHeader.styled";

interface Props {
  item: MovieProps | TVProps;
  providers: WatchProvider[];
}

export default function DetailHeader({ item, providers }: Props) {
  const title = "title" in item ? item.title : item.name;
  const date =
    "release_date" in item
      ? item.release_date
      : formatAirDates(item.first_air_date, item.last_air_date, item.next_episode_to_air);
  const dateTitle = "release_date" in item ? "개봉일" : "첫 방영일";
  const runtime = "runtime" in item ? item.runtime : null;

  return (
    <FlexBox>
      <div>
        <Poster
          src={item.poster_path ? makeImagePath(item.poster_path, "w400") : noPoster}
          alt={title}
          onError={(e) => (e.currentTarget.src = noPoster)}
        />
      </div>
      <Info>
        <h2>{title}</h2>
        {date && (
          <Meta>
            <strong>{dateTitle} : </strong>
            {formatKoreanDate(date)}
          </Meta>
        )}
        <Meta>
          <strong>평점 : </strong>
          {item.vote_average ? item.vote_average.toFixed(2) : "평점 정보 없음"}
        </Meta>
        <Meta>
          <strong>런닝타임 : </strong>
          {runtime ? `${runtime}분` : "정보 없음"}
        </Meta>
        {item.genres.length > 0 && (
          <Meta>
            <strong>장르 : </strong>
            {item.genres.map((g) => g.name).join(" / ")}
          </Meta>
        )}
        {providers.length > 0 && <OTTList providers={providers} />}
      </Info>
    </FlexBox>
  );
}
