import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.li`
  flex: 0 0 200px;
  border-radius: ${theme.borderRadius.medium};
  background-color: ${theme.colors.background.card};
  overflow: hidden;
  transition: ${theme.transition.default};
  box-shadow: ${theme.boxShadow.card};
  position: relative;
  /* 충분한 여백 확보를 위한 마진 추가 */
  margin: ${theme.spacing.sm} 0;

  &:hover {
    transform: scale(1.05);
    transform-origin: center;
    box-shadow: ${theme.boxShadow.hover};
    background-color: ${theme.colors.background.hover};
    z-index: 10; /* 호버 시 다른 요소 위에 표시 */
  }

  a {
    display: block;
    height: 100%;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex: 0 0 160px;
  }
`;

export const SeasonImage = styled.img`
  width: 100%;
  aspect-ratio: 2/3;
  object-fit: cover;
`;

export const SeasonTitle = styled.h4`
  font-size: ${theme.fontSize.md};
  font-weight: ${theme.fontWeight.bold};
  margin: ${theme.spacing.xs} 0;
  padding: 0 ${theme.spacing.sm};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.fontSize.sm};
  }
`;

export const SeasonInfo = styled.p`
  font-size: ${theme.fontSize.sm};
  color: ${theme.colors.text.secondary};
  padding: 0 ${theme.spacing.sm} ${theme.spacing.sm};

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.fontSize.xs};
  }
`;
