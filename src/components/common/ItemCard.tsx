import { ItemCardProps } from "../../types/media";
import { getMediaYear } from "../../utils/formatDates";
import noPoster from "../../assets/no-poster.png";
import { makeImagePath } from "../../utils/imagePath";
import { CardItem, CardBox, PosterWrapper, Poster, InfoBox, Title, SubInfo, StyledLink } from "./ItemCard.styled";

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
    <CardItem key={id}>
      <StyledLink to={`/${type}/${id}`}>
        <CardBox>
          <PosterWrapper>
            <Poster
              src={poster_path ? `${makeImagePath(poster_path, "w400")}` : noPoster}
              alt={title}
              onError={(e) => (e.currentTarget.src = noPoster)}
            />
          </PosterWrapper>
          <InfoBox>
            <Title>{displayTitle}</Title>
            <SubInfo>
              {getMediaYear(displayDate)} / {vote_average.toFixed(1)}
            </SubInfo>
          </InfoBox>
        </CardBox>
      </StyledLink>
    </CardItem>
  );
}
