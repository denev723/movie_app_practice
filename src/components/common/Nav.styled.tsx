import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.base};
  background-color: ${({ theme }) => theme.colors.surface};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const Menu = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.base};
`;

export const StyledNavLink = styled(NavLink)`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-weight: 500;

  &.active {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const SearchForm = styled.form`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs};

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const SearchInput = styled.input`
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

export const SearchButton = styled.button`
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
