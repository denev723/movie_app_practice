import styled from "styled-components";
import theme from "../../styles/theme";

export const Card = styled.li`
  display: flex;
  gap: ${theme.spacing.md};
  padding: ${theme.spacing.md};
  background-color: ${theme.colors.background.card};
  border-radius: ${theme.borderRadius.medium};
  transition: ${theme.transition.default};

  &:hover {
    background-color: ${theme.colors.background.hover};
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing.sm};
    gap: ${theme.spacing.sm};
  }
`;

export const Thumbnail = styled.img`
  width: 240px;
  aspect-ratio: 16/9;
  object-fit: cover;
  border-radius: ${theme.borderRadius.small};

  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 100%;
  }
`;

export const Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};
`;

export const Title = styled.h4`
  font-size: ${theme.fontSize.lg};
  font-weight: ${theme.fontWeight.bold};

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.fontSize.md};
  }
`;

export const Meta = styled.p`
  font-size: ${theme.fontSize.sm};
  color: ${theme.colors.text.secondary};
  margin-bottom: ${theme.spacing.xs};
`;

export const Overview = styled.p`
  font-size: ${theme.fontSize.md};
  line-height: 1.6;
  color: ${theme.colors.text.secondary};
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.fontSize.sm};
  }
`;
