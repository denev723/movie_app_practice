import styled from "styled-components";
import { Link } from "react-router-dom";
import theme from "../../styles/theme";

export const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: ${theme.spacing.xs} 0;

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: ${theme.spacing.sm};
  }
`;

export const Menu = styled.div`
  display: flex;
  gap: ${theme.spacing.md};

  @media (max-width: ${theme.breakpoints.mobile}) {
    gap: ${theme.spacing.sm};
    width: 100%;
    justify-content: center;
  }
`;

export const StyledNavLink = styled(Link)`
  position: relative;
  color: ${theme.colors.text.secondary};
  font-size: ${theme.fontSize.md};
  font-weight: ${theme.fontWeight.medium};
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  transition: ${theme.transition.default};

  &:hover,
  &.active {
    color: ${theme.colors.text.primary};
  }

  &.active::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 50%;
    transform: translateX(-50%);
    width: 20px;
    height: 3px;
    background-color: ${theme.colors.primary};
    border-radius: ${theme.borderRadius.small};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.fontSize.sm};
  }
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: ${theme.borderRadius.small};
  overflow: hidden;
  transition: ${theme.transition.default};
  border: 1px solid transparent;

  &:focus-within {
    border-color: ${theme.colors.text.secondary};
    background-color: rgba(255, 255, 255, 0.05);
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 100%;
    max-width: 320px;
  }
`;

export const SearchInput = styled.input`
  width: 200px;
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  color: ${theme.colors.text.primary};
  font-size: ${theme.fontSize.sm};
  background: transparent;

  &::placeholder {
    color: ${theme.colors.text.tertiary};
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 100%;
  }
`;

export const SearchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.primary};
  color: white;
  padding: ${theme.spacing.xs} ${theme.spacing.md};
  height: 100%;
  font-size: ${theme.fontSize.sm};
  font-weight: ${theme.fontWeight.medium};
  transition: ${theme.transition.default};
  white-space: nowrap; /* 줄바꿈 방지 */
  min-width: fit-content; /* 내용에 맞는 최소 너비 */

  &:hover {
    background-color: ${theme.colors.secondary};
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing.xs} ${theme.spacing.sm};
  }
`;
