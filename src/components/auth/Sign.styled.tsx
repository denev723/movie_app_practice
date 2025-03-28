import styled from "styled-components";
import theme from "../../styles/theme";

export const AuthContainer = styled.div`
  max-width: 450px;
  margin: 0 auto;
  padding: ${theme.spacing.xl};
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: ${theme.borderRadius.medium};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing.lg};
  }
`;

export const AuthTitle = styled.h2`
  font-size: ${theme.fontSize.xxl};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.xl};
  text-align: center;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.fontSize.xl};
    margin-bottom: ${theme.spacing.lg};
  }
`;

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
`;

export const Input = styled.input`
  width: 100%;
  padding: ${theme.spacing.md};
  background-color: #333;
  border: none;
  border-radius: ${theme.borderRadius.small};
  color: ${theme.colors.text.primary};
  font-size: ${theme.fontSize.md};

  &:focus {
    outline: 2px solid ${theme.colors.text.secondary};
  }

  &::placeholder {
    color: ${theme.colors.text.tertiary};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing.sm};
    font-size: ${theme.fontSize.sm};
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: ${theme.spacing.md};
  background-color: ${theme.colors.primary};
  color: white;
  font-weight: ${theme.fontWeight.bold};
  font-size: ${theme.fontSize.md};
  border-radius: ${theme.borderRadius.small};
  border: none;
  cursor: pointer;
  transition: ${theme.transition.default};
  margin-top: ${theme.spacing.sm};

  &:hover {
    background-color: ${theme.colors.secondary};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing.sm};
    font-size: ${theme.fontSize.sm};
  }
`;

export const ErrorMessage = styled.p`
  color: ${theme.colors.primary};
  font-size: ${theme.fontSize.sm};
  margin-top: ${theme.spacing.xs};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
  margin-top: ${theme.spacing.md};

  @media (max-width: ${theme.breakpoints.mobile}) {
    gap: ${theme.spacing.sm};
  }
`;

export const SocialButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.sm};
  width: 100%;
  padding: ${theme.spacing.md};
  background-color: #333;
  color: ${theme.colors.text.primary};
  font-size: ${theme.fontSize.md};
  border-radius: ${theme.borderRadius.small};
  border: none;
  cursor: pointer;
  transition: ${theme.transition.default};

  &:hover {
    background-color: #444;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing.sm};
    font-size: ${theme.fontSize.sm};
  }
`;

export const SwitchContainer = styled.div`
  margin-top: ${theme.spacing.lg};
  text-align: center;
  color: ${theme.colors.text.secondary};
  font-size: ${theme.fontSize.sm};
`;

export const SwitchLink = styled.span`
  color: ${theme.colors.text.primary};
  cursor: pointer;
  margin-left: ${theme.spacing.sm};
  text-decoration: underline;

  &:hover {
    color: ${theme.colors.primary};
  }
`;
