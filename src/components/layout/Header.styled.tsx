import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.surface};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: ${({ theme }) => theme.spacing.base} 0;
`;

export const BoxWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const TopBar = styled.div`
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

export const LogoBox = styled.div``;

export const LogoLink = styled(Link)`
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

export const AuthBox = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.base};
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSizes.sm};

  &:hover {
    text-decoration: underline;
  }
`;
