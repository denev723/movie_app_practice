import styled from "styled-components";
import theme from "../../styles/theme";

export const Main = styled.main`
  min-height: calc(100vh - 180px);
  width: 100%;
`;

export const Wrap = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: ${theme.spacing.xl} ${theme.spacing.md};

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing.lg} ${theme.spacing.sm};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing.md} ${theme.spacing.sm};
  }
`;
