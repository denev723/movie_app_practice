import styled from "styled-components";
import { Link } from "react-router-dom";
import theme from "../../styles/theme";

export const CardItem = styled.li`
  position: relative;
  transition: ${theme.transition.default};
  border-radius: ${theme.borderRadius.medium};
  overflow: hidden;
  cursor: pointer;
  height: 100%;

  &:hover {
    transform: scale(1.05);
    z-index: 10;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    &:hover {
      transform: scale(1.03);
    }
  }
`;

export const StyledLink = styled(Link)`
  display: block;
  height: 100%;
`;

export const CardBox = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.background.card};
  border-radius: ${theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: ${theme.boxShadow.card};
  transition: ${theme.transition.default};

  &:hover {
    box-shadow: ${theme.boxShadow.hover};
  }
`;

export const PosterWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 2/3;
  overflow: hidden;
`;

export const Poster = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: ${theme.transition.slow};

  ${CardItem}:hover & {
    filter: brightness(1.2);
  }
`;

export const InfoBox = styled.div`
  padding: ${theme.spacing.sm};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background: linear-gradient(to top, ${theme.colors.background.card} 80%, rgba(47, 47, 47, 0.8) 100%);

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing.xs};
  }
`;

export const Title = styled.h3`
  font-size: ${theme.fontSize.sm};
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.xs};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.fontSize.xs};
  }
`;

export const SubInfo = styled.p`
  font-size: ${theme.fontSize.xs};
  color: ${theme.colors.text.secondary};
  display: flex;
  align-items: center;

  &::before {
    content: "★";
    color: #ffd700;
    margin-right: ${theme.spacing.xs};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.65rem;
  }
`;
