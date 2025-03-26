import Nav from "../common/Nav";
import { AuthBox, BoxWrapper, HeaderWrapper, LogoBox, LogoLink, StyledLink, TopBar } from "./Header.styled";

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
