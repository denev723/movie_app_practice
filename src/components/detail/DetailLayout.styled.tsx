import styled from "styled-components";
import { makeImagePath } from "../../utils/imagePath";

export const Wrapper = styled.div<{ $backdrop?: string }>`
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.text};
  position: relative;
  background-color: ${({ theme }) => theme.colors.background};
  background-image: ${({ $backdrop }) => ($backdrop ? `url(${makeImagePath($backdrop, "w1920")})` : "none")};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.7); // ✅ 어두운 필터
    backdrop-filter: blur(4px);
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding: ${({ theme }) => theme.spacing.base};
  }
`;

export const ContentSection = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xl}; // 전체 줄거리-트레일러 영역 위 간격
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg}; // 내부 간격도 추가
`;
