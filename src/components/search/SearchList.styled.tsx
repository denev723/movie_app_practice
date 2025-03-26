import styled from "styled-components";

export const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.background};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.base};

  @media (max-width: 480px) {
    font-size: ${({ theme }) => theme.fontSizes.base};
  }
`;

export const Empty = styled.p`
  color: ${({ theme }) => theme.colors.mutedText};
  text-align: center;
  padding: ${({ theme }) => theme.spacing.lg};
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: ${({ theme }) => theme.spacing.base};
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const MoreButton = styled.button`
  margin: ${({ theme }) => theme.spacing.xl} auto 0; // 상단 여백 크게
  display: block;
  padding: ${({ theme }) => theme.spacing.base} ${({ theme }) => theme.spacing.xl}; // 버튼 크기 업
  background-color: ${({ theme }) => theme.colors.accent};
  color: #fff;
  border: none;
  border-radius: ${({ theme }) => theme.radius.base};
  font-size: ${({ theme }) => theme.fontSizes.base}; // 글씨 크기 약간 키움
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent}cc; // 살짝 투명도
  }
`;
