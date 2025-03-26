import styled, { keyframes } from "styled-components";
import { FlexCenter } from "../../styles/shared.styled";

export const Wrapper = styled.div`
  ${FlexCenter};
  width: 100%;
  height: 500px;
  padding: ${({ theme }) => theme.spacing.lg} 0;

  @media screen and (max-width: 768px) {
    height: 300px;
  }
`;

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  width: 64px;
  height: 64px;
  border: 6px solid ${({ theme }) => theme.colors.border};
  border-top-color: ${({ theme }) => theme.colors.accent};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;
