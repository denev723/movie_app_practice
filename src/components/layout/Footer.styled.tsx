import styled from "styled-components";

export const FooterWrapper = styled.footer`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.base};
  background-color: ${({ theme }) => theme.colors.surface};
  text-align: center;
  margin-top: auto;
`;

export const FooterText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.mutedText};
`;
