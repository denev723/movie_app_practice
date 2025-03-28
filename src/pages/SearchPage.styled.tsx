import styled from "styled-components";
import theme from "../styles/theme";

export const SectionWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const SectionTitle = styled.h2`
  font-size: ${theme.fontSize.xxl};
  font-weight: ${theme.fontWeight.bold};
  margin-bottom: ${theme.spacing.xl};
  color: ${theme.colors.text.primary};

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSize.xl};
    margin-bottom: ${theme.spacing.lg};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.fontSize.lg};
    margin-bottom: ${theme.spacing.md};
  }
`;
