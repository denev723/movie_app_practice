import { makeImagePath } from "../../api/common";
import { MovieProps, VideoInfo, WatchProvider } from "../../types/app";
import { formatKoreanDate } from "../../utils/formatDates";

interface Props {
  item: MovieProps;
  providers: WatchProvider[];
  trailers: VideoInfo[];
}

export default function MovieDetail({ item, providers, trailers }: Props) {
  return (
    <div>
      <div>
        <div>
          <div>{item.poster_path ? <img src={makeImagePath(item.poster_path)} alt={item.title} /> : <div></div>}</div>
        </div>
        <div>
          <h2>{item.title}</h2>
          {item.release_date && (
            <p>
              <strong>개봉일 : </strong>
              {formatKoreanDate(item.release_date)}
            </p>
          )}
          {item.vote_average && (
            <p>
              <strong>평점 : </strong>
              {item.vote_average}
            </p>
          )}
          {item.runtime && (
            <p>
              <strong>런닝타임 : </strong>
              {item.runtime}분
            </p>
          )}
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
        <div>
          <h3>줄거리</h3>
          {item.overview ? <p>{item.overview}</p> : <p>줄거리 정보가 없습니다.</p>}
        </div>
        <div>
          {trailers.length > 0 && (
            <>
              <h3>공식 트레일러</h3>
              <ul>
                {trailers.map((trailer) => (
                  <li key={trailer.id}>
                    <iframe
                      src={`https://www.youtube.com/embed/${trailer.key}`}
                      title={trailer.name}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    ></iframe>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
