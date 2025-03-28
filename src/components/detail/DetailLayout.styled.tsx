import styled from "styled-components";
import theme from "../../styles/theme";

export const Wrapper = styled.div<{ $backdrop?: string }>`
  min-height: calc(100vh - 100px);
  width: 100%;
  padding: ${theme.spacing.xxl} ${theme.spacing.xl};
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: ${({ $backdrop }) => ($backdrop ? `url(${$backdrop})` : "none")};
    background-size: cover;
    background-position: center top;
    background-repeat: no-repeat;
    opacity: 0.3;
    z-index: -1;
    filter: blur(10px);
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      ${theme.colors.background.dark} 0%,
      transparent 20%,
      transparent 80%,
      ${theme.colors.background.dark} 100%
    );
    z-index: -1;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing.xl} ${theme.spacing.md};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing.lg} ${theme.spacing.sm};
  }
`;

export const ContentSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xxl}; // 섹션 간 간격 증가

  @media (max-width: ${theme.breakpoints.tablet}) {
    gap: ${theme.spacing.xl}; // 태블릿에서도 적절한 간격
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    gap: ${theme.spacing.lg}; // 모바일에서도 적절한 간격
  }
`;
