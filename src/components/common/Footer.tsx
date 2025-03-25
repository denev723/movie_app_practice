import styled from "styled-components";

// styles for Footer
const FooterWrapper = styled.footer`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.base};
  background-color: ${({ theme }) => theme.colors.surface};
  text-align: center;
  margin-top: auto;
`;

const FooterText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.mutedText};
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterText>© 2025 Movie App. All rights reserved.</FooterText>
    </FooterWrapper>
  );
}
