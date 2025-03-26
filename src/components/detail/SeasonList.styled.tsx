import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

export const SectionTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin-top: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const SeasonWrap = styled.ul`
  display: flex;
  overflow-x: auto;
  gap: ${({ theme }) => theme.spacing.base};
  list-style: none;
  padding: ${({ theme }) => theme.spacing.sm} 0;
  margin: 0;

  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari */
  }
`;

export const SeasonItem = styled.li`
  flex: 0 0 200px; /* ✅ 카드 너비 고정 */
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
  background-color: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => theme.spacing.base};
  border-radius: ${({ theme }) => theme.radius.sm};

  h4 {
    font-size: ${({ theme }) => theme.fontSizes.base};
    margin-bottom: ${({ theme }) => theme.spacing.xs};
  }

  p {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.mutedText};
    line-height: 1.5;
  }
`;

export const SeasonImage = styled.img`
  width: 100%;
  border-radius: ${({ theme }) => theme.radius.sm};
  object-fit: cover;
  aspect-ratio: 2 / 3;
`;
