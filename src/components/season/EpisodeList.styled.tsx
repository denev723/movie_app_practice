import styled from "styled-components";
import theme from "../../styles/theme";

export const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};

  @media (max-width: ${theme.breakpoints.mobile}) {
    gap: ${theme.spacing.sm};
  }
`;
