import styled from "styled-components";

export const SectionWrapper = styled.section`
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.base};
  background-color: ${({ theme }) => theme.colors.background};
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
`;

export const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  margin: ${({ theme }) => theme.spacing.lg} 0 ${({ theme }) => theme.spacing.md};
  transition:
    background-color 0.3s ease,
    color 0.3s ease;

  @media (max-width: 480px) {
    font-size: ${({ theme }) => theme.fontSizes.base};
  }
`;
