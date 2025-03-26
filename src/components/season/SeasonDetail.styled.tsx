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
    background: rgba(0, 0, 0, 0.7);
  }
`;

export const FlexBox = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.lg};
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Poster = styled.img`
  width: 240px;
  aspect-ratio: 2 / 3;
  border-radius: ${({ theme }) => theme.radius.base};
  object-fit: cover;
`;

export const Info = styled.div`
  flex: 1;

  h2 {
    font-size: ${({ theme }) => theme.fontSizes.title};
    margin-bottom: ${({ theme }) => theme.spacing.base};
  }

  p {
    font-size: ${({ theme }) => theme.fontSizes.base};
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const Meta = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing.sm}; // spacing.xs → sm
  line-height: 1.6; // 더 넉넉하게
`;

export const FullContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

export const SectionTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin-top: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  position: relative;
  z-index: 1;
`;

export const Overview = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  position: relative;
  z-index: 1;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.xl} 0;
  position: relative;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.base};
  cursor: pointer;
  margin-bottom: ${({ theme }) => theme.spacing.md};

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;
