import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";

// styles for Nav component
const Wrapper = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.base};
  background-color: ${({ theme }) => theme.colors.surface};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
  gap: ${({ theme }) => theme.spacing.sm};

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const Menu = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.base};
`;

const StyledNavLink = styled(NavLink)`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-weight: 500;

  &.active {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const SearchForm = styled.form`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs};

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const SearchInput = styled.input`
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.sm};
  background-color: #000;
  color: ${({ theme }) => theme.colors.text};
  flex: 1;

  @media (max-width: 480px) {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;

const SearchButton = styled.button`
  background-color: ${({ theme }) => theme.colors.accent};
  color: #fff;
  border: none;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.radius.sm};
  cursor: pointer;
  font-weight: 600;
  white-space: nowrap;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 480px) {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;

export default function Nav() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

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

  return (
    <Wrapper>
      <Menu>
        <StyledNavLink to="/movies">Movies</StyledNavLink>
        <StyledNavLink to="/tv">TV Shows</StyledNavLink>
      </Menu>
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput onChange={handleChange} value={query} type="text" placeholder="검색어를 입력해주세요..." />
        <SearchButton type="submit">검색</SearchButton>
      </SearchForm>
    </Wrapper>
  );
}
