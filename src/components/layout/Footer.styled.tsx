import styled from "styled-components";
import theme from "../../styles/theme";

export const FooterWrapper = styled.footer`
  width: 100%;
  background-color: ${theme.colors.background.dark};
  padding: ${theme.spacing.lg} 0;
  margin-top: ${theme.spacing.xxl};
  text-align: center;
  border-top: 1px solid ${theme.colors.border};
`;

export const FooterText = styled.p`
  color: ${theme.colors.text.secondary};
  font-size: ${theme.fontSize.xs};
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 ${theme.spacing.md};
`;
