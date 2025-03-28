import styled from "styled-components";

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing.base};
  background-color: ${({ theme }) => theme.colors.background};
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("/images/hero-bg.jpg");
    background-size: cover;
    background-position: center;
    opacity: 0.3;
    z-index: -1;
  }
`;

export const AuthTitle = styled.h1`
  color: ${({ theme }) => theme.colors.accent};
  font-size: ${({ theme }) => theme.fontSizes.title};
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  text-align: center;

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    margin-bottom: ${({ theme }) => theme.spacing.base};
  }
`;

export const AuthForm = styled.form`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.base};
  background-color: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.radius.base};
  box-shadow: ${({ theme }) => theme.shadows.card};
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.lg};
    max-width: 90%;
  }

  @media (max-width: 480px) {
    padding: ${({ theme }) => theme.spacing.base};
    gap: ${({ theme }) => theme.spacing.sm};
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.base};
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.sm};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.base};
  outline: none;
  transition:
    border-color 0.2s,
    box-shadow 0.2s;

  &:focus {
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 0 0 2px rgba(229, 9, 20, 0.2);
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.mutedText};
  }

  @media (max-width: 480px) {
    padding: ${({ theme }) => theme.spacing.sm};
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;

export const Button = styled.button`
  padding: ${({ theme }) => theme.spacing.base};
  background-color: ${({ theme }) => theme.colors.accent};
  color: #fff;
  border: none;
  border-radius: ${({ theme }) => theme.radius.sm};
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
  margin-top: ${({ theme }) => theme.spacing.base};

  &:hover {
    background-color: #c2070f;
  }

  &:disabled {
    background-color: #666;
    cursor: not-allowed;
  }

  @media (max-width: 480px) {
    padding: ${({ theme }) => theme.spacing.sm};
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;

export const SocialButton = styled.button`
  padding: ${({ theme }) => theme.spacing.base};
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: ${({ theme }) => theme.radius.sm};
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};

  &:hover {
    background-color: #444;
  }

  svg {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 480px) {
    padding: ${({ theme }) => theme.spacing.sm};
    font-size: ${({ theme }) => theme.fontSizes.sm};

    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.accent};
  background-color: rgba(229, 9, 20, 0.1);
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.radius.sm};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  text-align: center;
  margin: ${({ theme }) => theme.spacing.sm} 0;

  @media (max-width: 480px) {
    font-size: ${({ theme }) => theme.fontSizes.xs};
    padding: ${({ theme }) => theme.spacing.xs};
  }
`;

export const SwitchContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing.base};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.mutedText};
  text-align: center;
`;

export const SwitchLink = styled.span`
  color: ${({ theme }) => theme.colors.accent};
  cursor: pointer;
  margin-left: ${({ theme }) => theme.spacing.xs};

  &:hover {
    text-decoration: underline;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.base};
  margin-top: ${({ theme }) => theme.spacing.base};

  @media (max-width: 480px) {
    gap: ${({ theme }) => theme.spacing.sm};
  }
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: ${({ theme }) => theme.spacing.base} 0;

  &::before,
  &::after {
    content: "";
    flex: 1;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }

  span {
    padding: 0 ${({ theme }) => theme.spacing.base};
    color: ${({ theme }) => theme.colors.mutedText};
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }

  @media (max-width: 480px) {
    margin: ${({ theme }) => theme.spacing.sm} 0;

    span {
      padding: 0 ${({ theme }) => theme.spacing.sm};
      font-size: ${({ theme }) => theme.fontSizes.xs};
    }
  }
`;
