import { makeImagePath } from "../../api/common";
import { TVProps, WatchProvider } from "../../types/app";
import { formatAirDates, getMediaYear } from "../../utils/formatDates";

interface Props {
  item: TVProps;
  providers: WatchProvider[];
}

export default function TvDetail({ item, providers }: Props) {
  console.log(item.seasons);
  return (
    <div>
      <div>
        <div>{item.poster_path ? <img src={makeImagePath(item.poster_path)} alt={item.name} /> : <div></div>}</div>
        <div>
          <h2>{item.name}</h2>
          {item.first_air_date && (
            <p>
              <strong>방영기간 : </strong>
              {formatAirDates(item.first_air_date, item.last_air_date, item.next_episode_to_air)}
            </p>
          )}
          <p>
            <strong>평점 : </strong>
            {item.vote_average ? item.vote_average : "평점 정보 없음"}
          </p>
          {item.genres.length > 0 && (
            <p>
              <strong>장르 : </strong>
              {item.genres.map((g) => g.name).join(" / ")}
            </p>
          )}
          {providers.length > 0 && (
            <>
              <p>
                <strong>OTT 정보</strong>
              </p>
              <ul>
                {providers.map((ott) => (
                  <li key={ott.provider_id}>
                    <img src={makeImagePath(ott.logo_path, "w45")} alt={ott.provider_name} />
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
      <div>
        <h3>줄거리</h3>
        {item.overview ? <p>{item.overview}</p> : <p>줄거리 정보가 없습니다.</p>}
      </div>
      <div>
        {item.seasons.length > 0 && (
          <>
            <h3>시즌 정보</h3>
            <ul>
              {item.seasons.map((season) => (
                <li key={season.id}>
                  <div>
                    {season.poster_path ? (
                      <img src={makeImagePath(season.poster_path)} alt={season.name} />
                    ) : (
                      <div></div>
                    )}
                  </div>
                  <div>
                    <h4>{season.name}</h4>
                    <p>
                      {getMediaYear(season.air_date)} / 총 {season.episode_count}회
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
