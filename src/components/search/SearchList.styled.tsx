import styled from "styled-components";
import theme from "../../styles/theme";

export const Section = styled.section`
  margin-bottom: ${theme.spacing.xxl}; // 섹션 간 간격 증가
`;

export const Title = styled.h3`
  font-size: ${theme.fontSize.xl};
  font-weight: ${theme.fontWeight.bold};
  margin-bottom: ${theme.spacing.xl}; // 제목과 아이템 사이 간격 증가
  color: ${theme.colors.text.primary};
  position: relative;
  padding-left: ${theme.spacing.md}; // 약간 더 여백

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px; // 약간 두껍게
    background-color: ${theme.colors.primary};
    border-radius: ${theme.borderRadius.small};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.fontSize.lg};
    margin-bottom: ${theme.spacing.lg}; // 모바일에서도 충분한 간격
    padding-left: ${theme.spacing.sm};
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: ${theme.spacing.md};

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: ${theme.spacing.sm};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: ${theme.spacing.xs};
  }
`;

export const Empty = styled.p`
  color: ${theme.colors.text.secondary};
  font-size: ${theme.fontSize.md};
  text-align: center;
  padding: ${theme.spacing.xl} 0;
`;

export const MoreButton = styled.button`
  display: block;
  margin: ${theme.spacing.xl} auto 0; // 상단 여백 증가
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  background-color: transparent;
  color: ${theme.colors.text.primary};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.medium};
  font-size: ${theme.fontSize.sm};
  font-weight: ${theme.fontWeight.medium};
  cursor: pointer;
  transition: ${theme.transition.default};

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-color: ${theme.colors.text.secondary};
  }
`;
