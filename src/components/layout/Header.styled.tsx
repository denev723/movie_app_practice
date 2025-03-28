import styled from "styled-components";
import { Link } from "react-router-dom";
import theme from "../../styles/theme";

export const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.6) 60%, transparent 100%);
  z-index: 1000;
  padding: ${theme.spacing.sm} 0;
  transition: ${theme.transition.default};
  backdrop-filter: blur(8px);

  &.scrolled {
    background-color: ${theme.colors.background.dark};
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing.xs} 0;
  }
`;

export const BoxWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 ${theme.spacing.md};

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0 ${theme.spacing.sm};
  }
`;

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${theme.spacing.sm} 0;
`;

export const LogoBox = styled.div`
  h1 {
    font-size: ${theme.fontSize.xl};

    @media (max-width: ${theme.breakpoints.mobile}) {
      font-size: ${theme.fontSize.lg};
    }
  }
`;

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  color: ${theme.colors.primary};
  font-weight: ${theme.fontWeight.bold};
  transition: ${theme.transition.default};

  span {
    margin-right: ${theme.spacing.xs};
  }

  &:hover {
    opacity: 0.8;
  }
`;

export const AuthBox = styled.div`
  display: flex;
  gap: ${theme.spacing.md};

  @media (max-width: ${theme.breakpoints.mobile}) {
    gap: ${theme.spacing.sm};
  }
`;

export const StyledLink = styled(Link)`
  color: ${theme.colors.text.primary};
  font-size: ${theme.fontSize.sm};
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.small};
  transition: ${theme.transition.default};
  font-weight: ${theme.fontWeight.medium};

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  &:last-child {
    background-color: ${theme.colors.primary};

    &:hover {
      background-color: ${theme.colors.secondary};
    }
  }
`;
