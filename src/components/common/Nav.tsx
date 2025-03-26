import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Wrapper, Menu, StyledNavLink, SearchForm, SearchInput, SearchButton } from "./Nav.styled";

export default function Nav() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.currentTarget.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimText = query.trim();
    if (!trimText) {
      alert("검색어를 입력해주세요.");
      return;
    }
    if (trimText.length < 2) {
      alert("검색어는 2글자 이상 입력해주세요.");
      return;
    }
    navigate(`/search?query=${encodeURIComponent(trimText)}`);
    setQuery("");
  };

  const isMoviesActive = location.pathname.startsWith("/movies") || location.pathname.startsWith("/movie");
  const isTvActive = location.pathname.startsWith("/tv");
  return (
    <Wrapper>
      <Menu>
        <StyledNavLink to="/movies" className={isMoviesActive ? "active" : ""}>
          Movies
        </StyledNavLink>
        <StyledNavLink to="/tv" className={isTvActive ? "active" : ""}>
          TV Shows
        </StyledNavLink>
      </Menu>
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput onChange={handleChange} value={query} type="text" placeholder="검색어를 입력해주세요..." />
        <SearchButton type="submit">검색</SearchButton>
      </SearchForm>
    </Wrapper>
  );
}
