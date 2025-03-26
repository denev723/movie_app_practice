import styled from "styled-components";
import { FlexCenter } from "../../styles/shared.styled";
import { Link } from "react-router-dom";

export const CardItem = styled.li`
  width: 100%;
  max-width: 160px;
  min-width: 150px;
  height: auto;
  flex: 1;
`;

export const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: inherit;
  height: 100%;
`;

export const CardBox = styled.div`
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

export const PosterWrapper = styled.div`
  width: 100%;
  aspect-ratio: 2 / 3;
  overflow: hidden;
`;

export const Poster = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const InfoBox = styled.div`
  ${FlexCenter};

  padding: ${({ theme }) => theme.spacing.xs};
  background-color: ${({ theme }) => theme.colors.surface};

  flex-direction: column;

  height: 72px;
`;

export const Title = styled.h4`
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

export const SubInfo = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.mutedText};
  text-align: center;
`;
