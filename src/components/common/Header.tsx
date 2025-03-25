import { Link } from "react-router-dom";
import Nav from "./Nav";
import styled from "styled-components";

// styles for Header
const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.surface};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: ${({ theme }) => theme.spacing.base} 0;
`;

const BoxWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const TopBar = styled.div`
  padding: 0 ${({ theme }) => theme.spacing.base};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({ theme }) => theme.spacing.sm};
  }
`;

const LogoBox = styled.div``;

const LogoLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.accent};
  text-decoration: none;

  span {
    margin-right: 8px;
  }

  @media (max-width: 480px) {
    font-size: ${({ theme }) => theme.fontSizes.base};
  }
`;

const AuthBox = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.base};
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSizes.sm};

  &:hover {
    text-decoration: underline;
  }
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <BoxWrapper>
        <TopBar>
          <LogoBox>
            <h1>
              <LogoLink to="/">
                <span>🎬</span> Movie App
              </LogoLink>
            </h1>
          </LogoBox>
          <AuthBox>
            <StyledLink to="/login">로그인</StyledLink>
            <StyledLink to="/register">회원가입</StyledLink>
          </AuthBox>
        </TopBar>
        <Nav />
      </BoxWrapper>
    </HeaderWrapper>
  );
}
