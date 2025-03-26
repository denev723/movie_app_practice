import styled from "styled-components";

export const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  margin: ${({ theme }) => theme.spacing.lg} 0 ${({ theme }) => theme.spacing.md};

  @media (max-width: 480px) {
    font-size: ${({ theme }) => theme.fontSizes.base};
  }
`;
