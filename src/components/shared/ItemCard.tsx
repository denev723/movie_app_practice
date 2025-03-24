import { Link } from "react-router-dom";
import { ItemCardProps } from "../../types/app";
import { getMediaYear } from "../../utils/formatDates";

interface Props extends ItemCardProps {
  type: "movie" | "tv";
}

export default function ItemCard({
  id,
  poster_path,
  vote_average,
  title,
  name,
  release_date,
  first_air_date,
  type,
}: Props) {
  const displayTitle = title || name;
  const displayDate = release_date || first_air_date || "";

  return (
    <li key={id}>
      <Link to={`/${type}/${id}`}>
        <div>
          <div>
            <img src={`https://image.tmdb.org/t/p/w400${poster_path}`} alt={displayTitle} />
          </div>
          <div>
            <h4>{displayTitle}</h4>
            <p>
              {getMediaYear(displayDate)} / {vote_average}
            </p>
          </div>
        </div>
      </Link>
    </li>
  );
}
