import { Link } from "react-router-dom";
import { ItemCardProps } from "../../types/app";
import { getMediaYear } from "../../utils/formatDates";
import styled from "styled-components";
import noPoster from "../../assets/no-poster.png";
import { makeImagePath } from "../../utils/imagePath";

interface Props extends ItemCardProps {
  type: "movie" | "tv";
}

// Styles for ItemCard component
const CardItem = styled.li`
  width: 100%;
  max-width: 160px;
  min-width: 150px;
  height: auto;
  flex: 1;
`;

const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: inherit;
  height: 100%;
`;

const CardBox = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radius.base};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.card};
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    box-shadow: ${({ theme }) => theme.shadows.hover};
  }
`;

const PosterWrapper = styled.div`
  width: 100%;
  aspect-ratio: 2 / 3;
  overflow: hidden;
`;

const Poster = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const InfoBox = styled.div`
  padding: ${({ theme }) => theme.spacing.xs};
  background-color: ${({ theme }) => theme.colors.surface};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 72px;
`;

const Title = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 4px;
  width: 100%;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const SubInfo = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.mutedText};
  text-align: center;
`;

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
